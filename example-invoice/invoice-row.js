Vue.component('invoice-row', {
  props: ['price', 'title'],
  template: `
    <tr>
      <td>
        <input
          :value="title"
          placeholder="product name"
          @change="onTitle($event.target.value)">
      </td>
      <td>
        <span>$</span>
        <input
          :value="price"
          placeholder="price"
          type="number"
          step="0.01"
          @change="onPrice($event.target.value)">
      </td>
    </tr>
  `,
  methods: {
    onTitle (title) {
      if (title) {
        this.$emit('new-title', title);
      } else {
        this.$emit('remove')
      }
    },
    onPrice (price) {
      this.$emit('new-price', price);
    }
  }
});
