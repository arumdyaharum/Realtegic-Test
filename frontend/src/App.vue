<template>
  <div id="app" class="w-[300px] h-[710px] overflow-hidden border">
    <!-- <Home></Home> -->
    <Search />
  </div>
</template>

<script>
// import Home from './components/Home.vue';
import Search from './components/Search.vue';

export default {
  name: 'App',
  components: {
    // Home,
    Search,
  }
}
</script>
