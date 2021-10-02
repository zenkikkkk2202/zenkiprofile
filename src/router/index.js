import Vue from "vue"
import VueRouter from "vue-router"
import Home from "@/views/Home.vue"
import Works from "@/views/Works.vue"
import About from "@/views/About.vue"
import Output from "@/views/Output.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: "/",component: Home},
    {path: "/works",component: Works},
    {path: "/about",component: About},
    {path: "/output",component: Output},
  ]
})

export default router


