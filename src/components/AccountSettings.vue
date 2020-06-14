<template>
  <div class="container-fluid px-0">
    <div class="d-flex">
      <div class="sidebar-wrap">
        <main-sidebar active="dashboard"></main-sidebar>
      </div>
      <div class="flex-grow-1 bg-main container-fluid scroll-y">
        <nav-header></nav-header>
        <user-location class="mt-3" active="account-settings" :data="locations"></user-location>
        <div class="row mt-5">
          <div class="col-6">
            <h4 class="form-desc">Update Name or Profile Image</h4>
            <form class="mt-4" action method="post">
              <div class="form-group">
                <label for>First Name</label>
                <input
                  v-model="userDetails.firstname"
                  type="text"
                  name
                  id="first-name"
                  class="form-control account-form"
                  placeholder
                />
              </div>
              <div class="form-group">
                <label for>Last Name</label>
                <input
                  v-model="userDetails.lastname"
                  type="text"
                  name
                  id="last-name"
                  class="form-control account-form"
                  placeholder
                />
              </div>
              <div class="form-group">
                <div class="upload-wrap">
                  <div>
                    <div class="upload-btn">
                      <div class="icon-wrap">
                        <span class="flaticon-outbox icons upload-icon"></span>
                      </div>
                      <span class="text">Upload Picture</span>
                      <input
                        type="file"
                        class="form-control-file"
                        name="user-image-select"
                        id="user-image-select"
                      />
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-cancel">
                      <span class="flaticon-close icons cancel-icon"></span>
                    </button>
                  </div>
                  <div class="user-image-prev"></div>
                </div>
                <div class="d-flex justify-content-end mt-4">
                  <button class="btn btn-update">Update</button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-6">
            <h4 class="form-desc">Update Password</h4>
            <form class="mt-4" action method="post">
              <div class="form-group">
                <label for>Current Password</label>
                <input
                  v-model="passwordAndApi.currentPassword"
                  type="password"
                  name
                  id="current-password"
                  class="form-control account-form"
                  placeholder
                />
              </div>
              <div class="form-group">
                <label for>New Password</label>
                <input
                  v-model="passwordAndApi.newPassword"
                  type="password"
                  name
                  id="new-password"
                  class="form-control account-form"
                  placeholder
                />
              </div>
              <div class="form-group">
                <label for>Confirm Password</label>
                <input
                  v-model="passwordAndApi.confirmPassword"
                  type="password"
                  name
                  id="confirm-password"
                  class="form-control account-form"
                  placeholder
                />
              </div>
              <div class="form-group">
                <label for>Api Token</label>
                <input
                  v-model="passwordAndApi.apiToken"
                  type="text"
                  name
                  id="api-token"
                  class="form-control account-form"
                  placeholder
                />
              </div>
              <div class="d-flex justify-content-end mt-4">
                  <button class="btn btn-update">Update</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          name: 'Account Settings',
          route: 'account-settings',
        },
        {
          name: 'Custom Domain',
          route: 'custom-domain',
        },
        {
          name: 'Integerations',
          routable: false,
        },
      ],
      userDetails: {
        firstname: '',
        lastname: '',
        imageUrl: '',
      },
      passwordAndApi: {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        apiToken: '',
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.form-desc {
  font-size: 0.9rem;
  text-transform: capitalize;
}

.upload-wrap {
  display: flex;
  align-items: center;
}

.user-image-prev {
  height: 6rem;
  background-color: #e9e9e9;
  width: 7rem;
  border-radius: 0.5rem;
  margin-left: 1.5rem;
}

.upload-btn {
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  background-color: #f5e6fa;
  padding: 0.3rem 1rem 0.3rem 0.4rem;
  border-radius: 2rem;
}

.upload-btn input {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
}

.upload-btn .icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e2b8f0;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.8rem;
}

.upload-btn .icon-wrap .upload-icon::before {
  font-size: 1rem;
  color: #be77ed;
}
.upload-btn .text {
  color: #be77ed;
}

.btn-cancel {
  width: 2rem;
  height: 2rem;
  background-color: #fccccb;
  border-radius: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
}

.btn-cancel .cancel-icon::before {
  font-size: 0.5rem;
  font-weight: 900;
  color: var(--orange-accent);
}

.upload-helper-text {
  margin-top: 0.4rem;
  display: inline-block;
  font-size: 0.6rem;
  width: 113px;
}

.btn-update {
  background-color: #e2b8f0;
  color: #c47cef;
  font-weight: 800;
  border-radius: 1rem;
  padding: 0.2rem 1.2rem;
}

.form-group {
  margin-bottom: 1.3rem;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
}

.account-form {
  background-color: transparent;
  border-radius: 2rem;
  padding: 1.5rem 1rem;
  margin-top: -9px;
}
</style>
