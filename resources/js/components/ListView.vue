<script setup>
import ListItem from "./ListItem.vue";

defineProps(["items"]);
const emit = defineEmits();

const updateList = () => {
    console.log("Update occured");
    // getList();
};

// const deleted = () => {
//     console.log("Deleted Successfully");
// };
</script>

<template>
    <div>
        <div v-for="item in items" :key="item.id">
            <ListItem
                :item="item"
                v-on:remove="emit('deleted')"
                v-on:change="updateList"
                class="item"
            />
        </div>
    </div>
</template>

<style scoped>
.item {
    background: #e6e6e6;
    padding: 5px;
    margin-top: 8px;
}
</style>
