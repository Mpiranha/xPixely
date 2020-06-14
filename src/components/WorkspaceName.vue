<template>
  <div class="workspace-wrap">
    <div @click="show" class="d-flex workspace-details" href="#">
      <div class="img-workspace">
        <img class="img-fluid" v-if="workspaceImage" :src="workspaceImage" alt="workspace image" />
        <span v-else class="img-text">{{workspaceInitials}}</span>
      </div>
      <div class="workspace-detail">
        <div class="text">WORKSPACE</div>
        <div class="workspace-name"> {{ name }} </div>
      </div>
    </div>
    <div v-show="isShowing" class="user-more-details">
      <div class="user-more-inner">
        <a href="#" class="link-wrap">
          <div class="d-flex top-section">
            <div class="img-workspace">
              <img class="img-fluid" v-if="userImage" :src="userImage" alt="workspace image" />
              <span class="img-text">AB</span>
            </div>

            <div class="d-flex flex-column profile-name">
              <span class="user-name">Ejem Odinakachi Austin</span>
              <span class="profile-setup">PROFILE SETUP</span>
            </div>
          </div>
        </a>
        <hr class="divider" />
        <ul class="nav flex-column">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="flaticon-null icons user-details-icon"></span>
              Bonuses
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="flaticon-null-2 icons user-details-icon"></span>
              Team Member
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="flaticon-credit-card icons user-details-icon"></span>
              Billing
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link switch-theme">
              <label class="switch mb-0">
                <input type="checkbox" checked />
                <span class="slider round"></span>
              </label>
              Light theme
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <span class="flaticon-null-1 icons user-details-icon"></span>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkspaceName',
  props: {
    workspaceImage: {
      type: String,
      default: null,
    },
    userImage: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
  },
  data() {
    return {
      isShowing: false,
    };
  },
  methods: {
    show() {
      this.isShowing = !this.isShowing;
    },
  },
  computed: {
    workspaceInitials() {
      return this.name.split(' ').map(n => n[0]).join('').toUpperCase();
    },
  },
};
</script>

<style scoped>

.workspace-wrap {
  position: relative;
}

.img-workspace {
  display: flex;
  width: 40px;
  height: 40px;
  background-color: black;
  color: #ffffff;
  border-radius: 50%;
  box-shadow: 1px 1px 1px #ffffff, 1px -1px 1px #ffffff;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.img-workspace img {
  border-radius: 50%;
}

.img-text {
  color: #a9abae;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1rem;
}

.workspace-details {
  background-color: #a9abae;
  border-radius: 2rem;
  padding: 0 2rem 0 0;
  cursor: pointer;
}
.workspace-detail {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 0 0 0 0.2rem;
  justify-content: center;
  z-index: 99999999;
}
.workspace-detail .text {
  text-transform: uppercase;
  font-size: 0.4rem;
  font-weight: 600;
}

.workspace-detail .workspace-name {
  padding-left: 0.5rem;
  font-size: 0.9rem;
}

.user-more-details {
  position: absolute;
  right: 0;
  top: 57px;
  z-index: 99999999;
}

.user-details-icon::before {
  font-size: 0.8rem;
}

.user-more-details a {
  color: #000000;
  text-decoration: none;
}

.user-more-inner .nav-link {
  padding: 0.2rem 1rem;
}
.user-more-inner .nav {
  padding-bottom: 1rem;
}
.profile-name {
  background-color: #e0e0e0;
  border-radius: 1.5rem;
  padding: 0.2rem 1rem;
  margin-left: 0.5rem;
}

.profile-name .user-name {
  font-size: 0.8rem;
  font-weight: 500;
}

.profile-name .profile-setup {
  font-size: 0.5rem;
}

.user-more-inner .top-section {
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
}

.user-more-inner {
  position: relative;
  width: 235px;
  background-color: #ffffff;
  border-radius: 0.6rem;
  box-shadow: -8px 8px 8px #e5e5e7, -2px -5px 8px #e5e5e7;
  z-index: 9999999;
}

.user-more-inner::before {
  position: absolute;
  content: "";
  display: block;
  top: -18px;
  border: 9px solid;
  border-color: transparent transparent #ffffff transparent;
  right: 35%;
}

.divider {
  border-top: 1px solid rgb(0, 0, 0);
}

.switch-theme {
  display: flex;
  align-items: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 15px;
  height: 7px;

  margin-right: 0.44rem;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #bdb1b1;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 10px;
  width: 10px;
  right: 0px;
  bottom: -1px;
  background-color: #999999;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4d4d4d;
}

input:focus + .slider {
  box-shadow: 0 0 1px #4d4d4d;
}

input:checked + .slider:before {
  -webkit-transform: translateX(-7px);
  -ms-transform: translateX(-7px);
  transform: translateX(-7px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
