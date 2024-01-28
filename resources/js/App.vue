<script setup>
import { onMounted, ref } from "vue";
import AddItemForm from "./components/AddItemForm.vue";
import ListView from "./components/ListView.vue";
import axios from "axios";

const items = ref([]);
const getList = () => {
    axios
        .get("api/items")
        .then((response) => {
            items.value = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

onMounted(() => {
    getList();
});

const reloadList = () => {
    console.log("reloadList");
    getList();
};

// const updateList = () => {
//     console.log("Update occured");
//     // getList();
// };

const deleted = () => {
    console.log("Deleted Successfully");
    reloadList();
};
</script>

<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <AddItemForm v-on:add="reloadList" />
        </div>
        <ListView :items="items" v-on:deleted="deleted" />
    </div>
</template>

<style scoped>
.todoListContainer {
    width: 500px;
    margin: auto;
}
.heading {
    background: #e6e6e6;
    padding: 10px;
}
#title {
    text-align: center;
}
</style>
