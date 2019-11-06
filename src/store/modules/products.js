import axios from 'axios';
import * as firebase from 'firebase'

const state ={
    products:[]
};

const getters={
    allProducts:(state)=>state.products,
    getPrById:(state)=>(id)=>{state.products.filter(product=> product.id=== id)}
};

const actions={
    async fetchProducts({commit}){

        const response= await axios.get('https://almacen-vue.firebaseio.com/products.json').catch(err=>alert(err));

        commit('displayProducts', response);
    },

    async getProductById({commit},id){
        const response=await axios.get(`https://almacen-vue.firebaseio.com/products/${id}.json`).catch(err=>alert(err));
        commit('oneProduct', response);
    },

    /*async addProduct({commit},newProduct){
        const { name, description, stock, image}=newProduct;
  
        const response = await axios.post('https://almacen-vue.firebaseio.com/products.json',{
          name,
          description,
          stock,
          image
        }).catch(err=>alert(err));

        commit('addProduct', response);
    },*/
    async addProduct({commit},newProduct){
        const { name, description, stock, image}=newProduct;
        let key;
        let ext;
  
        await axios.post('https://almacen-vue.firebaseio.com/products.json',{
          name,
          description,
          stock,
        }).then(res=>{
            key=res.data.name;
            const filename=image.name;
            ext= filename.slice(filename.lastIndexOf('.'));
            return firebase.storage().ref('products/'+key+ext).put(image);
        }).then(()=>{
            return firebase.storage().ref('products/'+key+ext).getDownloadURL();
        }).then(fileData=>{
            return firebase.database().ref('products').child(key).update({imageURL:fileData})
        }).then((res)=>commit('image',res)).catch(err=>alert(err));
        
    },

    async deleteProduct({commit},id){
        await axios.delete(`https://almacen-vue.firebaseio.com/products/${id}.json`).catch(err=>alert(err));
        commit('deleted', id);
    },

    async updateProduct({commit},newProd){
        const{name, stock, description, imageURL, id}=newProd;
        const response=await axios.put(`https://almacen-vue.firebaseio.com/products/${id}.json`,{
            name,
            stock,
            description,
            imageURL
        }).catch(err=>alert(err));
        commit('modProduct',response);
    }
}

const mutations={
    displayProducts: (state,res)=>{
            const productArray=[];
            for(const key in res.data){
              productArray.push({...res.data[key],id: key})
            }
            state.products=productArray;
        },
    oneProduct:(state,response)=>state.products=response.data,
    addProduct: (state, res)=>{
        if(res){
            alert('Producto grabado correctamente');
        }else{
            alert('Producto no grabado');
        }
    },
    deleted:(state, id)=>state.products=state.products.filter(product=> product.id != id),
    modProduct: (state, res)=>{
        if(res){
            alert('Producto modificado correctamente');
        }else{
            alert('Modificación no grabada');
        }
    },
    image:(state,res)=>{
        
        if(res>0){
            alert(res);
        }else{
            alert('done');
        }
    }
};

export default{
    state,
    getters,
    actions,
    mutations
};