<template>
  <div id="app">
    <Header />
    <AddProduct v-on:add-Product="addProduct"/>
    <ProductList v-bind:my_products="products" v-on:del-prod="deleteProduct"/>
  </div>
</template>

<script>
import ProductList from './components/ProductList';
import Header from './components/layout/Header';
import AddProduct from './components/AddProduct';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    ProductList,
    AddProduct
  },
  data(){
    return {
      products:[]
    }
  },
  methods:{
    deleteProduct(id){
      if (confirm("Estás seguro que quieres cancelar este producto?")){
        axios.delete(`https://almacen-vue.firebaseio.com/products/${id}.json`).then(
          this.products= this.products.filter(product=> product.id != id)
          )
        .catch(err=>alert(err));
        /*this.products= this.products.filter(product=> product.id != id);*/
      }
      
    },
    addProduct(newProduct){
      const { name, description, stock, image}=newProduct;

      axios.post('https://almacen-vue.firebaseio.com/products.json',{
        name,
        description,
        stock,
        image
      }).then(res=> {this.products=[...this.products, res]})
      .catch(err=>alert(err));
    },
  },
  created(){
    axios.get('https://almacen-vue.firebaseio.com/products.json')
      .then(/*res=>this.products=res.data*/res=>{
      const productArray=[];
      for(const key in res.data){
        productArray.push({...res.data[key],id: key})
      }
      this.products=productArray;
      }).catch(err=>alert(err));
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
body{
  font-family:Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
</style>
