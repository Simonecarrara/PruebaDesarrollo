<template>
    <header class="header">
        <h1 v-on:click="onHome">Almacen</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/nuevoProducto">Crea un nuevo producto</router-link>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    methods:{
        onHome(){
            this.$router.push('/');
        }
    }
}
</script>
<style scoped>
.header{
    background: rgb(26, 26, 26);
    color: white;
    text-align: center;
    padding: 10px;
}
header a{
    color: white;
    text-decoration: none;
    padding-right: 5px;
}
</style>