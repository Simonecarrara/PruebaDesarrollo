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
            <input type="text" v-model="imageUrl" name="image" placeholder="URL de la imágen">
            <!-- <img :src="imageUrl" alt="imágen seleccionada"> -->
            <br/>
            <input type="submit" value="Submit" >
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
            /*image:null,*/
            imageUrl:''
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
                    image: this.imageUrl
                };
                this.addProduct(newProduct).then(()=>{
                    this.name='';
                    this.stock=0;
                    this.description='';
                    this.imageUrl='';
                    this.$router.push('/');
                });
                
            }
            
        },
        /*processFile(e){
            const files=e.target.files;
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
            alert(this.image);
        }*/
    },
    
}
</script>
<style scoped>

</style>
