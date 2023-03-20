<template>
  <div class="sm:container sm:mx-auto px-10 py-10">
<!--    <div class="flex justify-center">-->
<!--      <h1 class="text-3xl font-bold">-->
<!--        Hello tailwindcss!-->
<!--      </h1>-->
<!--    </div>-->
    <header class="flex justify-center mb-8">
      <hgroup>
        <h1 class="text-3xl font-bold">나의 할일</h1>
        <em>{{ today }}</em>
      </hgroup>
    </header>
    <todo-list-container/>
  </div>
</template>

<script>
import { inject } from "vue";
import TodoListContainer from "./components/TodoListContainer.vue";

export default {
  name: 'App',
  components: {
    TodoListContainer,
  },
  setup() {
    const today = inject('today')

    return {
      today
    }
  },
}
</script>
