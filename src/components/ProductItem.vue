<template>
<v-col cols="3">
    <v-card raised v-bind:class="{'outofstock':product.stock==0}">
                
        <v-img :src="product.imageURL" alt="imágen producto" v-if="product.imageURL" height="200px">
        </v-img>
        <v-card-title>{{product.name}}</v-card-title>
        <v-card-subtitle>Stock: {{product.stock}}</v-card-subtitle>
        <v-card-text>{{product.description}}</v-card-text>
        <v-card-actions>
            <v-btn @click="$emit('del-prod',product)">Elimina</v-btn>
            <v-btn @click="modProd(product.id)">Modifica</v-btn>
        </v-card-actions>
        
    </v-card>
</v-col>
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