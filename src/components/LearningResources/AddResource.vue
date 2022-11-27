<template>
    <div class="max-w-xl mx-auto my-8">
        <BaseCard>
            <form action="" class="flex flex-col gap-4 text-sm p-2">
                <div class="flex flex-col gap-1">
                    <label for="title" class="ml-1 font-semibold">Title</label>
                    <input type="text" id="title" name="text" class="border rounded-lg border-pink-200 px-2 py-1 focus:outline-none focus:border-pink-400">
                </div>
                <div class="flex flex-col gap-1">
                    <label for="description" class="ml-1 font-semibold">Description</label>
                    <textarea id="description" name="description" rows="3" class="border rounded-lg border-pink-200 px-2 py-1 focus:outline-none focus:border-pink-400"></textarea>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="link" class="ml-1 font-semibold">Link</label>
                    <input type="url" id="link" name="link" class="border rounded-lg border-pink-200 px-2 py-1 focus:outline-none focus:border-pink-400">
                </div>
                <BaseButton mode="active" type="submit" class="self-start mt-3">Add Resource</BaseButton>
            </form>
        </BaseCard>
    </div>
</template>

<script setup>
import BaseButton from '../UI/BaseButton.vue';


</script>
