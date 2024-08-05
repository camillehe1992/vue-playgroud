<template>
  <div class="flex w-full">
    <VueDraggable
      ref="el"
      v-model="list"
      :animation="150"
      ghost-class="ghost"
      class="flex w-full flex-col gap-2 p-4 h-300px"
    >
      <div
        v-for="item in list"
        :key="item.id"
        class="cursor-move flex justify-between h-30"
      >
        <span>{{ item.id }}</span>
        <span>{{ item.name }}</span>
      </div>
    </VueDraggable>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VueDraggable } from "vue-draggable-plus";
const list = ref([
  {
    name: "风险编号",
    id: "riskNumber",
  },
  {
    name: "风险点等级",
    id: "rishLevel",
  },
  {
    name: "控制目标",
    id: "control target",
  },
  {
    name: "影响程度",
    id: "degree of influnce",
  },
]);
const el = ref();
</script>

<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
