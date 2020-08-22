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
    nuevaFruta: '',
    total: 0,
  },
  methods: {
    agregarFruta () {
      this.frutas.push({
        nombre: this.nuevaFruta, cantidad: 0
      });
      this.nuevaFruta = "";
    }
  },
  computed: {
    sumarFrutas(){
      this.total = 0;
      for(fruta of this.frutas){
        this.total = this.total + fruta.cantidad;
      }
      return this.total;
    }
  }
})
