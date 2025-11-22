<script setup>
import Layout from './components/layouts/Layout.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('App mounted!')
  console.log('Base URL:', import.meta.env.BASE_URL)
})
</script>

<template>
  <Layout>
    <router-view/>
  </Layout>
</template>

<style scoped>
</style>