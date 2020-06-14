<template>
  <div class="col-4">
    <div class="workspace-wrap">
      <div class="workspace-logo-wrap">
        <img src class="img-fluid rounded-circle" alt />
      </div>
      <div class="w-100">
        <div class="d-flex justify-content-between">
          <div class="workspace-tag">Default</div>
          <ul class="nav">
            <li class="nav-item">
              <span class="flaticon-settings icons workspace-settings"></span>
            </li>
            <li class="nav-item">
              <span class="flaticon-delete-1 icons workspace-delete"></span>
            </li>
          </ul>
        </div>
      </div>

      <div class="workspace-title">Artculture BMC</div>
      <div class="icon-wrap">
        <span class="flaticon-null-3 icons workspace-icon"></span>
      </div>
      <div class="workspace-desc">Created: Apr 15, 2020</div>
      <span class="flaticon-check-mark icons verified"></span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    userImage: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      value: null,
    };
  },
  mounted() {
    // console.log('Workspace item component mounted');
  },
  methods: {
    // changeState: function(payLoad) {
    //   return this.$store.commit("changeNavActive", payLoad);
    // }
  },
  computed: {},
};
</script>

<style scoped>
.workspace-wrap {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 0px 6px #80808047;
  padding: 1.7rem 0.9rem;
  border-radius: 15px;
  min-height: 209px;
}
.workspace-wrap .workspace-logo-wrap {
  position: absolute;
  top: -27px;
  left: 50%;
  width: 50px;
  height: 50px;
  background-color: black;
  margin-left: -35px;
  border-radius: 50%;
}
.workspace-title {
  font-size: 1.3rem;
  color: #050404;
  font-weight: 700;
}

.workspace-tag {
  padding: 0rem 1rem;
  border: 3px solid #7272cb;
  color: #7272cb;
  background-color: #dce2fc;
  font-weight: 900;
  font-size: 0.8rem;
  height: 25px;
  border-radius: 5px;
}

.workspace-logo {
  position: absolute;
}

.workspace-settings::before,
.workspace-delete::before {
  font-size: 0.9rem;
}

.workspace-settings::before {
  margin-right: 0.7rem;
  color: #90f050;
}

.workspace-delete::before {
  color: #e65d5d;
}

.workspace-desc {
  font-size: 0.8rem;
  color: #807676;
}

.verified {
  position: absolute;
  right: 8px;
  bottom: 8px;
}

.verified::before {
  color: #18ce18;
}

.icon-wrap {
  width: 30px;
  display: flex;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #f0964d;
  box-shadow: 1px 1px 8px #80808045;
  margin: 0.9rem 0;
}

.workspace-icon::before {
  font-size: 0.9rem;
  color: #fdedbf;
}
</style>

