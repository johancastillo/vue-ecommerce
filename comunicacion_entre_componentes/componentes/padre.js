Vue.component('padre', {
  template: `
  <div class="p-5 bg-dark text-white">
    <h1>Componente Padre: {{ numeroPadre }}</h1>
    <button @click="numeroPadre++" class="btn btn-success">
      +
    </button>
    <button @click="numeroPadre--" class="btn btn-danger">
      -
    </button>

    <div class="mt-4"></div>

    <hijo :numero="numeroPadre"/>
  </div>
  `,
  data(){
    return {
      numeroPadre: 0
    }
  }
});
