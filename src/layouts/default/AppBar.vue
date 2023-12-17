<template>
  <v-app-bar flat>

    <v-app-bar-nav-icon @click.stop="navigationDrawer = !navigationDrawer" />
    <v-app-bar-title>
      <!-- <v-img src="@/assets/icons/Lethal_Company_Colored.svg" width="64" height="auto" /> -->
      <span class="font-weight-bold">
        Lethal Company Helper
      </span>
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

  <v-navigation-drawer :width="230" v-model="navigationDrawer">
    <!-- <v-list-item title="My Application" /> -->
    <v-divider></v-divider>
    <v-list-item link @click="$router.push({ name: 'home' })" title="Home" prepend-icon="home"></v-list-item>
    <v-divider></v-divider>
    <v-list-item link @click="$router.push({ name: 'moons' })" title="Moons" prepend-icon="circle"></v-list-item>
    <v-list-item link @click="$router.push({ name: 'monsters' })" title="Monsters" prepend-icon="skull"></v-list-item>
    <v-list-item link @click="$router.push({ name: 'items' })" title="Items" prepend-icon="construction"></v-list-item>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { ref } from 'vue'

const navigationDrawer = ref(false);

const theme = useTheme()

function toggleTheme() {
  // theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
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