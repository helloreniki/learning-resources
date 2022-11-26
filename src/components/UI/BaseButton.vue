<template>
    <button :type="type" class="bg-gray-200 hover:bg-gray-300 border text-sm rounded-lg px-3 py-1 border-gray-300">
        <slot />
    </button>
</template>

<script setup>
defineProps({
    type: String,
})
</script>
