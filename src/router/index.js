import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../components/ProductList'
import AddProduct from '../components/AddProduct'
import UpdProduct from '../components/UpdProduct'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/nuevoProducto',
    name: 'nuevoProducto',
    component: AddProduct
  },
  {
    path:'/update/:id',
    name: 'modificarProducto',
    component: UpdProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
