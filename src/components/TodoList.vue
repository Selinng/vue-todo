<template>
    <ul v-cloak>
        <li v-for="item in filtertodo" :key="item.id">
            <input type="checkbox" :checked="item.completed" @click="changeOneTodoStatus(item.id)"/>
            <span class="titlespan" @dblclick="editOneTodo(item.id, item.title)" :class="{thide: item.editing}">
                <del v-if="item.completed" class="todo-uncomtitle">{{item.title}}</del>
                <span v-else class="todo-title" >{{item.title}}</span>
            </span>
            <input
             type="text" 
             class="edit" 
             v-focus="item.editing" 
             :class="{dbedit: item.editing}" 
             v-model="editingtitle" 
             @blur="saveOneTodo(item.id, editingtitle)" 
             @keyup.enter="saveOneTodo(item.id, editingtitle)">  

            <button class="remove" @click="removeOneTodo(item.id)">×</button>
        </li>
    </ul>
</template>
<script>
export default {
    data () {
        return {
            editingtitle: ''
        }
    },

    computed: {
        filtertodo () {
            switch (this.$route.name) {
                case 'all':
                    return this.$store.getters.getAllTodo
                    break
                case 'active':
                    return this.$store.getters.getActiveTodo
                    break
                case 'completed':
                    return this.$store.getters.getCompletedTodo
                    break
            }
            
        }
    },

    methods: {
        removeOneTodo (id) {
            this.$store.commit('removeOneTodo', id)
        },

        editOneTodo (id, title) {
            this.editingtitle = title
            this.$store.commit('editOneTodo', id)
            console.log(this.editingtitle)
        },

        saveOneTodo (id, editingtitle) {
            this.$store.commit('saveOneTodo', {
                id: id,
                title: editingtitle
            })
        },

        changeOneTodoStatus (id) {
            this.$store.commit('changeOneTodoStatus', id)
        }
    },

    created () {
        this.$store.commit('getTodoList')
    },

    directives: {
        focus(el, binding, vnode) {
            if(binding.value){
                el.focus()
            }
        }
    }
}
</script>
<style scoped>

</style>
