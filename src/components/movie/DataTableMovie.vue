<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left"> Name </th>
          <th class="text-left"> Genre </th>
          <th class="text-left"> Imdb Rating </th>
          <th class="text-left"> Duration </th>
          <th class="text-left"> Year </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in movies" :key="item.id" >
          <td>{{ item.name }}</td>
          <td>{{ item.genre }}</td>
          <td>{{ item.imdbRating }}</td>
          <td>{{ item.duration }}</td>
          <td>{{ item.year }}</td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: 'DataTableMovie',
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },

};
</script>

<style scoped>

</style>
