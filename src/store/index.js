import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: [],
        allcomplete: false
    },

    getters: {
        getAllTodo: state => state.todoList,
        getAllTodoLength: state => state.todoList.length,
        getActiveTodo: state => state.todoList.filter(item => item.completed === false),
        getActiveTodoLength: (state, getters) => getters.getActiveTodo.length,
        getCompletedTodo: state => state.todoList.filter(item => item.completed === true),
        getCompletedTodoLength: (state, getters) => getters.getCompletedTodo.length
    },

    mutations: {
        getTodoList: state => {
            state.todoList = JSON.parse(localStorage.getItem('todo-vue')) || []
        },

        addOneTodo: (state,newtodo) => {
            let newid = state.todoList.length ? (state.todoList[state.todoList.length-1].id + 1) : 0
            if (newtodo.replace(/(^\s*)|(\s*$)/g, '') === '') { 
                return
            }
            state.todoList.push({
                id: newid,
                title: newtodo,
                completed:false,
                editing: false
            })
            localStorage.setItem('todo-vue', JSON.stringify(state.todoList))
        },

        completeAll: state => {
            if(state.allcomplete === false){
                state.todoList.forEach(item => item.completed = true)
                state.allcomplete = true
            } else{
                state.todoList.forEach(item => item.completed = false)
                state.allcomplete = false
            }
            localStorage.setItem('todo-vue', JSON.stringify(state.todoList))
        },

        removeOneTodo: (state,id) => {
            let index = state.todoList.findIndex(item => id === item.id)
            state.todoList.splice(index, 1)
            localStorage.setItem('todo-vue', JSON.stringify(state.todoList))
        },

        editOneTodo: (state,id) => {
            let item = state.todoList.find(item => id === item.id)
            item.editing = true
            localStorage.setItem('todo-vue', JSON.stringify(state.todoList))
        },

        saveOneTodo: (state,todo) => {
            let item = state.todoList.find(item => todo.id === item.id)
            item.editing = false
            item.title = todo.title
            localStorage.setItem('todo-vue', JSON.stringify(state.todoList))
        },

        changeOneTodoStatus: (state,id) => {
            let item = state.todoList.find(item => id === item.id)
            item.completed = !item.completed
            localStorage.setItem('todo-vue', JSON.stringify(state.todoList))
            console.log(item)
        },

        clearCompletedTodo: state => {
            state.todoList = state.todoList.filter(item => item.completed === false)
        }
    },

    actions: {

    }
})