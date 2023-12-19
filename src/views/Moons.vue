<template>
    <DefaultLayout>
        <div class="mx-16">

            <h1>Moons</h1>
            <v-divider />

            <!-- <div class="d-flex justify-center"> -->
            <h2>Safe</h2>
            <v-sheet class="bg-grey-darken-3 d-flex flex-column " style="margin:8px; padding: 16px;" rounded>
                <MoonLayout v-for="moon in safeTierMoonList" :moon="moon" class="ma-1 pa-1" />
            </v-sheet>
            <v-divider />
            <h2>D</h2>
            <v-sheet class="bg-grey-darken-3 d-flex flex-column " style="margin:8px; padding: 16px;" rounded>
                <MoonLayout v-for="moon in DTierMoonList" :moon="moon" class="ma-1 pa-1" />
            </v-sheet>
            <v-divider />
            <h2>C</h2>
            <v-sheet class="bg-grey-darken-3 d-flex flex-column " style="margin:8px; padding: 16px;" rounded>
                <MoonLayout v-for="moon in CTierMoonList" :moon="moon" class="ma-1 pa-1" />
            </v-sheet>
            <v-divider />
            <h2>B</h2>
            <v-sheet class="bg-grey-darken-3 d-flex flex-column " style="margin:8px; padding: 16px;" rounded>
                <MoonLayout v-for="moon in BTierMoonList" :moon="moon" class="ma-1 pa-1" />
            </v-sheet>
            <v-divider />
            <h2>A</h2>
            <v-sheet class="bg-grey-darken-3 d-flex flex-column " style="margin:8px; padding: 16px;" rounded>
                <MoonLayout v-for="moon in ATierMoonList" :moon="moon" class="ma-1 pa-1" />
            </v-sheet>
            <v-divider />
            <h2>S</h2>
            <v-sheet class="bg-grey-darken-3 d-flex flex-column " style="margin:8px; padding: 16px;" rounded>
                <MoonLayout v-for="moon in STierMoonList" :moon="moon" class="ma-1 pa-1" />
            </v-sheet>
            <v-divider />
            <h2>S+</h2>
            <v-sheet class="bg-grey-darken-3 d-flex flex-column " style="margin:8px; padding: 16px;" rounded>
                <MoonLayout v-for="moon in SPlusTierMoonList" :moon="moon" class="ma-1 pa-1" />
            </v-sheet>
            <v-divider />

            <!-- <v-container justify-center class="d-flex flex-wrap ga-3">
                <MoonLayout />
            </v-container> -->

            <!-- </div> -->

        </div>
    </DefaultLayout>
</template>
  
<script lang="ts" setup>
import DefaultLayout from '@/layouts/default/Default.vue';
import MoonLayout from '@/components/moon/moon.vue';

import { ref } from 'vue'
import Moon from '@/models/moon'

import { HazardLevel, Difficulty } from '@/models/moon'

const safeTierMoonList = ref<Array<Moon>>([])
const DTierMoonList = ref<Array<Moon>>([])
const CTierMoonList = ref<Array<Moon>>([])
const BTierMoonList = ref<Array<Moon>>([])
const ATierMoonList = ref<Array<Moon>>([])
const STierMoonList = ref<Array<Moon>>([])
const SPlusTierMoonList = ref<Array<Moon>>([])

loadMoons();

function loadMoons() {  //? WILL BE MOVED TO DATABASE AND API LATER
    // Safe Moons
    safeTierMoonList.value.push(new Moon("71-Gordion (The Company Building)", HazardLevel.Safe, Difficulty.Safe, 0, 0, 0, "No land masses. Continual Storms.", "", "Unknown"))

    // D Tier Moons
    DTierMoonList.value.push(new Moon("220-Assurance", HazardLevel.D, Difficulty.Easy, 0, 1, 1, "Similar to its twin moon, 41-Experimentation, featuring far more jagged and weathered terrain.", "220-Assurance is far younger than its counterpart. Discovered not long before 41-Experimentation.", "Eyeless Dog, Earth Leviathan, Forest Keeper."));

    // C Tier Moons
    CTierMoonList.value.push(new Moon("56-Vow", HazardLevel.C, Difficulty.Easy, 0, 1, 1, "Humid.", "Vow appears to have been inhabited by several colonies across its continents, but there is now no sign of life, and they have become a mystery.", "Diverse, teeming with plant-life."));

    // B Tier Moons
    BTierMoonList.value.push(new Moon("41-Experimentation", HazardLevel.B, Difficulty.Easy, 0, 1, 1, "Arid. Low habitability, worsened by industrial artifacts.", " Not discovered for quite some time due to its close orbit around gas giant Big Grin. However it appears to have been used in secret.", "Unknown."));
    BTierMoonList.value.push(new Moon("21-Offense", HazardLevel.B, Difficulty.Intermediate, 0, 1, 1, "Believed to have splintered off from its cousin Assurance, Offense features similar jagged and dry conditions but differs in its ecosystem.", "21-Offense is categorized as an asteroid moon and seems to have not existed on its own for more than several hundred years. The industrial artifacts here have suffered damage; its believed they were built long before 21-Offense was splintered off.", "A competitive and toughened ecosystem supports aggressive lifeforms. Travelers to 21-Offense should know it's not for the faint of heart."));
    BTierMoonList.value.push(new Moon("61-March", HazardLevel.B, Difficulty.Intermediate, 0, 1, 3, "March undergoes constant drizzling weather. Its terrain is more expansive.", "This moon is overlooked due to its twin moon, Vow.", "Baboon Hawk, Circuit Bee, Eyeless Dog, Forest Keeper, Earth Leviathan"));

    // A Tier Moons
    ATierMoonList.value.push(new Moon("85-Rend", HazardLevel.A, Difficulty.Hard, 550, 1, 1, "Its planet orbits white dwarf star, making for inhospitable, cold conditions. Constant blizzards decrease visibility.", "Several famous travelers went missing here, giving it some reputation. Their bodies are unlikely to be found due to the planet's conditions.", "It's highly unlikely for complex life to exist here."));

    // S Tier Moons
    STierMoonList.value.push(new Moon("7-Dine", HazardLevel.S, Difficulty.Hard, 600, 1, 1, "Its planet orbits white dwarf star, making for inhospitable, cold conditions. Constant blizzards decrease visibility.", "Several famous travelers went missing here, giving it some reputation. Their bodies are unlikely to be found due to the planet's conditions.", "It's highly unlikely for complex life to exist here."));

    // S+ Tier Moons
    SPlusTierMoonList.value.push(new Moon("8-Titan", HazardLevel.SPlus, Difficulty.Hard, 700, 1, 1, "A frozen, flat landscape.", " It looks like this moon was mined for resources. It's easy to get lost within the giant industrial complex. There are many entrances to it littered about the landscape.", "Dangerous entities have been rumored to take residence in the vast network of tunnels."));
}
</script>
  
<style scoped></style>