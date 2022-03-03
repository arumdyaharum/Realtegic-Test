<template>
  <div class="h-full w-full">
    <div class="px-5 py-3 flex justify-between items-center">
      <router-link to="/">
        <font-awesome-icon icon="fa-solid fa-angle-left" />
      </router-link>
      <p class="font-bold">Search</p>
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    </div>
    <div class="px-5 mb-5">
      <button class="w-full flex items-center my-5 px-3 py-2 border border-gray-300 rounded-md text-gray-300">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <span class="pl-3">Search headphone</span>
      </button>
    </div>
    <div class="px-5 mb-5">
      <p class="mb-3 font-bold">Lastest search</p>
      <div class="mb-3 flex justify-between">
        <div class="flex items-center">
          <font-awesome-icon icon="fa-regular fa-clock" class="text-gray-400" />
          <span class="ml-2">TMA2 Wireless</span>
        </div>
        <a>X</a>
      </div>
      <div class="mb-3 flex justify-between">
        <div class="flex items-center">
          <font-awesome-icon icon="fa-regular fa-clock" class="text-gray-400" />
          <span class="ml-2">Cable</span>
        </div>
        <a>X</a>
      </div>
    </div>
    <div class="px-5 mb-5">
      <p class="mb-3 font-bold">Popular product</p>
      <div class="w-full h-20 mb-3 flex">
        <div class="w-1/3 h-full mr-2 flex justify-center items-center rounded-lg bg-gray-100">
          <img src="../assets/image 5.png" class="h-16 w-16" />
        </div>
        <div class="w-2/3 h-full flex flex-col justify-between">
          <div>
            <a>TMA-2 DJ</a>
            <p class="font-bold">USD 270</p>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-500" />
              <span class="ml-1 mr-2">4.6</span>
              <span>86 Reviews</span>
            </div>
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </div>
        </div>
      </div>
      <div class="w-full h-20 mb-3 flex">
        <div class="w-1/3 h-full mr-2 flex justify-center items-center rounded-lg bg-gray-100">
          <img src="../assets/image 5.png" class="h-16 w-16" />
        </div>
        <div class="w-2/3 h-full flex flex-col justify-between">
          <div>
            <a>TMA-2 DJ</a>
            <p class="font-bold">USD 270</p>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-500" />
              <span class="ml-1 mr-2">4.6</span>
              <span>86 Reviews</span>
            </div>
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </div>
        </div>
      </div>
      <div class="w-full h-20 mb-3 flex">
        <div class="w-1/3 h-full mr-2 flex justify-center items-center rounded-lg bg-gray-100">
          <img src="../assets/image 5.png" class="h-16 w-16" />
        </div>
        <div class="w-2/3 h-full flex flex-col justify-between">
          <div>
            <a>TMA-2 DJ</a>
            <p class="font-bold">USD 270</p>
          </div>
          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <font-awesome-icon icon="fa-solid fa-star" class="text-yellow-500" />
              <span class="ml-1 mr-2">4.6</span>
              <span>86 Reviews</span>
            </div>
            <font-awesome-icon icon="fa-solid fa-ellipsis-vertical" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
}
</script>