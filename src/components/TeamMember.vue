<template>
  <div class="px-4">
    <div class="d-flex team-main-wrap">
      <div class="team-detail-wrap">
        <div class="team-detail-top">
          <div class="text">1 TEAM MEMBER(S) IN 1 WORKSPACE(S)</div>
        </div>
        <div class="team-detail-bottom">
          <div class="workspace-logo">
            <img src class="img-fluid" alt />
          </div>
          <div class="workspace-name">Fastly Delivery</div>
        </div>
      </div>
      <div class="team-detail-wrap team-wrap">
        <div class="team-detail-top">
          <span class="flaticon-check-mark icons verified"></span>
          <div class="d-flex align-items-center">
            <div class="icon-wrap">
              <span class="flaticon-null-3 icons workspace-icon"></span>
            </div>
            <div class="d-flex flex-column">
              <div class="user-name">fastlydelivery</div>
              <div class="user-email">fastlydelivery@gmail.com</div>
            </div>
          </div>
        </div>
        <div class="team-detail-bottom">
          <div class="select-custom select-team-role">
            <select class="form-control" name="member-role" id="member-role">
              <option value="administrator">Super Admin</option>
              <option value="collaborator">Collaborator</option>
              <option value="approver">Approver</option>
            </select>
            <span class="flaticon-drop-down icons custom-icon"></span>
          </div>
        </div>
      </div>
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
      isShowing: false,
      logoUrl: '',
    };
  },
  mounted() {
    // console.log('Share component mounted');
  },
  methods: {
    // changeState: function(payLoad) {
    //   return this.$store.commit("changeNavActive", payLoad);
    // }
    show() {
      this.isShowing = !this.isShowing;
    },

    showLogo(event) {
      // console.log(`logo url ${event.target.value}`);
      this.logoUrl = event.target.value;
    },
  },
  computed: {
  },
};

</script>

<style scoped>
.team-detail-wrap {
    display: flex;
    flex-direction: column;
    border-radius: 12px 0 0 12px;
}

.team-main-wrap {
    box-shadow: 0px 0px 13px #8080802e;
    padding: 0.2rem 0.4rem;
}

.team-wrap {
    border-radius: 0 12px 12px 0;
    border-left: 1px solid #cacaca;
}

.team-detail-top .text {
    font-weight: 600;
    font-size: 0.8rem;
    color: #9fa2b2
}

.team-detail-top {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0.4rem 1.7rem 0 1.1rem;
    position: relative;
}

.team-wrap .team-detail-top .verified {
    position: absolute;
    right: 8px;
    bottom: 2px;
}

.team-wrap .team-detail-top .verified::before {
    color: #18ce18;
}

.team-detail-bottom .select-team-role {
    width: 45%;
    border: none;
}

.team-detail-bottom .select-team-role select {
    background-color: #e2e2e2;
    border: none;
    height: 35px;
}

.team-wrap .team-detail-top {
    padding: 0.4rem 8rem 0 1.1rem;
}

.team-wrap .user-name {
    font-size: 1rem;
    font-weight: 700;
    color: #9fa2b2;
}


.team-wrap .user-email {
    font-size: 0.9rem;
    margin-top: -6px;
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
    margin-right: 0.5rem;
}


.workspace-icon::before {
    font-size: 0.9rem;
    color: #fdedbf;
}

.team-detail-bottom {
    border-top: 1px solid #cacaca;
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem 1rem 1rem;
    height: 55px;
}

.team-detail-bottom .workspace-logo {
    height: 30px;
    width: 30px;
}

.team-detail-bottom .workspace-name {
    text-transform: capitalize;
    color: #9fa2b2;
}

</style>

