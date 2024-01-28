<script setup>
import axios from "axios";
import { ref } from "vue";
import { defineProps, defineEmits } from "vue";

// const props = defineProps();
const emit = defineEmits();
const item = ref({
    name: "",
});

// const add = () => {
//     // console.log("Hello");
//     emit("add"); // Emit the "add" event
// };

const addItem = () => {
    if (item.value.name == "") {
        alert("No Data Provided");
    }
    axios
        .post("api/item/store", {
            item: item.value,
        })
        .then((response) => {
            if (response.status == 201) {
                item.value.name = "";
                // window.location.reload();
                // emit("reloadList");
                // emit("add");
                // add();
                emit("add");
            }
        })
        .catch((error) => {
            console.log(error);
        });
};
</script>

<template>
    <div class="addItem">
        <input type="text" v-model="item.name" />
        <font-awesome-icon
            icon="plus-square"
            @click="addItem"
            :class="[item.name ? 'active' : 'inactive', 'plus']"
        />
    </div>
</template>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    background: #f7f7f7;
    border: 0px;
    outline: none;
    padding: 6px;
    margin: 10px;
    width: 100%;
}
.plus {
    font-size: 30px;
    cursor: pointer;
}
.active {
    color: #00ce25;
}
.inactive {
    color: #999999;
}
</style>
