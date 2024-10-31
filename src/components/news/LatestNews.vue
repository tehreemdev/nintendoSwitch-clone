<template>
  <div>
    <article>
      <h1
        class="h-14 md:h-20 lg:h-14 bg-white drop-shadow-lg font-bold lg:font-bold md:text-lg pl-8 lg:pl-8 md:pl10 flex items-center"
      >
        Latest News
      </h1>
    </article>
    <NewsCard v-for="newsItem in news" :news="newsItem" />
  </div>
</template>

<script setup>
import NewsCard from './NewsCard.vue'

const news = [
  {
    title: 'Nintendo eShop Highlights - 20/06/2024',
    date: '20/06/2024',
    category: 'Nintendo Switch',
    description: "Check out what's new on Nintendo eShop this week!",
    image: ''
  },
  {
    title: 'There are hundreds of possible Joy-Con controller combinations',
    date: '16/06/2024',
    category: '',
    description: 'Which style is yours?!',
    image: ''
  },
  {
    title: 'Nintendo eShop Highlights - 20/06/2024',
    date: '20/06/2024',
    category: 'Nintendo Switch',
    description: "Check out what's new on Nintendo eShop this week!",
    image: ''
  },
  {
    title: 'There are hundreds of possible Joy-Con controller combinations',
    date: '16/06/2024',
    category: '',
    description: 'Which style is yours?!',
    image: ''
  },
  {
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    description: 'Available at select retailers while stck last!',
    image: 'CardImage3.png'
  },
  {
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    description: 'Available at select retailers while stck last!',
    image: 'CardImage3.png'
  }
]
</script>

<style lang="ts" scoped></style>
