/* eslint-disable max-len */
<template>
  <div class="container-fluid px-0">
    <div class="d-flex">
      <div class="sidebar-wrap">
        <main-sidebar active="link-overlay"></main-sidebar>
      </div>
      <div class="flex-grow-1 bg-main container-fluid scroll-y ps-relative">
        <transition name="slide-fade">
          <div v-if="this.$store.state.paneOpen" class="new-page">
            <div class="page-inner">
              <span class="flaticon-close icons close-page" @click="togglePane"></span>
              <form action method="post">
                <div class="form-group">
                  <label for="page-title">Page Title</label>
                  <input type="text" name id="page-title" class="form-control" placeholder />
                </div>

                <div class="d-flex">
                  <div class="text-editor-wrap">
                    <div class="upload-wrap">
                      <label>Link Image</label>
                      <div>
                        <div class="upload-btn">
                          <div class="icon-wrap">
                            <span class="flaticon-outbox icons upload-icon"></span>
                          </div>
                          <span class="text">Upload</span>
                          <input
                            type="file"
                            class="form-control-file"
                            name="user-image-select"
                            id="user-image-select"
                            @change="read($event)"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="text-editor">
                      <v-md-editor v-model="linkPages.text" height="400px" class="editor"></v-md-editor>
                    </div>
                  </div>
                  <div class="live-preview">
                    <button type="button" class="btn btn-preview">Preview</button>

                    <div class="link-page-wrap">
                      <div class="link-page-inner">
                        <div class="image">
                          <img ref="image" src class="img-fluid" alt />
                        </div>
                        <div class="content">
                          <v-md-preview class="preview" :text="linkPages.text"></v-md-preview>
                        </div>
                      </div>
                      <ul class="nav justify-content-center align-items-center socials">
                        <li class="nav-item">
                          <span>Share if you love this</span>
                        </li>
                        <li class="nav-item">
                          <a class href="#">
                            <img src="@/assets/facebook.png" alt srcset />
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class href="#">
                            <img src="@/assets/instagram-sketched.png" alt srcset />
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class href="#">
                            <img src="@/assets/youtube.png" alt srcset />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </transition>
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
                <th scope="col">SLUG</th>
                <th scope="col">BODY</th>
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
                    <div class="desc">Video Pop Up</div>
                  </div>
                </td>
                <td>
                  Get Lifetime Access
                  To ThumbReel Right Now!
                </td>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      locations: [
        {
          name: 'Add Link Pages +',
          paneOpener: true,
          mutate: 'togglePane',
        },
      ],
      linkPages: {
        slug: '',
        body: '',
        update: new Date().toLocaleDateString(),
        text: '',
      },
    };
  },
  methods: {
    read(event) {
      if (event.target.files && event.target.files[0]) {
        const self = this;
        const reader = new FileReader();

        // eslint-disable-next-line func-names
        reader.onload = function (e) {
          self.$refs.image.setAttribute('src', e.target.result);
        };

        reader.readAsDataURL(event.target.files[0]); // convert to base64 string
      }
    },
    togglePane() {
      this.$store.commit('togglePane');
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

.tabs-wrap {
  width: fit-content;
  background-color: #d1d1d1;
  border-radius: 1.5rem;
}

.tabs-wrap .nav-item .nav-link {
  color: #000000;
  border-radius: 1.5rem;
  padding: 0.35rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
}

.tabs-wrap .nav-item .nav-link.active {
  background-color: #000000;
  color: #ffffff;
}

label {
  font-size: 0.9rem;
  color: #a09b9b;
}
/*

.form-control {
  border-radius: 1.5rem;
  border-color: #808080;
} */

.form-control {
  background-color: #ffffff;
  border-radius: 1.5rem;
  padding: 0.6rem 1.5rem;
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

.new-page {
  background-color: var(--bg-main);
  width: calc(100% - 262px);
  height: calc(100% - 84px);
  position: absolute;
  z-index: 9999999999999999999999;
  top: 84px;
  overflow-y: auto;
}

.close-page {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.close-page::before {
  color: var(--orange-accent);
  font-size: 1.5rem;
}

.page-inner {
  position: relative;
  padding: 1.5rem 1.1rem;
}

.upload-wrap {
  display: flex;
  align-items: center;
  margin-bottom: 1.3rem;
}

.upload-wrap label {
  font-size: 1rem;
  font-weight: 600;
  margin-right: 1rem;
}

.user-image-prev {
  height: 6rem;
  background-color: #e9e9e9;
  width: 7rem;
  border-radius: 0.5rem;
  margin-left: 1.5rem;
}

.btn-preview {
  background-color: #9e65cd;
  color: #ffffff;
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
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

.text-editor-wrap {
  flex-grow: 1;
  margin-right: 2rem;
}

/* .text-editor {
  background-color: #ffffff;
  border-radius: 1.5rem;
} */

.text-editor .editor {
  border-radius: 1.5rem;
}

.link-page-wrap {
  display: flex;
  flex-direction: column;
  min-width: 400px;
  max-width: 400px;
  min-height: 200px;
  background-color: #ffffff;
  border-radius: 2rem;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}

.link-page-inner {
  display: flex;
}

.link-page-wrap .image {
  width: 100px;
  height: 100px;
  background-color: #a9abae;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.link-page-wrap .content {
  word-break: break-all;
  width: 220px;
}

.preview {
  padding: 0;
}

.socials {
  margin-top: 1.5rem;
}

.socials a img {
  width: 26px;
  height: 26px;
}

.socials .nav-item {
  margin-right: 0.5rem;
}

.socials .nav-item span {
  font-size: 0.7rem;
  color: #a9abae;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
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
