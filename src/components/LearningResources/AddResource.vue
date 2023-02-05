<template>
    <div class="max-w-xl mx-auto my-8">
        <BaseCard>
            <form @submit.prevent="submitData" class="flex flex-col gap-4 text-sm p-2">
                <div class="flex flex-col gap-1">
                    <label for="title" class="ml-1 font-semibold">Title</label>
                    <input type="text" id="title" name="text" v-model="titleInput" class="border rounded-lg border-pink-200 px-2 py-1 focus:outline-none focus:border-pink-400">
                </div>
                <div class="flex flex-col gap-1">
                    <label for="description" class="ml-1 font-semibold">Description</label>
                    <textarea id="description" name="description" rows="3" v-model="descInput" class="border rounded-lg border-pink-200 px-2 py-1 focus:outline-none focus:border-pink-400"></textarea>
                </div>
                <div class="flex flex-col gap-1">
                    <label for="link" class="ml-1 font-semibold">Link</label>
                    <input type="url" id="link" name="link" v-model="linkInput" class="border rounded-lg border-pink-200 px-2 py-1 focus:outline-none focus:border-pink-400">
                </div>
                <BaseButton mode="active" type="submit" class="self-start mt-3">Add Resource</BaseButton>
            </form>
        </BaseCard>
    </div>
</template>

<script setup>
import { inject, ref } from 'vue';

const emit = defineEmits(['added'])

let titleInput = ref('');
let descInput = ref('');
let linkInput = ref('');


function submitData() {
    titleInput = titleInput.value;
    descInput = descInput.value;
    linkInput = linkInput.value;

    // console.log(titleInput);
    emit('added', titleInput, descInput, linkInput)

}

</script>

<!-- child ->parent communication: emit event, parent accept -->
