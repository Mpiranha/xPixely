/* eslint-disable max-len */
<template>
  <div class="container-fluid px-0">
    <div class="d-flex">
      <div class="sidebar-wrap">
        <main-sidebar active="link-overlay"></main-sidebar>
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
                <th scope="col">TYPE</th>
                <th scope="col">PIXEL ID</th>
                <th scope="col">LAST UPDATED</th>
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
                    <div class="desc">Affiliate Marketing Promos</div>
                  </div>
                </td>
                <td>Facebook</td>
                <td>46637373882829292900</td>
                <td>17/05/2020</td>
                <td>
                  <nav class="nav manage-campaign">
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
              <h1 class="modal-title">Create New Pixel</h1>
              <span
                type="button"
                class="close flaticon-close icons close-add-link"
                data-dismiss="modal"
              ></span>
            </div>

            <!-- Modal body -->
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="message">Name</label>
                  <textarea
                    class="form-control"
                    name
                    id="name"
                    rows="3"
                    v-model="pixel.name"
                  ></textarea>
                </div>

                <div class="form-group">
                  <label for="position">Type</label>
                  <select class="form-control" name id="position" @change="getValue($event)">
                    <option value="facebook">Facebook</option>
                    <option value="google">Google</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="action">Pixel ID</label>
                  <input
                    type="text"
                    name
                    id="pixel-id"
                    class="form-control"
                    placeholder
                    v-model="pixel.id"
                  />
                </div>

                <div class="buttons-wrap">
                  <button type="button" class="btn btn-cancel">Cancel</button>
                  <button type="button" class="btn btn-confirm">Confirm</button>
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
          name: 'Add Pixel +',
          modalOpener: true,
          modalID: '#add-link',
        },
      ],
      pixel: {
        name: '',
        type: '',
        id: '',
      },
    };
  },
  methods: {
    getValue(event) {
      // console.log(event.target.value);
      this.pixel.type = event.target.value;
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

.form-link {
  display: flex;
  background-color: #ffffff;
  border: 2px solid #cccccc;
  border-radius: 1.5rem;
  align-items: center;
  margin-bottom: 1rem;
}

.color-select {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0.4rem 0.5rem;
}

.color-select:focus {
  box-shadow: none;
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


 label {
  font-size: 0.9rem;
  color: #000000;
}

 .form-control {
  border-radius: 1.5rem;
  border-color: #808080;
}

 .form-control:focus {
  box-shadow: none;
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
