<template>
    <div>
        <h1>todos</h1>
        <div class="input-group todo-inputgroup input-group-lg">
            <span class="input-group-addon new-span" @click="completeAll" :class="{ selected: isactive }">
                <span class="select">❯</span>
            </span>
            <input type="text" class="form-control new-input" placeholder="What needs to be done?" v-model="newtodo" @keyup.enter="addOneTodo">
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            newtodo: ''
        }
    },

    computed: {
        isactive () {
            return this.$store.state.allcomplete
        }
    },

    methods: {
        completeAll () {
            this.$store.commit('completeAll')
        },

        addOneTodo () {
            this.$store.commit('addOneTodo', this.newtodo)
            this.newtodo = ''
        }
    }
}
</script>
<style scoped>

</style>