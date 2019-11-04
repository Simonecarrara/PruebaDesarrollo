<template>
  <div>
    <h2>Modifica los campos del producto {{$route.params.id}}</h2>
    <h1>{{getPrById}}</h1>
    <form @submit="packNewProduct">
      <input type="text" v-model="name" name="name" placeholder="Name" required />
      <br />
      <input type="number" v-model="stock" name="stock" required min="0" placeholder="stock" />
      <br />
      <textarea
        type="textArea"
        v-model="description"
        name="description"
        placeholder="Descripción..."
      ></textarea>
      <br />
      <label for="image">Elige una imágen</label>
      <br />
      <input type="text" v-model="imageUrl" name="image" placeholder="URL de la imágen" />
      
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UpdProduct",
  data() {
    return {
      name: "",
      stock: "",
      description: "",
      imageUrl: "",
      id: this.$route.params.id
    };
  },
  computed: mapGetters([`getPrById`]),
  methods: {
    ...mapActions(["updateProduct"]),
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
    },
    getSelected(id){
        return this.getPrById(id);
    }
  },
  created(){
      this.getSelected(this.id);
  }
}
</script>
<style scoped>
</style>