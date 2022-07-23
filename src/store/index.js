import { createStore } from 'vuex'
import todos from './modules/todos'

// EXPORTEER DE MODULES 
export default createStore({
  modules: {
    todos
  }
})
