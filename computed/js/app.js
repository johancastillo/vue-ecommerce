const app = new Vue({
  el: '#app',
  data: {
    mensaje: "Hola mundo con Vue"
  },
  computed: {
    invertido(){
      return this.mensaje.split('').reverse().join('');
    }
  }
})
