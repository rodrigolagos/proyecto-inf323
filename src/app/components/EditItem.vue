<template lang="html">
  <div>
    <form v-on:submit.prevent="updateItem" class="card">
      <div class="card-body">
        <h3 class="card-title">Actualizar item</h3>
        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input type="text" name="name" v-model="item.name" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label for="price" class="col-sm-2 col-form-label">Precio:</label>
          <div class="col-sm-10">
            <input type="text" name="price" v-model="item.price" class="form-control">
          </div>
        </div>
        <div class="form-group row">
          <label for="file" class="col-sm-2 col-form-label">Archivo:</label>
          <div class="col-sm-10">
            <input type="file" name="file" ref="file" accept="image/*" class="file form-control">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Editar Item
        </button>
        <router-link :to="{ name:'DisplayItem' }" class="btn btn-danger">
          Cancelar
        </router-link>
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
    created() {
      this.getItem()
    },
    methods: {
      getItem() {
        this.axios.get('/item/' + this.$route.params.id)
          .then(res => {
            this.item = res.data
          })
          .catch(err => console.log(err))
      },
      updateItem() {
        this.file = this.$refs.file.files[0];
        console.log("this.file",this.file);

        if (isNaN(this.item.price)){
          alert("El precio debe ser un número.")
          return;
        }

        var data = new FormData()
        data.append('image', this.file)
        data.append('name', this.item.name)
        data.append('price', this.item.price)

        this.axios.put('/item/' + this.$route.params.id, data, {headers: { 'Content-Type': 'multipart/form-data' } })
          .then(res => {
            this.$router.replace({name: 'DisplayItem'})
          })
          .catch(err => console.log(err));
      }
    }
  }
</script>
