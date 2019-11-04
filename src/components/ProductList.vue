<template>
    <div>
        <h1>productlist works</h1>
        <p>{{allProducts}}</p>
        <div v-bind:key="product.id" v-for="product in allProducts">
            <h1>{{product.id}} es el id</h1>
            <ProductItem v-bind:product="product" 
            v-on:del-prod="delProd(product)"/>
        </div>
    </div>
</template>
<script>
import ProductItem from './ProductItem';
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'ProductList',
    methods:{
        ...mapActions(['fetchProducts','deleteProduct']),

        delProd(received_product){
            if (confirm(`¿confirmas que quieres eliminar el producto: ${received_product.name}?`)){
                this.deleteProduct(received_product.id);
            }
        },
    },
    components: {
        ProductItem
    },
    computed: mapGetters(['allProducts']),
    created(){
        this.fetchProducts();
    }
}
</script>
<style scoped>

</style>