<template>
  <DefaultLayout>

    <div>
      <h1>Home</h1>
      <p>Hello everyone, this is my new web site ive created for Leathal company</p>
    </div>

    <v-btn text="Awesome" :color=Colors.terminalGreen></v-btn>

  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '@/layouts/default/Default.vue';
import { Colors } from '@/plugins/vuetify';

</script>

<style scoped>
.custom-font {
  font-family: "3270-Regular";
}
</style>