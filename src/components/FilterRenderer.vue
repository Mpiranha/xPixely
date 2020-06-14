<template>
  <ul class="nav filter-items-section">
    <li
      v-for="(filter, index) in filters"
      :key="index"
      class="nav-item"
      @click="removeElementFilterList(filter)"
    >
      <span class="filter-item">{{filter}}</span>
      <span class="flaticon-close icons remove-icon"></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    filters: {
      type: Array,
      default: null,
      required: true,
    },
  },
  mounted() {
  },
  data() {
    return {

    };
  },
  methods: {
    removeElementFilterList(filter) {
      this.$store.commit('removeElementFilterList', filter);
    },
  },
};
</script>

<style scoped>
.filter-items-section {
  margin-top: 1rem;
}
  .nav-item {
    border: 1px solid #9999;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    padding: 0.4rem 0.7rem;
    border-radius: 1.5rem;
    cursor: pointer;
  }


  .remove-icon::before {
    font-size: 0.4rem;
    color: var(--orange-accent);
    margin-left: 0.5rem;
    vertical-align: middle;
    display: none;
  }

  .nav-item:hover .remove-icon::before {
    display: inline;
  }
</style>
