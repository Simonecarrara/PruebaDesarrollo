<template>
    <div>
        <h2>Completa la ficha del producto</h2>
        <form @submit="createProduct">
            <input type="text" v-model="name" name="name" placeholder="Name" required>
            <br/>
            <input type="number" v-model="stock" name="stock" required min="0" placeholder="stock">
            <br/>
            <textarea type="textArea" v-model="description" name="description" placeholder="Descripción...">
            </textarea>
            <br/>
            <label for="image">Elige una imágen</label>
            <br/>
            <img :src="imageURL" v-if="imageURL" alt="imágen seleccionada" style="max-width:100px;">
            <br/>
            <input type="file" accept="image/*" @change="onFilePicked">
            <!-- <input type="text" v-model="imageUrl" name="image" placeholder="URL de la imágen"> -->
            <!-- <img :src="imageUrl" alt="imágen seleccionada"> -->
            <br/>
            <input type="submit" value="Crea" >
        </form>
    </div>
</template>
<script>
import { mapActions} from 'vuex';
export default {
    name: 'AddProduct',
    data(){
        return{
            name:'',
            stock:'',
            description:'',
            image:null,
            imageURL:null
        }
    },
    methods:{
        ...mapActions(['addProduct']),
        createProduct(e){
            e.preventDefault();
            if (this.name.trim()!=''&& this.stock!=null){
                const newProduct = {
                    name: this.name,
                    description: this.description,
                    stock: this.stock,
                    image: this.image
                };
                this.addProduct(newProduct).then(()=>{
                    this.name='';
                    this.stock=0;
                    this.description='';
                    this.imageURL='';
                    this.$router.push('/');
                });
                
            }  
        },
        onFilePicked(event){
            const files=event.target.files;
            let filename = files[0].name;
            if(filename.lastIndexOf('.')<=0){
                return alert('Por favor inserta un fichero válido');
            }
            const fileReader= new FileReader();
            fileReader.addEventListener('load',()=>{
                this.imageUrl=fileReader.result
            })
            fileReader.readAsDataURL(files[0]);
            this.image=files[0];
        }
    }
    
}
</script>
<style scoped>

</style>
