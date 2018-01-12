new Vue({
  el: '#app',
  data: {
    products: []
  },
  computed: {
    totalPrice () {
      return this.products.reduce(function (sum, item) {
        return sum + parseFloat(item.price);
      }, 0)
    }
  },
  methods: {
    changeItem(index, nextItem) {
      this.products[index] = nextItem;
    },
    removeItem(index) {
      this.products.splice(index, 1);
    },
    addItem() {
      this.products.push({
        title: '',
        price: 0
      })
    }
  }
})
