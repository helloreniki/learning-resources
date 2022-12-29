<template>
   <!-- {{currentTab}}
   {{ storedResButtonMode }} -->
   <BaseCard>
        <BaseButton :mode="storedResButtonMode" @click="setCurrentTab('StoredResources')">Stored Resources</BaseButton>
        <BaseButton :mode="addResButtonMode" @click="setCurrentTab('AddResource')">Add Resource</BaseButton>
    </BaseCard>

    <!-- wont work with string :is="currentTab" only with object -->
    <KeepAlive>
        <component :is="tabs[currentTab]" @added="addResource"/>
    </KeepAlive>

    <!-- <StoredResources />
    <AddResource @added="addResource" /> -->

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

const storedResources = ref([
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
]);

// console.log(selectedTab);
function setCurrentTab(tab){
    currentTab.value = tab;
}

const addResource = function (title, description, url) {
    console.log('addResource func')
    console.log(title)
    console.log(url)
    const newResource = ref({
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
    });
    storedResources.value.unshift(newResource.value);
    currentTab.value = 'StoredResources';
    console.log(storedResources)
}

// no need to pass to component, just accept it in component (available to all child components)
// provide(storedResources, 'resources');
provide('resources', storedResources);
provide('currentTab', currentTab);
provide('addResource', addResource); // point at method, dont execute it with () addResource()

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
