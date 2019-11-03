<template>
    <div v-bind:class="{'outofstock':product.stock==0}">
        <p>{{product.name}}+{{product.stock}}+{{product.image}}+{{product.description}} <button @click="$emit('del-prod',product.id)">delete</button></p>
    </div>
</template>
<script>
export default {
    name: 'ProductItem',
    props: ['product']
}
</script>
<style scoped>
.outofstock{
    color:red;
    text-decoration: line-through;
}
</style>