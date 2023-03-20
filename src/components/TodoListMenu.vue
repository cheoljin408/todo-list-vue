<template>
  <div class="flex justify-between mb-5 mt-8 items-center">
    <div>
      <span style="background-color: blue">&nbsp;</span>&nbsp;
      <strong class="text-lg">{{ state }}</strong>
    </div>
    <div>
      <div class="dropdown">
        <label tabindex="1" class="btn btn-sm m-1">리스트 필터</label>
        <ul tabindex="1" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="key in Object.keys(filters)" :key="key">
            <a @click="filter = key">
              {{ filters[key].str }}
            </a>
          </li>
        </ul>
      </div>
      <!--div>
        <button type="button">
          리스트 필터
        </button>
        <ul>
          <li v-for="key in Object.keys(filters)" :key="key">
            <a @click="filter = key">
              {{ filters[key].str }}
            </a>
          </li>
        </ul>
      </div-->
    </div>
  </div>
</template>

<script>
import { ref, watch, computed, inject } from "vue";

export default {
  name: "TodoListMenu",
  emits: ['change-filter'],
  setup(props, context) {
    const filters = inject('filters')
    const filter = ref(0)
    const state = computed(() => {
      return filters[filter.value].str
    })
    watch(
        () => filter.value,
        (filter) => {
          context.emit('change-filter', filter)
        }
    )

    return {
      state,
      filter,
      filters,
    }
  },
}
</script>

<style scoped>

</style>