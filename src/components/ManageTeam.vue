<template>
  <div class="container-fluid px-0 device-height">
    <top-nav></top-nav>
    <div class="container-fluid x-mt x-px">
      <user-location active="manage-team" :data="locations"></user-location>
      <div class="row mt-4 no-gutters">
        <team-member></team-member>
        <div class="create-team">
          <div class="team-title">Add a Member</div>
          <div class="button-wrap" data-toggle="modal" data-target="#add-team">
            <span class="flaticon-plus icons add-team-icon"></span>
          </div>
          <div class="team-desc">maybe a client, partner, colleague</div>
        </div>
      </div>
    </div>
    <!-- The Modal -->
    <div class="modal" id="add-team">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <!-- <h1 class="modal-title">Add Team Member</h1> -->
            <span
              type="button"
              class="close flaticon-close icons close-add-team"
              data-dismiss="modal"
            ></span>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="container-fluid x-padding">
              <div class="header-title">Add Team Member</div>
              <form action method="post">
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label for="first-name">First Name</label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        class="form-control"
                        placeholder="First Name"
                        v-model="firstName"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for="last-name">Last Name</label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        class="form-control"
                        placeholder="Last Name"
                        v-model="lastName"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="user@domain.com"
                        v-model="email"
                      />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for>Team Member Role</label>
                      <div class="select-custom">
                        <select class="form-control" name="member-role" id="member-role">
                          <option value="administrator">Administrator</option>
                          <option value="collaborator">Collaborator</option>
                          <option value="approver">Approver</option>
                        </select>
                        <span class="flaticon-drop-down icons custom-icon"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label for>User Type</label>
                      <div class="select-custom">
                        <select class="form-control" name="member-role" id="user-type">
                          <option selected value="team">Team</option>
                          <option value="collaborator">Collaborator</option>
                          <option value="approver">Approver</option>
                        </select>
                        <span class="flaticon-drop-down icons custom-icon"></span>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <p class="inner-title mb-0">Select Workspace(s)</p>
                    <p class="inner-sub-title">Select the workspace to add your team member into.</p>
                  </div>
                  <div class="col-12">
                    <div class="workspaces-wrap">
                      <ul class="nav flex-column">
                        <li class="nav-item">
                          <span class="nav-link" href="#">Slect All</span>
                          <label class="checkbox-container workspace-checkbox">
                            <input
                              @change="checkAll($event)"
                              type="checkbox"
                              name="select-all"
                              id="select-all"
                            />
                            <span class="checkmark workspace-select-checkbox"></span>
                          </label>
                        </li>
                        <li class="nav-item">
                          <span class="nav-link" href="#">
                            <div class="d-flex align-items-center">
                              <div class="workspace-icon"></div>
                              <span>Fastly Delivery</span>
                            </div>
                          </span>
                          <label class="checkbox-container workspace-checkbox">
                            <input
                              type="checkbox"
                              name="fast-delivery"
                              id="fast-delivery"
                              :checked="isAllWorkspacesChecked"
                            />
                            <span class="checkmark workspace-select-checkbox"></span>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div class="d-flex justify-content-between my-3">
                      <button type="button" class="btn btn-add-team">Add</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Manageteam',
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
      isAllWorkspacesChecked: false,
    };
  },
  methods: {
    checkAll(event) {
      if (event.target.checked) {
        this.isAllWorkspacesChecked = true;
      } else {
        this.isAllWorkspacesChecked = false;
      }
    },
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

.add-team-icon::before {
  color: #b467cc;
  font-size: 1.5rem;
  font-weight: bolder;
}

.create-team {
  /* padding-top: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5rem;
}

.modal-content {
  border-radius: 15px;
}

.create-team .team-title {
  font-size: 1rem;
  font-weight: 800;
}

.create-team .team-desc {
  color: #ccc;
  font-size: 0.7rem;
}

.create-team .button-wrap {
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

.close-add-team::before {
  color: #ff0000;
}

.modal-content label,
.modal-content .inner-title {
  font-weight: 600;
  font-size: 0.9rem;
}

.modal-content .inner-sub-title {
  font-size: 0.8rem;
  color: #a39797;
}

.modal-body .header-title {
  font-weight: 700;
  font-size: 1.3rem;
  margin-bottom: 1.1rem;
}

.workspaces-wrap {
  background-color: #f5f9fc;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.workspaces-wrap .nav-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.workspace-checkbox .workspace-select-checkbox {
  height: 20px;
  width: 20px;
}

.workspaces-wrap .nav-item:not(:last-child) {
  border-bottom: 1px solid #ccc;
}

.workspaces-wrap .nav-item .nav-link {
  font-size: 0.8rem;
  font-weight: 600;
}

.workspaces-wrap .workspace-icon {
  display: inline-block;
  width: 1.7rem;
  height: 1.7rem;
  margin-right: 1rem;
}

.btn-add-team {
  background-color: #9e65cd;
  color: #ffffff;
  border-radius: 1.5rem;
  padding: 0.35rem 1.2rem;
}
</style>
