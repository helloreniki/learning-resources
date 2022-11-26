<template>
    <header class="bg-pink-800 text-center p-16 text-5xl font-bold text-pink-50">
        <h1>{{ title }}</h1>
    </header>
</template>


<script setup>
defineProps({
    title: String
})
</script>

<!-- <script>
export default {
props: ['title']
}
</script> -->
