<template>

<div>
    <h2>States you've visited</h2>

    <div class="state-list-container">
        <div class="state-container" v-for="state in states" v-bind:key="state.name">
            <!-- v-bind: state (in the child component) to "state" from this v-for-->
            <state-detail 
            v-bind:state="state"
            ></state-detail>
        </div>
    </div>
</div>

</template>

<script>

import StateDetail from './StateDetail.vue'

export default {
    components: {
        StateDetail
    },
    name: 'StatesVisited',
    data() {
        return {
            states: []
        }
    },
    mounted() {
        this.fetchVisitedStates()
    },
    methods: {
        fetchVisitedStates() {
            this.$stateService.getVisitedStates().then( states => {
                this.states = states
            })
            .catch( err => {
                alert('Sorry, can\'t fetch state list')
                console.error(err)
            })
        }
    }
}

</script>

<style scoped>

.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.state-container {
    margin: 1rem;
}

</style>