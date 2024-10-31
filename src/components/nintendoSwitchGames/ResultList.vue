<template>
  <div>
    <article>
      <SearchCard v-for="result of results" :result="result" />
    </article>
  </div>
</template>

<script setup>
import SearchCard from './SearchCard.vue'

const results = [
  {
    image: 'game11.webp',
    title: 'Nintendo eShop Highlights',
    category: 'Nintendo Switch',
    date: '20/06/2024',
    price: '$ 49.99*',
    description: "Check out what's new on Nintendo eShop this week!"
  },
  {
    image: 'game12.webp',
    title: 'The Legend of Zelda: Echoes of Wisdom',
    date: '16/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Which style is yours?!'
  },
  {
    image: 'game13.webp',
    title: 'Nintendo eShop Highlights - 20/06/2024',
    date: '20/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: "Check out what's new on Nintendo eShop this week!"
  },
  {
    image: 'game14.webp',
    title: 'There are hundreds of possible Joy-Con controller combinations',
    date: '16/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Which style is yours?!'
  },
  {
    image: 'game15.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game16.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game17.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game18.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game19.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game20.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game21.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game22.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game23.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game24.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game25.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game26.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game27.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game28.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game29.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game30.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game31.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game32.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game33.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  },
  {
    image: 'game35.webp',
    title: 'You can save on these Nintendo Switch console Bundles!',
    date: '14/06/2024',
    category: 'Nintendo Switch',
    price: '$ 49.99*',
    description: 'Available at select retailers while stck last!'
  }
]
</script>

<!-- <style lang="ts" scoped></style> -->
