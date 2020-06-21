/* eslint-disable max-len */
<template>
  <div class="container-fluid px-0">
    <div class="d-flex">
      <div class="sidebar-wrap">
        <main-sidebar active="custom-domain"></main-sidebar>
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
                <th scope="col">HOST</th>
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
                    <div class="desc">NameCheap</div>
                  </div>
                </td>
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

        <div class="modal" id="add-link">
          <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
            <div class="modal-content">
              <!-- Modal Header -->
              <div class="modal-header">
                <h1 class="modal-title">Connect Domain</h1>
                <span
                  type="button"
                  class="close flaticon-close icons close-add-link"
                  data-dismiss="modal"
                ></span>
              </div>

              <!-- Modal body -->
              <div class="modal-body">
                <div class="form-group">
                  <label for="name">Host</label>
                  <input type="text" name id="name" class="form-control" placeholder v-model="host" />
                </div>

                <div class="host-desc">
                  Enter the exact domain name you want your link to be accessible with.
                  It can be subdomain (example.yourdomain.com)
                  or root domain (yourdomain.com).
                </div>

                <div class="buttons-wrap">
                  <button type="button" class="btn btn-cancel">Cancel</button>
                  <button type="button" class="btn btn-confirm">Confirm</button>
                </div>
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
  data() {
    return {
      locations: [
        {
          name: 'Add Custom Domain +',
          modalOpener: true,
          modalID: '#add-link',
        },
      ],
      host: '',
    };
  },
  methods: {
    getValue(event) {
      // console.log(event.target.value);
      this.linkOverlay.position = event.target.value;
    },
  },
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

.host-desc {
  font-size: 1rem;
  margin: 1.5rem 0;
  margin-bottom: 3.5rem;
}

label {
  font-size: 0.9rem;
  color: #a09b9b;
}

.form-control {
  border-radius: 1.5rem;
  border-color: #808080;
}

.form-control:focus {
  box-shadow: none;
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

.manage-campaign {
  justify-content: flex-end;
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
  color: var(--orange-accent);
  font-size: 0.8rem;
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

.buttons-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.modal {
  z-index: 9999999999999;
}

.modal-body {
  padding: 1rem 1.4rem;
}

/* @media (min-width: 576px) {
  .modal-dialog {
    max-width: 660px;
    margin: 1.75rem auto;
  }
} */
/*  bg #b379d7
#7f5ab9
row bg #ece3f6
*/
</style>
