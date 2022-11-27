<template>
   {{currentTab}}
   <BaseCard>
        <BaseButton :mode="currentTab === 'StoredResources' ? 'active' : 'flat'" @click="setCurrentTab('StoredResources')">Stored Resources</BaseButton>
        <BaseButton :mode="currentTab === 'AddResource' ? 'active' : 'flat'" @click="setCurrentTab('AddResource')">Add Resource</BaseButton>
    </BaseCard>

    <!-- wont work with string :is="currentTab" only with object -->
    <component :is="tabs[currentTab]" />

</template>

<script setup>
import { provide, ref, markRaw} from 'vue';
import AddResource from "./AddResource.vue";
import StoredResources from './StoredResources.vue';

const tabs = {
    StoredResources,
    AddResource,
}

let currentTab = ref('StoredResources');

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
            selectedTab: 'storedResources',
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
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab;
        }
    },

}
</script> -->
