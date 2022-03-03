<template>
  <div class="h-full w-full">
    <div class="px-5 py-3 flex justify-between items-center">
      <font-awesome-icon icon="fa-solid fa-bars" />
      <p class="font-bold">Audio</p>
      <img src="../assets/Ellipse 10.png" class="w-8 h-8" />
    </div>
    <div class="px-5">
      <p>Hi, Andrea</p>
      <p class="text-xl font-bold">What are you looking for today?</p>
      <router-link to="/search" class="w-full flex items-center my-5 px-3 py-2 border border-gray-300 rounded-md text-gray-300">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <span class="pl-3">Search headphone</span>
      </router-link>
    </div>
    <div class="h-full py-5 overflow-hidden rounded-t-xl bg-gray-100">
      <div class="px-5 mb-3 flex overflow-x-scroll">
        <button class="mr-5 py-1 px-3 rounded-full bg-emerald-300 text-white">Headphone</button>
        <button class="mr-5 py-1 px-3 rounded-full text-gray-500">Headband</button>
        <button class="mr-5 py-1 px-3 rounded-full text-gray-500">Earpads</button>
        <button class="py-1 px-3 rounded-full text-gray-500">Cable</button>
      </div>
      <div class="px-5 mb-3 flex overflow-x-scroll">
        <div class="w-fit h-36 mr-3 p-3 flex items-center rounded-xl bg-white">
          <div class="h-full w-[120px] flex flex-col justify-between">
            <p class="text-lg font-bold">TMA-2 Modular Headphone</p>
            <a class="text-emerald-300 font-bold">Shop now &nbsp; <font-awesome-icon icon="fa-solid fa-arrow-right" /></a>
          </div>
          <div class="h-28 w-[120px]">
            <img src="../assets/image 5.png" />
          </div>
        </div>
        <div class="w-fit h-36 p-3 flex items-center rounded-xl bg-white">
          <div class="h-full w-[120px] flex flex-col justify-between">
            <p class="text-lg font-bold">TMA-2 Modular Headphone</p>
            <a class="text-emerald-300 font-bold">Shop now &nbsp; <font-awesome-icon icon="fa-solid fa-arrow-right" /></a>
          </div>
          <div class="h-28 w-[120px]">
            <img src="../assets/image 5.png" />
          </div>
        </div>
      </div>
      <div class="mb-5 mx-5 flex justify-between">
        <p>Featured Products</p>
        <a class="text-gray-500">See All</a>
      </div>
      <div class="px-5 mb-5 flex overflow-x-scroll">
        <div class="w-fit h-full mr-3 p-3 rounded-xl bg-white">
          <div class="h-28 w-[140px] flex justify-center">
            <img src="../assets/image 5.png" />
          </div>
          <div class="h-full w-[140px]">
            <p>TMA-2 HD Wireless</p>
            <p>USD 350</p>
          </div>
        </div>
        <div class="w-fit h-full mr-3 p-3 rounded-xl bg-white">
          <div class="h-28 w-[140px] flex justify-center">
            <img src="../assets/image 5.png" />
          </div>
          <div class="h-full w-[140px]">
            <p>TMA-2 HD Wireless</p>
            <p>USD 350</p>
          </div>
        </div>
        <div class="w-fit h-full p-3 rounded-xl bg-white">
          <div class="h-28 w-[140px] flex justify-center">
            <img src="../assets/image 5.png" />
          </div>
          <div class="h-full w-[140px]">
            <p>TMA-2 HD Wireless</p>
            <p>USD 350</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
  .hidescroll {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-x: scroll;
  }
  .hidescroll::-webkit-scrollbar {
    display: none;
  }
</style>