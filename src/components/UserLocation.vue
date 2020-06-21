<template>
  <div class="d-flex align-items-center">
    <ul class="nav links-wrap">
      <!-- <li class="nav-item active">
        <a class="nav-link" href="#">Workspace</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Manage team</a>
      </li>-->
      <li v-for="(item, index) in data" :key="index" class="nav-item">
        <button
          v-if="item.paneOpener"
          class="btn nav-link active"
          @click="setMutation(item.mutate)"
        >{{item.name}}</button>
        <button
          v-else-if="item.modalOpener"
          class="btn nav-link active"
          data-toggle="modal"
          :data-target="item.modalID"
        >{{item.name}}</button>
        <router-link
          v-else-if="item.route === active && item.route != null"
          class="nav-link active"
          :to="'/' + item.route"
        >{{item.name}}</router-link>
        <router-link v-else-if="item.routable === false" class="nav-link" to="#">{{item.name}}</router-link>

        <router-link v-else class="nav-link" :to="'/' + item.route">{{item.name}}</router-link>
      </li>
    </ul>

    <span class="flaticon-information icons information-icon"></span>
  </div>
</template>

<script>
export default {
  name: 'Workspace',
  props: {
    data: {
      type: Array,
      required: true,
      default: null,
    },
    active: {
      type: String,
      required: true,
      default: null,
    },
  },
  data() {
    return {};
  },

  methods: {
    setMutation(fun) {
      this.$store.commit(fun);
    }
  }
};
</script>

<style scoped>
:root {
  --button-active: #a664ca;
  --bg-color: #eaeafe;
}

.links-wrap {
  background-color: #eaeafe;
  border-radius: 2rem;
}

.information-icon::before {
  font-size: 1.3rem;
  margin-left: 1rem;
}

.links-wrap .nav-link {
  color: #a664ca;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 2rem;
}

.active {
  background-color: #a664ca;
  color: #ffffff !important;
}
</style>
