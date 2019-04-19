<template>
    <footer class="thide" :class="{ tshow: allTodoLengths>0 }">
        <span v-cloak>{{unCompletedItems}} {{unCompletedItems>1?"items":"item"}} left</span>
        <div class="btn-group" role="group" >
            <router-link
                tag="button" 
                type="button" 
                class="btn btn-default btn-sm" 
                :to="{name: 'all'}"
                v-bind:class="{ active: status === 'all' }" 
            >All</router-link>
            <router-link
                tag="button" 
                type="button" 
                class="btn btn-default btn-sm" 
                :to="{name: 'active'}"
                v-bind:class="{ active: status === 'active' }" 
            >Active</router-link>
            <router-link
                tag="button" 
                type="button" 
                class="btn btn-default btn-sm" 
                :to="{name: 'completed'}"
                v-bind:class="{ active: status === 'completed' }" 
            >Completed</router-link>
            <!-- <button type="button" class="btn btn-default btn-sm" v-bind:class="{ active: status==0 }" @click="status=0">All</button>
            <button type="button" class="btn btn-default btn-sm" v-bind:class="{ active: status==1 }" @click="status=1">Active</button>
            <button type="button" class="btn btn-default btn-sm" v-bind:class="{ active: status==2 }" @click="status=2">Completed</button> -->
        </div>
        <a class="clear thide" v-bind:class="{ tshow: completedItems>0 }" @click="clearCompletedTodo">Clear completed</a>
    </footer>
</template>
<script>
export default {
    data () {
        return {
            // status: 'all'
        }
    },

    computed: {
        completedItems () {
            return this.$store.getters.getCompletedTodoLength
        },

        unCompletedItems () {
            return this.$store.getters.getActiveTodoLength
        },

        allTodoLengths () {
            return this.$store.getters.getAllTodoLength
        },

        status () {
            return this.$route.name
        }
    },

    methods: {
        clearCompletedTodo(){
            this.$store.commit('clearCompletedTodo')
        }
    },

    // watch: {
    //     $route(to, from){
    //         switch (to.name) {
    //             case 'all':
    //                 this.status = 'all'
    //                 break
    //             case 'active':
    //                 this.status = 'active'
    //                 break
    //             case 'completed':
    //                 this.status = 'completed'
    //                 break
    //         }
    //     }
    // }
}
</script>
<style scoped>

</style>
