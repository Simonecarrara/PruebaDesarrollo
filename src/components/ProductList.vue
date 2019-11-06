<template>
    <div>
            <h1>Lista de productos</h1>
            <v-container fluid color="primary">
                <v-row>
                    <ProductItem v-bind:product="product" 
                    v-on:del-prod="delProd(product)" v-bind:key="product.id" v-for="product in allProducts"/>                    
                </v-row>
            </v-container>      
        
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