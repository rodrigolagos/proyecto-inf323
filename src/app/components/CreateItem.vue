<template lang="html">
  <div>

    <form v-on:submit.prevent="createItem" class="card">
      <div class="card-body">
        <h3 class="card-title">Agrega un item</h3>
        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input type="text" name="name" v-model="item.name" placeholder="Escribe el nombre" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label for="price" class="col-sm-2 col-form-label">Precio:</label>
          <div class="col-sm-10">
            <input type="text" name="price" v-model="item.price" placeholder="Escribe el precio" class="form-control">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Agregar item
        </button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        item: {}
      }
    },
    methods: {
      createItem() {
        this.axios.post('/item', this.item)
          .then(res => {
            this.$router.replace({name: 'DisplayItem'})
          })
          .catch(err => console.log(err))
      }
    }
  }
</script>
