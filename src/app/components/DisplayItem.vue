<template lang="html">
  <div>
    <router-link :to="{ name:'CreateItem'}" class="btn btn-primary">
      Agregar Item
    </router-link>

    <h3>Mostrando Items</h3>

    <table class="table table-hover table-bordered table-striped">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Operaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>{{item.name}}</td>
          <td align="center">{{item.price}}</td>
          <td>
            <a href="" :data-featherlight="'uploads/'+item.image"><img :src="'uploads/'+item.image" alt="" width="150px"></a>
          </td>
          <td>
            <router-link :to="{ name:'EditItem', params:{id: item._id} }" class="btn btn-dark">
              Actualizar
            </router-link>
            <a href="" class="btn btn-danger" v-on:click="deleteItem(item)">
              <span class="glyphicon glyphicon-trash"></span>
              Eliminar
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    created() {
      this.getItems();
    },
    methods: {
      getItems() {
        this.axios.get('/item')
          .then(res => {
            this.items = res.data
          })
          .catch(err => console.log(err))
      },
      deleteItem(item) {
        const answer = confirm('Estas seguro de eliminar este item?')
        if (answer) {
          this.axios.delete('/item/' + item._id)
            .then(res => {
              this.items.splice(this.items.indexOf(item),1)
            })
            .catch(err => console.log(err))
        }
      }
    }
  }
</script>
