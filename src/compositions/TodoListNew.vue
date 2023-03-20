<template>
  <section class="mb-8">
    <div>
      <div>
        <div>
          <div>
            <input class="input input-bordered w-full mb-4" type="text" id="todo_input" v-model="job" placeholder="여기에 할 일을 적으세요" />
          </div>
          <div class="flex justify-between mb-4">
            <div>
              <input class="input input-bordered w-full" type="date" v-model="date" />
            </div>
            <div>
              <button class="btn btn-primary" type="button" @click="onAddTodo">
                작업추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr/>
</template>

<script>
import { reactive, toRefs, inject, ref } from "vue";

export default {
  name: "TodoListNew",
  setup() {
    const today = inject('today')
    const addTodo = inject('addTodo')
    const val_obj = reactive({
      job: '',
      date: today,
      today: today,
    })

    const onAddTodo = () => {
      if (val_obj.job.length > 0) {
        addTodo(val_obj.job, val_obj.date)
        val_obj.job = ''
        val_obj.date = today
      }
    }

    return {
      ...toRefs(val_obj),
      onAddTodo,
    }
  },
}
</script>

<style scoped>

</style>