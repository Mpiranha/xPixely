<template>
  <div class="d-flex">
    <div>
      <div class="search-input">
        <input type="text" class="form-control" name id placeholder="Search links" />
        <span class="flaticon-search icons search-icon"></span>
      </div>
    </div>
    <div @click="toggleDropdown" class="dropdown-custom">
      <span class="flaticon-funnel icons dropdown-icon"></span>
      <span class="text">Filter</span>
      <span class="flaticon-caret-down icons"></span>
      <transition name="drop">
      <div v-if="isDropped" class="dropdown-contents">
        <div class="dropdown-inner">
          <nav class="nav flex-column">
            <button
              @click="addToFilterList($event)"
              class="btn nav-link"
              data-value="filter 1"
            >Filter 1</button>
            <button
              @click="addToFilterList($event)"
              class="btn nav-link"
              data-value="filter 2"
            >Filter 2</button>
            <button
              @click="addToFilterList($event)"
              class="btn nav-link"
              data-value="filter 3"
            >Filter 3</button>
          </nav>
        </div>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
      filters: [],
      isDropped: false,
    };
  },
  methods: {
    addToFilterList(event) {
      if (
        this.$store.state.filters.indexOf(
          event.target.getAttribute('data-value'),
        ) === -1
      ) {
        this.$store.commit(
          'updateFilter',
          event.target.getAttribute('data-value'),
        );
      }
    },
    toggleDropdown() {
      this.isDropped = !this.isDropped;
    },
  },
};
</script>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 2rem;
  padding: 0.3rem 1rem;
}

.search-input input {
  border: none;
  border-radius: 2rem;
}

.search-input input:focus {
  box-shadow: none;
}

.search-input .search-icon::before {
  color: #999999;
  margin-left: 1rem;
}

.dropdown-custom {
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  position: relative;
}

.dropdown-contents {
  position: absolute;
  top: 55px;
  left: -80px;
}

.dropdown-inner {
  position: relative;
  width: 150px;
  height: auto;
  box-shadow: 1px 1px 3px #999999;
}

.dropdown-inner::before {
    content: "";
    border: 12px solid;
    border-color: transparent transparent #999999 transparent;
    position: absolute;
    top: -24px;
    right: 0;
}

.dropdown-inner .nav {
  justify-content: center;
}

.dropdown-inner .nav-link {
  font-size: 0.8rem;
  color: #999999;
}

.dropdown-custom .text {
  margin: 0 0.5rem;
  font-size: 0.9rem;
  color: #999999;
}

.dropdown-custom .dropdown-icon::before {
  font-size: 0.7rem;
  color: #999999;
}

.flaticon-caret-down::before {
  font-size: 0.6rem;
  color: #999999;
}

.drop-enter-active, .drop-leave-active {
  transition: opacity .5s;
}
.drop-enter, .drop-leave-to /* .drop-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
