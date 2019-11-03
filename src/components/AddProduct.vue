<template>
    <form @submit="addProduct">
        <input type="text" v-model="name" name="name" placeholder="Name">
        <input type="submit" value="Submit">
    </form>
</template>
<script>
export default {
    name: 'AddProduct',
    data(){
        return{
            name:''
        }
    },
    methods:{
        addProduct(e){
            e.preventDefault();
            const newProduct = {
                name: this.name,
                description: 'very good',
                stock: 2,
                image: 'https://www.focusjunior.it/content/uploads/2016/03/mela-1-e1544022106757.jpg'
            };
            this.$emit('add-Product', newProduct);
            this.name='';
        }
    }
}
</script>
<style scoped>

</style>
