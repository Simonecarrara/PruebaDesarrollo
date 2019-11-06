<template>
<div>
    <v-app-bar color="blue-grey">
        <v-toolbar-title>Almacen</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn text><router-link to="/" class="white--text">Home</router-link></v-btn>
            <v-btn outlined color="blue-grey lighten-5"><router-link to="/nuevoProducto" class="white--text">Crea un nuevo producto</router-link></v-btn>
        </v-toolbar-items>
    </v-app-bar>
</div>
</template>
<script>
export default {
    name: 'Header',
}
</script>
<style scoped>

 a{
    color: white;
    text-decoration: none;
    padding-right: 5px;
}
</style>