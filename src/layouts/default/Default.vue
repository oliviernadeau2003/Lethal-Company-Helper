<template>
  <v-app style='font-family: "3270-Regular";'>
    <NavBar />

    <v-main style="margin: 24px;">
      <slot></slot>
    </v-main>

    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
import NavBar from './AppBar.vue'
import Footer from './Footer.vue'

</script>

<style scoped></style>