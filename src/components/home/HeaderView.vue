<template>
  <div class="flex text-center py-3 mb-3">
    <h3>Header</h3>
  </div>
  <div class="flex bg-success text-light border">
    <p class="lead fs-5 p-4">
      U ziet hieronder een overzicht van de items in de database Het is mogelijk
      items toe te voegen en / of aan te passen naar believen.
    </p>
  </div>
  <div class="flex mt-3 px-3 bg-light">
    <table class="table table-succes table-hover">
      <thead class="fw-4 bg-dark text-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">id</th>
          <th scope="col">Title</th>
          <th scope="col">Completed</th>
        </tr>
      </thead>
      <tbody v-for="(todo, index) in todos.todos" :key="index">
        <tr :class="{ green: todo.completed }">
          <th scope="row">{{ todo.userId }}</th>
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td>{{ todo.completed }}</td>
        </tr>
      </tbody>
    </table>
    <PagiNation
      :totalPages="totalPages"
      :currentPage="currentPage"
      :perPage="perPage"
      @pagechanged="onPageChange"
    />
    Todos Completed:
    <span>{{ this.doneTodos }}</span>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { mapGetters, mapState } from 'vuex'
import PagiNation from '../PagiNation.vue'

export default {
  name: 'HeaderView',
  components: {
    PagiNation,
  },
  data() {
    return {
      start: 0,
      end: 0,
      perPage: 10,
      totalPages: 0,
      currentPage: 1,
    }
  },
  computed: {
    // WE GET THE STATES AND THE GETTERS FROM OUR MODULE
    ...mapGetters(['doneTodos', 'getAllTodos']),
    ...mapState(['todos']),
  },
  mounted() {
    // HERE WE SEND THE CONSTRUCTIONS TO THE MODULE
    this.set_next()
    this.$store.dispatch('loadPosts', [this.start, this.perPage])
    this.$store.dispatch('all_the_todos')
    this.end = this.start + this.perPage
  },
  methods: {
    set_next() {
      this.totalPages = Math.round(this.getAllTodos / this.perPage)
      console.log('Setting totalPages')
      console.log(this.totalPages)
    },
    onPageChange(page) {
      console.log('button clicked', page)
      this.currentPage = page
    },
  },
}
</script>

<style scoped>
.green {
  background-color: rgb(49, 236, 173);
  color: rgb(41, 69, 29);
}
</style>
