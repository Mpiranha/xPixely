<template>
  <nav
    class="navbar navbar-expand navbar-light bg-light flex-column"
    :class="isSleeved ? 'sleeved' : ''"
  >
    <div class="d-flex align-items-center logo-wrap">
      <router-link class="navbar-brand mr-1" to="/">
        <img src="@/assets/logo.png" alt="logo" class="logo" />
        <img src="@/assets/logo_.png" alt="logo" class="logo-sleeved" />
      </router-link>
      <button class="navbar-toggler d-block" type="button" @click="toggleSidebar">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div
      class="collapse navbar-collapse flex-column w-100 justify-content-between align-items-center"
      id="collapsibleNavId"
    >
      <ul class="navbar-nav flex-column w-100">
        <li class="nav-item" :class="active == 'dashboard' ? 'active' : ''">
          <router-link class="nav-link" to="/dashboard">
            <span class="flaticon-home icons nav-icon"></span>
            <span class="link-text">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active == 'links' ? 'active' : ''">
          <router-link class="nav-link" to="/links">
            <span class="flaticon-link icons nav-icon"></span>
            <span class="link-text">Links</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active == 'link-group' ? 'active' : ''">
          <router-link class="nav-link" to="/link-group">
            <span class="flaticon-dashboard icons nav-icon"></span>
            <span class="link-text">Link Group</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active == 'custom-domain' ? 'active' : ''">
          <router-link class="nav-link" to="/custom-domain">
            <span class="flaticon-world-wide-web-1 icons nav-icon"></span>
            <span class="link-text">Custom Domain</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active == 'link-overlay' ? 'active' : ''">
          <router-link class="nav-link" to="/link-overlay">
            <span class="flaticon-comment icons nav-icon"></span>
            <span class="link-text">Link Overlay</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active == 'link-pages' ? 'active' : ''">
          <router-link class="nav-link" to="/link-pages">
            <span class="flaticon-chain icons nav-icon"></span>
            <span class="link-text">Link Pages</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active == 'retargeting-pixels' ? 'active' : ''">
          <router-link class="nav-link" to="/pixel">
            <span class="flaticon-placeholder icons nav-icon"></span>
            <span class="link-text">Retargeting Pixels</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active == 'tutorial-videos' ? 'active' : ''">
          <router-link class="nav-link" to="">
            <span class="flaticon-video-camera icons nav-icon"></span>
            <span class="link-text pb-2">Tutorial Videos</span>
          </router-link>
        </li>
      </ul>

      <div class="add-workspace mt-4">
        <router-link class="btn btn-add-workspace" to="/workspace" role="button">
          <span class="flaticon-workplace icons workspace-icon"></span>
          Add Workspace
        </router-link>
      </div>

      <div class="d-flex flex-column mt-5 w-100 link-progress">
        <div class="progress-custom">
          <div class="progress"></div>
        </div>
        <div class="d-flex justify-content-between progress-desc">
          <div class="desc-text">3 of 20 links created</div>
          <span class="flaticon-info icons info-icon"></span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    active: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      isSleeved: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSleeved = !this.isSleeved;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:focus {
  outline: none;
}

.navbar {
  width: 230px;
  padding: 1rem 0.9rem;
  height: 100vh;
  overflow-y: auto;
}

.navbar-nav .nav-item {
  margin-top: 1.3rem;
  padding: 0 1rem;
  border-radius: 2rem;
}

.nav-item.active {
  background-color: var(--pink-accent);
}

.nav-link {
  display: flex;
  align-items: center;
}

.nav-link .link-text,
.nav-link .nav-icon::before {
  color: #000000;
  text-transform: capitalize;
  font-size: 0.87rem;
  font-weight: 600;
}

.nav-link .link-text {
}

.nav-link .nav-icon::before {
  font-size: 1rem;
}

.navbar-expand .navbar-toggler {
  border: none;
}

.logo-wrap {
  background-color: #eeeeee;
  padding: 0.1rem 0.7rem;
  width: 90%;
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

.btn-add-workspace {
  background-color: var(--pink-accent);
  font-size: 0.9rem;
  color: var(--purple-accent);
  padding: 0.359rem 0.8rem;
}

.btn-add-workspace .workspace-icon::before {
  font-size: 0.7rem;
  margin-right: 0.5rem;
  color: var(--purple-accent);
}
.progress-custom {
  min-width: 100%;
  height: 0.4rem;
  position: relative;
}

.progress-custom .progress {
  width: 20%;
  height: 100%;
  background-color: rgb(203, 113, 222);
}
.progress-custom::before {
  content: "";
  display: block;
  border-top: 4px dashed rgb(203, 113, 222);
  height: 100%;
  width: 100%;
  background-color: transparent;
  position: absolute;
  top: 50%;
  margin-top: -2px;
  left: 0;
  right: 0;
  bottom: 0;
}

.progress-desc {
  margin-top: 0.4rem;
  font-size: 0.9rem;
  align-items: center;
}

.logo-sleeved {
  width: 2.5rem;
  display: none;
}

.sleeved {
  width: 140px;
}

.sleeved .nav-icon::before {
  font-size: 1.2rem;
}

.sleeved .nav-link .link-text {
  display: none;
}

.sleeved .add-workspace, .sleeved .link-progress, .sleeved .logo {
  display: none !important;
}

.sleeved .logo-sleeved {
  display: inline;
}

.sleeved .navbar-nav {
  align-items: center;
}
</style>
