<template>
    <div>
        <div v-bind:key="product.id" v-for="product in my_products">
            <h1>{{product.id}} es el id</h1>
            <ProductItem v-bind:product="product" v-on:del-prod="$emit('del-prod',product.id)"/>
        </div>
    </div>
</template>
<script>
import ProductItem from './ProductItem';

export default {
    name: 'ProductList',
    components: {
        ProductItem
    },
    props: ['my_products']
}
</script>
<style scoped>

</style>