<template>
   <!-- {{currentTab}}
   {{ storedResButtonMode }} -->
   <BaseCard>
        <BaseButton :mode="storedResButtonMode" @click="setCurrentTab('StoredResources')">Stored Resources</BaseButton>
        <BaseButton :mode="addResButtonMode" @click="setCurrentTab('AddResource')">Add Resource</BaseButton>
    </BaseCard>

    <!-- wont work with string :is="currentTab" only with object -->
    <component :is="tabs[currentTab]" />

</template>

<script setup>
import { computed } from '@vue/reactivity';
import { provide, ref } from 'vue';
import AddResource from "./AddResource.vue";
import StoredResources from './StoredResources.vue';

const tabs = {
    StoredResources,
    AddResource,
}

let currentTab = ref('StoredResources');

const storedResButtonMode = computed(() => {
   return currentTab.value === 'StoredResources' ? 'active' : 'flat'
});

const addResButtonMode = computed(() => {
   return currentTab.value === 'AddResource' ? 'active' : 'flat'
});

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

// console.log(selectedTab);
function setCurrentTab(tab){
    currentTab.value = tab;
}

// no need to pass to component, just accept it in component (available to all child components)
// provide(storedResources, 'resources');
provide('resources', storedResources);

</script>

<!-- <script>
import AddResource from "./AddResource.vue";
import StoredResources from './StoredResources.vue';

export default{
    components: {AddResource, StoredResources},
    data(){
        return {
            currentTab: 'storedResources',
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
    },
    provide(){
        return {resources: this.storedResources};
    },
    computed: {
        storedResButtonMode() {
            return this.currentTab === 'StoredResources' ? 'active' : 'flat';
        },
        addResButtonMode() {
            return this.currentTab === 'AddResource' ? 'active' : 'flat';
        }
    },
    methods: {
        setCurrentTab(tab){
            this.currentTab = tab;
        }
    },

}
</script> -->
