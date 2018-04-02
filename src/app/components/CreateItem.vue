<template lang="html">
  <div>

    <form v-on:submit.prevent="createItem" class="card">
      <div class="card-body">
        <h3 class="card-title">Agrega un item</h3>
        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Nombre:</label>
          <div class="col-sm-10">
            <input type="text" name="name" v-model="item.name" placeholder="Escribe el nombre" class="form-control" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="price" class="col-sm-2 col-form-label">Precio:</label>
          <div class="col-sm-10">
            <input type="text" name="price" v-model="item.price" placeholder="Escribe el precio" class="form-control" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="file" class="col-sm-2 col-form-label">Archivo:</label>
          <div class="col-sm-10">
            <input type="file" name="file" ref="file" accept="image/*" class="file form-control" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Agregar item
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
        item: {},
        file: ''
      }
    },
    methods: {
      createItem(e) {
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

        this.axios.post('/item', data, {headers: { 'Content-Type': 'multipart/form-data' } })
          .then(res => {
            this.$router.replace({name: 'DisplayItem'})
          })
          .catch(err => console.log(err));
      }
    }
  }
</script>
