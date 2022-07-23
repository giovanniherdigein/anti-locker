import axios from 'axios'
const state = {
  todos: [],
  alltodos:[]
}
const actions = {
  loadPosts({ commit },[arg1,arg2])  {
    // let arg1 = 30
    // let arg2 =20
    const request = (`https://jsonplaceholder.typicode.com/todos?_start=${arg1}&_limit=${arg2}`)
    axios.get(request)
      .then(response => response.data)
      .then(data => {
          let todos = data;
          commit('INIT_TODOS', todos);
        }
      )
  },
  all_the_todos({commit}) {
    const request = ('https://jsonplaceholder.typicode.com/todos')
    axios.get(request)
      .then(response => response.data)
      .then(data => {
        let alltodos = data;
        commit('ALL_TODOS', alltodos)
      }
    )
  }
}
const mutations = {
  INIT_TODOS(state,data){
    state.todos = data
  },
  ALL_TODOS(state, data) {
    state.alltodos = data
    // console.log(data) 
   }
}
const getters={
  doneTodos: (state) => {
    return state.todos.filter(t=>t.completed).length
  },
  getAllTodos: (state) => {
    return state.alltodos.filter(t=>t).length
  }
}
export default {
  state,
  actions,
  mutations,
  getters,
}