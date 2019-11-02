<template>
  <div id="app">
    <ProductList v-bind:my_products="products" v-on:del-prod="deleteProduct"/>
  </div>
</template>

<script>
import ProductList from './components/ProductList';

export default {
  name: 'app',
  components: {
    ProductList
  },
  data(){
    return {
      products:[
        {
          id: 1,
          name: 'apple',
          description: 'very good',
          stock: 2,
          image: 'https://www.focusjunior.it/content/uploads/2016/03/mela-1-e1544022106757.jpg'
        },
        {
          id: 2,
          name: 'watermelon',
          description: 'very watery',
          stock: 0,
          image: 'https://images-na.ssl-images-amazon.com/images/I/71ogcdh7YjL._SX425_.jpg'
        },
        {
          id: 3,
          name: 'lemon',
          description: 'very acid',
          stock: 4,
          image: 'https://cdn.shopify.com/s/files/1/0862/5748/articles/limone_1_1200x1200.jpg?v=1535024060'
        }
      ]
    }
  },
  methods:{
    deleteProduct(id){
      this.products= this.products.filter(product=> product.id != id);
    }
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
