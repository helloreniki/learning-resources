<template>
    <ul class="max-w-lg mx-auto flex flex-col gap-8 my-20">
        <LearningResource
            v-for="res in resources"
            :key="res.id"
            :title="res.title"
            :description="res.description"
            :link="res.link"
        />
    </ul>
</template>

<script setup>
import LearningResource from "./LearningResource.vue";

defineProps({
    resources: Object
})
</script>

<!-- <script>
import LearningResource from "../LearningResources/LearningResource.vue";

export default {
    components: {LearningResource},
    props: ['resources']

}
</script> -->
