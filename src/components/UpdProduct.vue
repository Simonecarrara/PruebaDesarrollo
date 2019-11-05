<template>
  <div>
    <h2>Modifica los campos del producto {{allProducts.name}}</h2>
    
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
      <img :src="allProducts.imageURL" alt="imágen producto">
      <input type="text" v-model="imageURL" name="image" :placeholder="allProducts.image" />
      
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
            stock: null,
            description: "",
            imageURL: "",
            id: this.$route.params.id
        };
    },
    methods: {
        ...mapActions(["updateProduct","getProductById"]),
        packNewProduct(e) {
            e.preventDefault();
            if (this.name.trim() != "" && this.stock != null && confirm('Estás a punto de modificar el producto. ¿Quieres seguir?')) {
                
                const newProduct = {
                    name: this.name,
                    description: this.description,
                    stock: this.stock,
                    imageURL: this.imageURL,
                    id:this.id
                };
                this.updateProduct(newProduct).then(() => {
                    this.name = "";
                    this.stock = 0;
                    this.description = "";
                    this.imageURL = "";
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