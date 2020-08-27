Vue.component('saludo', {
  template: '<h1>Mi primer componente</h1>'
});

const app = new Vue({
  el: '#app',
  data: {
    saludo: 'Hola desde Vue'
  }
})
