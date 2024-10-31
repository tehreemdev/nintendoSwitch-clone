<template>
  <div>
    <Navbar
      :showSideBar="showSideBar"
      @toggle="showSideBar = !showSideBar"
      class="sticky z-10 top-0"
    />
    <SideBar v-if="showSideBar" />
    <GameHeader />

    <div class="pl-1 md:pl-[84px] bg-zinc-100 pt-[2px]">
      <GamesList :games="mostInstalledGames" :showHeart="true" />
      <Recommendation />
      <LoadingList :games="recommendedGames" />

      <GamesList
        :games="nintendoGames"
        :title="'Nintendo Switch'"
        :showHeart="true"
        :seeMoreGames="'See All Nintendo Switch games '"
      />

      <GamesList :games="smartGames" :title="'Smart Device'" :seeMoreGames="'SEE ALL GAMES'" />
      <GamesList
        :games="recentlyReleasedGames"
        :title="'Recently Released'"
        :seeMoreGames="'SEE ALL GAMES '"
        :roundedImages="true"
      />

      <GamesList
        :games="upcomingGames"
        :title="'Upcoming Games'"
        :roundedImages="true"
        :findOutMore="'FIND OUT MORE'"
        :seeMoreGames="'SEE ALL GAMES '"
      />
      <footers class="w-[68%]" />
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/bar/Navbar.vue'
import SideBar from '@/components/bar/sideBar/SideBar.vue'
import GameHeader from '@/components/game/GameHeader.vue'
import GamesList from '@/components/game/GamesList.vue'
import LoadingList from '@/components/recommendation/LoadingList.vue'
import Recommendation from '@/components/recommendation/recommendation.vue'
import footers from '@/components/bar/footer.vue'
import { onMounted } from 'vue'
import { ref } from 'vue'
const showSideBar = ref(false)

window.addEventListener('resize', (el) => {
  console.log('check size', el)
  if (el?.currentTarget?.innerWidth >= 768) {
    showSideBar.value = true
  }
})

const mostInstalledGames = [
  {
    image: 'game10.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game8.webp',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    category: 'Nintendo Switch',
    price: '$59.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game3.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game4.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game5.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game6.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game7.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game2.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game1.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  }
]
const recommendedGames = [{}, {}, {}, {}]
const nintendoGames = [
  {
    image: 'game12.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game13.webp',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    category: 'Nintendo Switch',
    price: '$59.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game14.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game8.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game16.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game15.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game7.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game1.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game10.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game11.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  }
]

const smartGames = [
  {
    image: 'game17.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game18.webp',
    title: 'The Legend of Zelda: Tears of the Kingdom',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game19.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game20.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game21.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game22.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  }
]
const recentlyReleasedGames = [
  {
    image: 'game23.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game24.webp',
    title: 'The Legend of Zelda: Tears of the Kingdom',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game25.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game26.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game27.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game28.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game31.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game29.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game30.webp',
    title: 'Super Mario Bros.Wonder',

    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  }
]

const upcomingGames = [
  {
    image: 'game32.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game33.webp',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    category: 'Nintendo Switch',
    price: '$59.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game34.jpg',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game35.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game36.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  },
  {
    image: 'game28.webp',
    title: 'Super Mario Bros.Wonder',
    category: 'Nintendo Switch',
    price: '$49.99',
    description: 'Expect the unexpected in Mario latest 2D side scrolling adventure!'
  }
]
onMounted(() => {
  if (window.innerWidth > 768) {
    showSideBar.value = true
  }
})
</script>

<style lang="ts" scoped></style>
