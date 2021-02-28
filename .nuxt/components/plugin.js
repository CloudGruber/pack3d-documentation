import Vue from 'vue'

const globalComponents = {
  YouTube: () => import('../..\\components\\global\\YouTube.vue' /* webpackChunkName: "components_global/YouTube" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
