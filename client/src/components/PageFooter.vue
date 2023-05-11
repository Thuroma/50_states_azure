<template>
    <div>

        <div id="navigation-links">

            <span class="nav-link">
                <router-link v-bind:to="{ name: 'StateList' }">Home</router-link>
            </span>

            <span class="nav-link">
                <router-link v-bind:to="{ name: 'AboutSite' }">About</router-link>
            </span>

            <span class="nav-link">
                <router-link v-bind:to="{ name: 'StatesVisited' }">Visited States</router-link>
            </span>

        </div>

        <p>Header photo by <a href="https://unsplash.com/@chrislawton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chris Lawton</a> on <a href="https://unsplash.com/photos/KpBXAOs80YI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>

        <p><a target="_blank" href="https://icons8.com/icon/43632/map">Map</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></p>
        
    </div>
</template>

<script>

export default {
 name: "PageFooter"
}

</script>

<style scoped>

.nav-link {
    margin: 1rem;
}

</style>