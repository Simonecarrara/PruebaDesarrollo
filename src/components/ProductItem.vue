<template>
    <div v-bind:class="{'outofstock':product.stock==0}">
        <p>
            {{product.name}}+{{product.stock}}+{{product.image}}+{{product.description}} 
            <button @click="$emit('del-prod',product)">Elimina</button>
            <button @click="modProd(product.id)">Modifica</button>
        </p>
    </div>
</template>
<script>
export default {
    name: 'ProductItem',
    props: ['product'],
    methods:{
        modProd(id){this.$router.push(`/update/${id}`)}
    }
}
</script>
<style scoped>
.outofstock{
    color:red;
    text-decoration: line-through;
}
</style>