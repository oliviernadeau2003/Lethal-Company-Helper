<template>
    <v-dialog width="500" style='font-family: "3270-Regular";'>
        <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="See Details" elevation="3" class="terminal-style" />
        </template>

        <template v-slot:default="{ isActive }">
            <v-card :title=moon?.name>
                <v-card-text>

                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close" @click="isActive.value = false"></v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import Moon from '@/models/moon';
import { Colors } from '@/styles/Constants';

const props = defineProps({
    moon: Object as PropType<Moon>,
});

</script>

<style scoped>
.terminal-style {
    color: #01fc01;
    /* font-weight: bold; */
}
</style>