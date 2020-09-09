Vue.component('hijo', {
  template: `
  <div class="py-4 bg-success">
    <h3>Componente Hijo</h3>
    <h2>{{numero}}</h2>
  </div>
  `,
  props: ['numero']
});
