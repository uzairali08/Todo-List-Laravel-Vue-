<script setup>
import axios from "axios";
import { defineProps, defineEmits } from "vue";

const { item } = defineProps(["item"]);
const emit = defineEmits();

// defineProps(["item"]);
// const { emit } = defineEmits();

const updateCheck = () => {
    axios
        .put("api/item/" + item.id, {
            item: item,
        })
        .then((response) => {
            if (response.status == 200) {
                // window.location.reload();
                emit("change");
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

const removeItem = () => {
    axios
        .delete("api/item/" + item.id)
        .then((response) => {
            if (response.status == 200) {
                // window.location.reload();
                emit("remove");
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
</script>

<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck"
            id="checkbox"
            v-model="item.completed"
        />
        <label
            for="checkbox"
            :class="[item.completed ? 'completed' : '', 'itemText']"
        >
            {{ item.name }}
        </label>
        <button @click="removeItem" class="trashcan">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
    color: #999999;
}
.itemText {
    width: 100%;
    margin-left: 20px;
}
.item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.trashcan {
    background: #e6e6e6;
    border: none;
    color: rgb(255, 42, 42);
    outline: none;
    cursor: pointer;
}
</style>
