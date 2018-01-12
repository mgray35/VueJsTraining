Vue.component('invoice-list', {
  props: ['list', 'total'],
  template: `
    <table>
      <tbody>
        <invoice-row
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
          :price="item.price"
          @new-title="title => handleNewTitle(index, title)"
          @new-price="price => handleNewPrice(index, price)"
          @remove="$emit('remove', index)">
        </invoice-row>
        <tr>
          <td colspan="2">
            <button style="width: 100%;" @click="$emit('addnew')">
              Add Item
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>
            <span>Total</span>
          </td>
          <td>
            <span>$</span>
            <input readonly :value="total" type="number" step="0.01">
          </td>
        </tr>
      </tfoot>
    </table>
  `,
  methods: {
    handleNewTitle (index, title) {
      this.list[index].title = title;
      this.$emit('change', this.list[index]);
    },
    handleNewPrice (index, price) {
      this.list[index].price = price;
      this.$emit('change', this.list[index]);
    }
  }
});
