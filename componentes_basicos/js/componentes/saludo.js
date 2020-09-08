Vue.component('saludo', {
  template: `
  <div>
    <h1>{{ saludo }}</h1>
    <h3>Otro texto</h3>
  </div>
  `,
  data(){
    return {
      saludo: "Hola Mundo"
    }
  }
});
