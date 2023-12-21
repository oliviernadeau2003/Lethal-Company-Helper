<template>
    <div>

        <v-card elevation="4">
            <v-card-title>{{ moon?.name }}</v-card-title> <!-- ?.toUpperCase() ?? -->
            <v-card-text class="">
                Travel Cost : '{{ moon?.travelCost }} CP |
                <!-- <v-btn text="See Map" elevation="3"></v-btn>-->
                <moonDetails :moon="moon" />
            </v-card-text>
        </v-card>

        <!-- <v-card>
            <v-card-title>{{ moon?.name }}</v-card-title>

            <v-card-subtitle>
                Hazard Level: {{ moon?.hazardLevel }}, Difficulty: {{ moon?.difficulty }}
            </v-card-subtitle>

            <v-card-text>
                <div>Travel Cost: {{ moon?.travelCost }}</div>
                <div>Main Entrance: {{ moon?.mainEntrance }}</div>
                <div>Fire Exist: {{ moon?.fireExist }}</div>
                <div>Conditions: {{ moon?.conditions }}</div>
                <div>History: {{ moon?.history }}</div>
                <div>Fauna:
                    <v-chip v-for="(creature, index) in moon?.fauna" :key="index" label>
                        {{ creature }}
                    </v-chip>
                </div>
            </v-card-text>
        </v-card> -->


    </div>
</template>
<script setup lang="ts">
import { ref, PropType, onMounted } from 'vue';
import Moon from '@/models/moon';
import moonDetails from '@/components/moon/moonDetail.vue';

const props = defineProps({
    moon: Object as PropType<Moon>,
});

const moon = ref<Moon>()

onMounted(() => {
    moon.value = props.moon || new Moon();
});

</script>
<style scoped></style>