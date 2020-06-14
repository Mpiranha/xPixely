<template>
  <nav class="navbar navbar-light justify-content-between fixed-top bg-gray">
    <div class="d-flex align-items-center logo-wrap">
      <router-link class="navbar-brand mr-1" to="/">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
      </router-link>
      <button class="navbar-toggler d-block" type="button">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
     <workspace-name name="Artculture BMC"></workspace-name>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.navbar {
    overflow: visible;
}
.bg-gray {
  background-color: var(--top-nav-bg);
}

.logo-wrap {
  background-color: #eeeeee;
  padding: 0.1rem 0.7rem;
  justify-content: center;
}

.logo {
  width: 7rem;
}

.nav-icon::before {
  margin-right: 0.7rem;
}

.navbar-toggler .navbar-toggler-icon {
  font-size: 0.9rem;
}

.navbar-light .navbar-toggler {
    border: none;
}

.navbar-light .navbar-toggler:focus {
    box-shadow: none;
}
</style>
