<template>
    <button
        :type="type"
        class="rounded-lg px-3 py-2"
        :class="{
            'bg-gray-200 hover:bg-gray-300 border border-gray-300': mode === 'normal',
            'text-pink-500 hover:text-pink-600': mode === 'flat',
            'bg-pink-200 text-pink-700 font-semibold': mode === 'active'
        }"
    >
        <slot />
    </button>
</template>

<script setup>
defineProps({
    type: String,
    mode: String
})
</script>
