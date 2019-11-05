<template>
  <div>
    <h2>Modifica los campos del producto {{$route.params.id}}</h2>
    <h1>desde la propriedad = {{allProducts}}</h1>
    <h2>nombre? {{allProducts.name}}</h2>
    <form @submit="packNewProduct">
      <input type="text" v-model="name"  name="name" :placeholder="allProducts.name" required />
      <br />
      <input type="number" v-model="stock" name="stock" required min="0" :placeholder="allProducts.stock" />
      <br />
      <textarea
        type="textArea"
        v-model="description"
        name="description"
        :placeholder="allProducts.description"
      ></textarea>
      <br />
      <label for="image">Elige una imágen</label>
      <br />
      <input type="text" v-model="imageUrl" name="image" :placeholder="allProducts.image" />
      
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "UpdProduct",
    computed: mapGetters(['allProducts']),
    data() {
        return {
            name: "",
            stock: "",
            description: "",
            imageUrl: "",
            id: this.$route.params.id
        };
    },
    methods: {
        ...mapActions(["updateProduct","getProductById"]),
        packNewProduct(e) {
            e.preventDefault();
            if (this.name.trim() != "" && this.stock != null) {

                const newProduct = {
                    name: this.name,
                    description: this.description,
                    stock: this.stock,
                    image: this.imageUrl
                };
                this.updateProduct(newProduct).then(() => {
                    this.name = "";
                    this.stock = 0;
                    this.description = "";
                    this.imageUrl = "";
                    this.$router.push("/");
                });
            }
        }
    
    },
    created(){
        this.getProductById(this.$route.params.id);
    }
}
</script>
<style scoped>
</style>