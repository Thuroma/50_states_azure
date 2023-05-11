<template>

    <div class="state-map">
        <h2>The state of {{ state.name }}</h2>

        <p v-if="state.visited">You have visited this state.</p>
        <p v-else>You have not visited the state yet</p>

        <!-- TODO - map here -->

        <div id="map-container" v-if="dataReady">
            <!-- l-map emits a ready signal when the map is loaded, calls onMapReady to set mapReady to true -->
            <l-map ref="map" v-on:ready="onMapReady" v-bind:center="mapCenter" v-bind:zoom="state.zoom">
                <l-tile-layer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; OpenStreetMap contributors">
                </l-tile-layer>
            </l-map>
        </div>

    </div>

</template>

<script>

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'

export default {
    name: 'StateMap',
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            state: {},
            // When the map isn't ready and the api call isn't done
            dataReady: false,
            mapReady: false
        }
    },
    mounted() {
        // The param passed from index.js route
        this.state.name = this.$route.params.state

        // Make a request to fetch the state data
        this.fetchStateData()
    },
    methods: {
        fetchStateData() {
            this.$stateService.getOneState(this.state.name).then( state => {
                this.state = state
                // Signifies the data is ready
                this.dataReady = true
            }).catch( err => {
                // 404 not found
                if ( err.response && err.response.status === 404 ) {
                    this.state.name = '?' // todo think about a better way to communicate to the user
                } else {
                    // 500 server error
                    alert('Sorry, error fetching data about this state')    // generic message for user
                    console.error(err)
                }

            })
        },
        onMapReady() {
            this.mapReady = true
        },
        setMapView() {
            if (this.mapReady && this.dataReady) {
                // todo - make sure map shows the correct part of the world and zoom level
                this.$refs.map.leafletObject.setView(this.mapCenter, this.zoom)
            }
        }
    },
    computed: {
        mapCenter() {
            return [this.state.lat, this.state.lon]
        }
    }
}
</script>

<style scoped>

#map-container {
    height: 30rem;
}

</style>
