/* eslint-disable max-len */
<template>
  <div class="container-fluid px-0">
    <div class="d-flex">
      <div class="sidebar-wrap">
        <main-sidebar active="link-group"></main-sidebar>
      </div>
      <div class="flex-grow-1 bg-main container-fluid scroll-y">
        <nav-header></nav-header>
        <div class="search-wrap">
          <user-location active="link" :data="locations"></user-location>
          <search-filter></search-filter>
        </div>
        <filter-render :filters="this.$store.state.filters"></filter-render>
        <div class="container-fluid mt-5 px-0">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <div class="form-check">
                    <input type="checkbox" class name id value="checkAll" />
                  </div>
                </th>
                <th scope="col">NAME</th>
                <th scope="col">LINKS</th>
                <th scope="col">LAST UPDATE</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <label class="custom-container">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </th>
                <td>
                  <div class="summary-content">
                    <div class="desc">Video Pop Up</div>
                  </div>
                </td>
                <td>2</td>
                <td>17/05/2020</td>
                <td>
                  <nav class="nav manage-campaign">
                    <span class="nav-link">
                      <div class="icon-desc">
                        <div class="icon-desc-inner">Link Statistics</div>
                      </div>
                      <span class="flaticon-bar-chart icons manage-icon"></span>
                    </span>
                    <span class="nav-link">
                      <div class="icon-desc">
                        <div class="icon-desc-inner">Copy Link</div>
                      </div>
                      <span class="flaticon-copy icons manage-icon"></span>
                    </span>
                    <span class="nav-link">
                      <div class="icon-desc">
                        <div class="icon-desc-inner">Edit</div>
                      </div>
                      <span class="flaticon-edit icons manage-icon"></span>
                    </span>
                    <span class="nav-link">
                      <div class="icon-desc">
                        <div class="icon-desc-inner">Delete</div>
                      </div>
                      <span class="flaticon-delete icons manage-icon"></span>
                    </span>
                  </nav>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav aria-label="Page navigation example mt-5">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">.</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">.</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">.</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="modal" id="add-link">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h1 class="modal-title">Creating Link Group</h1>
              <span
                type="button"
                class="close flaticon-close icons close-add-link"
                data-dismiss="modal"
              ></span>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <form action method="post">
                <div class="form-group">
                  <input
                    type="text"
                    name
                    id="name"
                    class="form-control"
                    placeholder="Name"
                    v-model="name"
                  />
                </div>

                <div class="d-flex mt-4">
                  <div class="link-section">
                    <div class="icon-wrap">
                      <span class="flaticon-link-1 icons link-icon"></span>
                    </div>
                    <div class="link">https://go.xpixely.com/...</div>
                  </div>
                  <div class="link-destination">
                    <input
                      type="text"
                      name="workspace-name"
                      id="workspace-name"
                      class="form-control"
                      placeholder
                      v-model="destination"
                    />
                    <button type="button" class="btn btn-save">Save</button>
                  </div>
                </div>

                <div class="form-group mt-4">
                  <label for="message">Descriptions</label>
                  <textarea class="form-control" name id="message" rows="4" v-model="message"></textarea>
                </div>

                <div class="d-flex justify-content-between align-items-center mt-5">
                  <div class="d-flex flex-column toggle-section">
                    <div class="toggle-list chart">
                      <!-- Rounded switch -->
                      <label class="switch to-list chart">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                      <label class="ml-2">Public</label>
                    </div>
                    <div class="desc">Whether this link group will be viewed by other via url above.</div>
                  </div>

                  <div class="buttons-wrap">
                    <button type="button" class="btn btn-cancel">Cancel</button>
                    <button type="button" class="btn btn-confirm">Confirm</button>
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
  data() {
    return {
      locations: [
        {
          name: 'Add Link Group +',
          modalOpener: true,
          modalID: '#add-link',
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.btn-change-plan {
  background-color: #e2b8f0;
  color: #c47cef;
  font-weight: 800;
  border-radius: 1rem;
  padding: 0.2rem 1.2rem;
  text-transform: capitalize;
}

.search-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.3rem;
}

.summary-content {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: center;
}
th[scope="col"] {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #808080;
  border: none;
}

th[scope="col"]:first-child {
  text-align: left;
}

.table th,
.table td {
  vertical-align: middle !important;
  text-align: center;
  border-top: none;
  border-bottom: none;
}

.hover-icon {
  position: relative;
  display: none;
  width: 17px;
  height: 12px;
  margin-right: 0.5rem;
  background-color: var(--orange-accent);
  border-radius: 0.3rem;
}

.hover-icon::before {
  position: absolute;
  top: 3px;
  right: 3px;
  height: 3px;
  width: 4px;
  content: "";
  background-color: #ffffff;
}

tbody tr:hover {
  background-color: #ece3f6;
  border-left: 2px solid #7f5ab9;
}

tbody tr:hover .checkmark {
  background-color: #b379d7;
}

tbody tr:hover .custom-container .checkmark:after {
  background-color: #7f5ab9;
}

tbody tr:hover .hover-icon {
  display: inline-block;
}

tbody td {
  font-size: 0.9rem;
}

.manage-icon::before {
  color: #000000;
  font-size: 1rem;
}

.summary-link a {
  color: #000000;
  text-decoration: none;
}

tbody tr:hover .manage-icon::before {
  color: #7f5ab9;
}

.nav-link {
  cursor: pointer;
  position: relative;
}

.nav-link .icon-desc {
  position: absolute;
  top: -11px;
  right: 50%;
  margin-right: -53px;
  opacity: 0;
  transition: opacity 0.5s;
}

.nav-link:hover .icon-desc {
  opacity: 1;
}

.nav-link .icon-desc-inner {
  position: relative;
  background-color: #ffffff;
  font-size: 0.7rem;
  min-width: 100px;
}

.nav-link .icon-desc-inner::after {
  position: absolute;
  content: "";
  border: 8px solid;
  border-color: #ffffff transparent transparent transparent;
  bottom: -15px;
  left: 50%;
  margin-left: -13px;
}

.page-item {
  margin-right: 1rem;
}

.page-item .page-link {
  background-color: #dadce0;
  color: #000000;
  border-radius: 50%;
  padding: 0.3rem 0.85rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.close-add-link::before {
  font-size: 0.8rem;
  color: var(--orange-accent);
}

.modal-title {
  font-size: 0.9rem;
  font-weight: 700;
}

.modal-header {
  border: none;
}

.modal-dialog-scrollable .modal-header {
  padding-bottom: 0;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  border-radius: 1.5rem;
}

.link-icon::before {
  color: #9e65cd;
  font-size: 0.9rem;
}

.info {
  display: flex;
  flex-direction: column;
  margin-left: 0.8rem;
}

.info .title {
  font-size: 0.8rem;
  font-weight: 700;
}
.info .desc {
  font-size: 0.7rem;
}

.icon-content {
  display: flex;
  align-items: center;
}

.toggle-list {
  display: flex;
  align-items: center;
}

.switch.to-list {
  width: 40px;
  height: 20px;
}

.to-list .slider::before {
  height: 25px;
  width: 25px;
  left: -1px;
  bottom: -2px;
  background-color: #000000;
}

input:checked + .slider:before {
  transform: translateX(18px);
  background-color: #2196f3 !important;
}

input:checked + .slider {
  background-color: #a9abae;
}

.toggle-list label {
  font-size: 0.9rem;
  font-weight: 700;
}

.button-wrap {
  display: flex;
  align-items: center;
}

.buttons-wrap .btn-confirm,
.buttons-wrap .btn-cancel {
  padding: 0.2rem 1rem;
}

.manage-campaign {
  justify-content: flex-end;
}

.buttons-wrap .btn-confirm {
  background-color: #f5e6fa;
  color: #9e65cd;
  border-radius: 1.5rem;
  margin-left: 1rem;
}

.buttons-wrap .btn-cancel {
  font-weight: 700;
}

.icon-advanced::before {
  font-size: 1.4rem;
}

.link-section .link {
  font-weight: 700;
}

label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #000000;
}

.toggle-section .desc {
  font-size: 0.7rem;
  font-weight: 600;
}

.form-control {
  border-radius: 1.5rem;
  border-color: #808080;
}

.form-control:focus {
  box-shadow: none;
}

.utm-wrap {
  background-color: #000000;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 0rem 0.2rem;
}

.link-section {
  display: flex;
  align-items: center;
}

.link-section .icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5e6fa;
  margin-right: 1rem;
}

.link-destination {
  display: flex;
  align-items: center;
  border: 1px solid #808080;
  flex-grow: 1;
  margin-left: 0.5rem;
  border-radius: 1.5rem;
}

.link-destination .btn-save {
  background-color: #f5e6fa;
  color: #9e65cd;
  padding: 0.35rem 1.9rem;
}

.btn:focus {
  box-shadow: none;
}
.link-destination input,
.link-destination button {
  border-radius: 1.5rem;
}

.link-destination input {
  border: none;
}

.modal {
  z-index: 9999999999999;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 660px;
    margin: 1.75rem auto;
  }
}
/*  bg #b379d7
#7f5ab9
row bg #ece3f6
*/
</style>
