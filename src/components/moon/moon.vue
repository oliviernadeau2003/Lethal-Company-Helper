<template>
    <div>

        <v-card elevation="4">
            <v-card-title>{{ moon?.name }}</v-card-title> <!-- ?.toUpperCase() ?? -->
            <v-card-text>
                {{ moon?.travelCost }}
                <!-- <v-btn text="See Map" elevation="3"></v-btn>-->
                <moonDetails :moon="moon" />
            </v-card-text>
        </v-card>

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