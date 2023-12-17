<template>
  <DefaultLayout>

    <v-card title="Home" elevation="5" width="475">
      <v-card-text>
        <p>Hello everyone, this is my new web site ive created for Leathal company.</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text="Awesome" elevation="5"></v-btn>
      </v-card-actions>
    </v-card>

  </DefaultLayout>
</template>

<script lang="ts" setup>
import DefaultLayout from '@/layouts/default/Default.vue';
import { Colors } from '@/plugins/vuetify';

</script>

<style scoped></style>