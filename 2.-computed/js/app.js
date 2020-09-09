const app = new Vue({
  el: '#app',
  data: {
    mensaje: "Hola mundo con Vue",
    contador: 0,
    color: 'bg-success'
  },
  computed: {
    invertido(){
      return this.mensaje.split('').reverse().join('');
    },
    cambiarColor(){
      return {
        'bg-success' : this.contador <= 10,
        'bg-warning' : this.contador > 10 && this.contador < 20,
        'bg-danger' : this.contador >= 20
      }
    }
  }
})
