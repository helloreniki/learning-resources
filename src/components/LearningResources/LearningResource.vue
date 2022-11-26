<template>
    <BaseCard>
        <li class="flex flex-col gap-4">
            <header class="flex items-center justify-between">
                <h3 class="text-2xl font-semibold">{{ title }}</h3>
                <button class="px-3 py-1 rounded-lg bg-gray-200 border border-gray-300 text-sm">Delete</button>
            </header>
            <p class="">{{ description }}</p>
            <nav>
                <a :href="link" class="text-pink-600 hover:text-pink-500">View Resource</a>
            </nav>
        </li>
    </BaseCard>
</template>

<script setup>
// import BaseCard from "../UI/BaseCard.vue"; -> register it globally in main.js

defineProps({
    title: String,
    description: String,
    link: String
})

</script>

<!-- <script>
export default {
    props: ['title', 'description', 'link']
}
</script> -->
