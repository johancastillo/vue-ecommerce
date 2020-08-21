const app = new Vue({
  el: '#app',
  data: {
    title: 'Hola Mundo con Vue',
    frutas: [
      {nombre: 'Pera', cantidad: 10},
      {nombre: 'Manzana', cantidad: 0},
      {nombre: 'Cambur', cantidad: 20},
      {nombre: 'Fresa', cantidad: 50},
    ],
    nuevaFruta: ''
  },
  methods: {
    agregarFruta () {
      this.frutas.push({
        nombre: this.nuevaFruta, cantidad: 0
      })
    }
  }
})
