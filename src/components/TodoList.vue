<template>
  <main class="mb-8">
    <div v-for="(todo, idx) in data" :key="todo.id">
      <div class="grid grid-cols-12 items-center">
        <div class="col-span-1 flex justify-center">
          <input class="input input-bordered" type="checkbox" :checked="todo.completed" :disabled="todo.completed" @click="completeTodo(todo.id)" />
        </div>
        <div class="col-span-5">
          <input class="input input-bordered w-full" type="date" :min="today" disabled :value="todo.date" />
        </div>
        <div class="col-span-5">
          <input class="input input-bordered w-full" type="text" :value="todo.job" />
        </div>
        <div class="dropdown col-span-1 flex justify-center">
          <label tabindex="1" class="btn m-1">할일 관리</label>
          <ul tabindex="1" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li v-for="item in menu" :key="item.str">
              <a @click="item.func(todo.id)">
                {{ item.str }}
              </a>
            </li>
          </ul>
        </div>
<!--        <button type="button">-->
<!--          할일 관리-->
<!--        </button>-->
<!--        <ul>-->
<!--          <li v-for="item in menu" :key="item.str">-->
<!--            <a @click="item.func(todo.id)">-->
<!--              {{ item.str }}-->
<!--            </a>-->
<!--          </li>-->
<!--        </ul>-->
      </div>
      <div v-show="idx + 1 < data.length" />
    </div>
  </main>
  <hr/>
</template>

<script>
import {inject} from "vue";

export default {
  name: "TodoList",
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  setup() {
    const removeTodo = inject('removeTodo')
    const completeTodo = inject('completeTodo')
    const today = inject('today')
    const menu = [
      {
        str: '할일 삭제',
        func: removeTodo,
      },
      {
        str: '할일 완료',
        func: completeTodo,
      },
    ]

    return {
      menu,
      today,
      completeTodo
    }
  }
}
</script>

<style scoped>

</style>