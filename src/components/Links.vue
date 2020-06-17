/* eslint-disable max-len */
<template>
  <div class="container-fluid px-0">
    <div class="d-flex">
      <div class="sidebar-wrap">
        <main-sidebar active="dashboard"></main-sidebar>
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
                <th scope="col">SUMMARY</th>
                <th scope="col">CLICKS</th>
                <th scope="col">TYPE</th>
                <th scope="col">PASSWORD</th>
                <th scope="col">EXPIRES AT</th>
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
                    <div class="desc">
                      <div class="hover-icon"></div>Video Pop Up
                    </div>
                    <div class="summary-link">
                      <a href="https://xply.link/2sZ30">https://xply.link/2sZ30</a>
                    </div>
                  </div>
                </td>
                <td>2</td>
                <td>Frame</td>
                <td>no</td>
                <td>-</td>
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
              <h1 class="modal-title">Creating Link</h1>
              <span
                type="button"
                class="close flaticon-close icons close-add-link"
                data-dismiss="modal"
              ></span>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <form action method="post">
                <div class="form-link">
                  <input
                    type="text"
                    name="workspace-name"
                    id="workspace-name"
                    class="form-control"
                    placeholder="Enter long url."
                  />
                  <button type="button" class="btn btn-direct">
                    Direct
                    <span class="flaticon-caret-down icons dropdown-icon"></span>
                  </button>
                </div>

                <div
                  class="form-item"
                  type="button"
                  data-toggle="collapse"
                  data-target="#advance-option"
                  aria-expanded="false"
                  aria-controls="advance-option"
                >
                  <div class="icon-content">
                    <div class="icon-wrap">
                      <span class="flaticon-settings-1 icons settings-icon"></span>
                    </div>

                    <div class="info">
                      <div class="title">Advance Option</div>
                      <div class="desc">Add a custom link ID</div>
                    </div>
                  </div>
                  <div class="carret-down">
                    <span class="flaticon-caret-down icons carret-dropdown"></span>
                  </div>
                </div>
                <div class="collapse" id="advance-option">
                  <div class="form-advanced">
                    <div class="icon-content">
                      <div class="icon-wrap">
                        <span class="flaticon-world-wide-web icons icon-advanced"></span>
                      </div>

                      <div class="info">
                        <div class="title">Domain</div>
                        <div
                          class="desc"
                        >Select on which short link should the domain be accessible.</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-advanced">
                    <div class="icon-content">
                      <div class="icon-wrap">
                        <span class="flaticon-tag icons icon-advanced"></span>
                      </div>

                      <div class="info">
                        <div class="title">Tags and Description</div>
                        <div class="desc">Add tags and description to easily find your links.</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-advanced">
                    <div class="icon-content">
                      <div class="icon-wrap">
                        <span class="flaticon-coding icons icon-advanced"></span>
                      </div>

                      <div class="info">
                        <div class="title">Tracking Pixel</div>
                        <div class="desc">Select tracking pixels that should be used for this link.</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-advanced">
                    <div class="icon-content">
                      <div class="utm-wrap">UTM</div>

                      <div class="info">
                        <div class="title">UTM Tags</div>
                        <div
                          class="desc"
                        >Select on which domain should this short link be accessible.</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-advanced">
                    <div class="icon-content">
                      <div class="icon-wrap">
                        <span class="flaticon-pin icons icon-advanced"></span>
                      </div>

                      <div class="info">
                        <div class="title">Location Targeting</div>
                        <div class="desc">Redirect users to different urls based on their location.</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-advanced">
                    <div class="icon-content">
                      <div class="icon-wrap">
                        <span class="flaticon-gps icons icon-advanced"></span>
                      </div>

                      <div class="info">
                        <div class="title">Device Targeting</div>
                        <div class="desc">Redirect users to different urls based on their device.</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-5">
                  <div class="toggle-list chart">
                    <!-- Rounded switch -->
                    <label class="switch to-list chart">
                      <input type="checkbox" />
                      <span class="slider round"></span>
                    </label>
                    <label class="ml-2">Multiple</label>
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
          name: 'New Link +',
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

.close-add-link {
  color: var(--orange-accent);
}

.modal-title {
  font-size: 0.9rem;
  font-weight: 700;
}

.modal-dialog-scrollable .modal-header {
  padding-bottom: 0;
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
  border-radius: 1.5rem;
}

.form-link {
  display: flex;
  background-color: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 1.5rem;
  align-items: center;
  margin-bottom: 1rem;
}

.btn-direct {
  min-width: 120px;
  background-color: #4d4d4d;
  color: #ffffff;
  font-size: 1rem;
  border-radius: 1.5rem;
  padding: 0.5rem 0.7rem;
}

.dropdown-icon::before {
  font-size: 0.5rem;
  margin-left: 1rem;
}

.form-link input {
  border: none;
  border-radius: 1.5rem;
}

.form-link input:focus {
  box-shadow: none;
}

.form-item,
.form-advanced {
  display: flex;
  padding: 0.3rem 0.6rem;
  border-radius: 1.5rem;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;
}

.form-item {
  background-color: #f5e6fa;
}

.form-advanced {
  background-color: #f5f5f5;
}

.form-item .icon-wrap {
  width: 30px;
  height: 30px;
  background-color: #ebcff5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.settings-icon::before {
  color: #9e65cd;
  font-size: 0.9rem;
}

.carret-down {
  background-color: #ebcff5;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
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
.carret-down .carret-dropdown::before {
  font-size: 0.7rem;
  color: #9e65cd;
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

.utm-wrap {
  background-color: #000000;
  color: #ffffff;
  letter-spacing: 2px;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 0rem 0.2rem;
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
