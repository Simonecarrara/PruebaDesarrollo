import axios from 'axios';

const state ={
    products:[]
};

const getters={
    allProducts:(state)=>state.products,
    getPrById:(state)=>(id)=>{state.products.filter(product=> product.id=== id)}
};

const actions={
    async fetchProducts({commit}){

        const response= await axios.get('https://almacen-vue.firebaseio.com/products.json');

        commit('displayProducts', response);
    },

    async addProduct({commit},newProduct){
        const { name, description, stock, image}=newProduct;
  
        const response = await axios.post('https://almacen-vue.firebaseio.com/products.json',{
          name,
          description,
          stock,
          image
        });

        commit('addProduct', response);
    },

    async deleteProduct({commit},id){
        await axios.delete(`https://almacen-vue.firebaseio.com/products/${id}.json`);
        commit('deleted', id);
    },

    async updateProduct({commit},id,newProd){
        const{name, stock, description, image}=newProd;
        const response=await axios.put(`https://almacen-vue.firebaseio.com/products/${id}.json`,{
            name,
            stock,
            description,
            image
        });
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
    }
};

export default{
    state,
    getters,
    actions,
    mutations
};