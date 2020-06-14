<template>
  <div class="container-fluid px-0 device-height">
    <top-nav></top-nav>
    <div class="container-fluid x-mt x-px">
      <user-location active="workspace" :data="locations"></user-location>

      <div class="row no-gutters mt-5">   
          <div class="create-workspace">
            <div class="workspace-title">Create a workspace</div>
            <div class="button-wrap" data-toggle="modal" data-target="#add-workspace">
              <span class="flaticon-plus icons add-workspace-icon"></span>
            </div>
            <div class="workspace-desc">e.g: NIKE, PEPSI, DISNEY</div>
          </div>
        <workspace-item></workspace-item>
        <div class="modal" id="add-workspace">
          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <!-- <h1 class="modal-title">Modal Heading</h1> -->
                <span
                  type="button"
                  class="close flaticon-close icons close-add-workspace"
                  data-dismiss="modal"
                ></span>
              </div>

              <!-- Modal body -->
              <div class="modal-body">
                <form action method="post">
                  <div class="form-group">
                    <label for="workspace-name">Workspace Name</label>
                    <input
                      type="text"
                      name="workspace-name"
                      id="workspace-name"
                      class="form-control"
                      placeholder="Enter your company, brand or client name."
                    />
                  </div>
                  <div class="form-group">
                    <label for="workspace-slug">Workspace Slug</label>
                    <input
                      type="text"
                      name="workspace-slug"
                      id="workspace-slug"
                      class="form-control"
                      placeholder="e.g. myband"
                    />
                  </div>
                  <div class="form-group">
                    <label for="workspace-timezone">Time Zone</label>
                    <select class="form-control" name="workspace-timezone" id="workspace-timezone">
                      <option value="none" selected>None</option>
                      <option value="africa/lagos[gmt +01:00]">Africa/Lagos[GMT +01:00]</option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="workspace-logo-select">Workspace Logo</label>
                    <div class="upload-wrap">
                      <div class="workspace-logo-prev"></div>
                      <div>
                        <div class="upload-btn">
                          <div class="icon-wrap">
                            <span class="flaticon-outbox icons upload-icon"></span>
                          </div>
                          <span class="text">Upload Picture</span>
                          <input
                            type="file"
                            class="form-control-file"
                            name="workspace-logo-select"
                            id="workspace-logo-select"
                          />
                        </div>
                      </div>
                      <div>
                        <button class="btn btn-cancel">
                          <span class="flaticon-close icons cancel-icon"></span>
                        </button>
                        </div>
                    </div>
                    <small class="text-muted upload-helper-text">
                      Recommeded size: less
                      than 2MB (130px x 130px)
                    </small>
                  </div>
                  <div class="d-flex justify-content-center">
                    <button type="button" class="btn btn-save-workspace">
                      SAVE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Workspace',
  data() {
    return {
      locations: [
        {
          name: 'Workspace',
          route: 'workspace',
        },
        {
          name: 'Manage Team',
          route: 'manage-team',
        },
      ],
    };
  },
};
</script>

<style scoped>
.x-mt {
  margin-top: 5rem;
}

.x-px {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.add-workspace-icon::before {
  color: #b467cc;
  font-size: 1.5rem;
  font-weight: bolder;
}

.create-workspace {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5rem;
}

.modal-content {
    border-radius: 15px;
}

.create-workspace .workspace-title {
  font-size: 1rem;
  font-weight: 800;
}

.create-workspace .workspace-desc {
  color: #ccc;
  font-size: 0.7rem;
}

.create-workspace .button-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5e6fa;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin: 1rem 0;
  cursor: pointer;
}

.upload-wrap {
  display: flex;
  align-items: center;
}

.workspace-logo-prev {
  min-height: 5.5rem;
  background-color: #f2f2f2;
  width: 7rem;
  border-radius: 0.5rem;
  margin-right: 1.2rem;
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

.btn-save-workspace {
  background-color: #9e65cd;
  color: #ffffff;
  border-radius: 1.5rem;
  padding: 0.35rem 1.2rem;
}

.close-add-workspace::before {
  color: #ff0000;
}

.modal-content label {
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
