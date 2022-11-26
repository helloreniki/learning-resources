<template>
  <StoredResources :resources="storedResources" />
</template>

<script setup>
import StoredResources from "./components/LearningResources/StoredResources.vue";
import LearningResource from "./components/LearningResources/LearningResource.vue";

const storedResources = [
    {
        id: 'official-guide',
        title: 'Official Guide',
        description: 'The official Vue.js documentation.',
        link: 'https://vuejs.org'
    },
    {
        id: 'google',
        title: 'Google',
        description: 'Learn to google...',
        link: 'https://google.com'
    },
];

</script>

<!-- <script>
import StoredResources from "./components/LearningResources/StoredResources.vue";

export default {
    components: { StoredResources },
    data() {
        return {
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'Official Guide',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org'
                },
                {
                    id: 'google',
                    title: 'Google',
                    description: 'Learn to google...',
                    link: 'https://google.com'
                },
            ],
        };
    }
}
</script> -->
