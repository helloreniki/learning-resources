<template>
  <TheHeader title="RememberMe" />
  <TheResources />
</template>

<script setup>
import TheResources from "./components/LearningResources/TheResources.vue";
import TheHeader from "./components/Layouts/TheHeader.vue";

</script>

<!-- <script>
import StoredResources from "./components/LearningResources/StoredResources.vue";
import TheHeader from "./components/Layouts/TheHeader.vue";

export default {
    components: { StoredResources, TheHeader },
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
