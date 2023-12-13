<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <!-- <v-icon icon="mdi-circle-slice-4" /> -->

      <span class="font-weight-bold">Lethal Company Helper</span>
    </v-app-bar-title>

    <v-btn @click="displaySearchBar">
      <v-icon icon="search" class="material-icons md-28" />
    </v-btn>

    <v-btn @click="toggleTheme">
      <v-icon v-if="theme.global.current.value.dark" icon="light_mode" class="material-icons md-28" />
      <v-icon v-else icon="dark_mode" class="material-icons md-28" />
      <!-- toggle theme -->
    </v-btn>

    <v-btn @click="displaySetting">
      <v-icon icon="settings" class="material-icons md-28" />
    </v-btn>

    <v-btn @click="displayAccount">
      <v-icon icon="account_circle" class="material-icons md-28" />
    </v-btn>




  </v-app-bar>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function displaySetting() { }

function displayAccount() { }

function displaySearchBar() { }

</script>

<style scoped>
.material-icons.md-18 {
  font-size: 18px;
}

.material-icons.md-24 {
  font-size: 24px;
}

.material-icons.md-28 {
  font-size: 28px;
}

.material-icons.md-36 {
  font-size: 36px;
}

.material-icons.md-48 {
  font-size: 48px;
}
</style>