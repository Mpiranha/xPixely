<template>
  <div class="d-flex justify-content-end header-wrap">
    <div class="mr-5">
      <div class="d-flex btns-wrap">
        <a name id class="btn btn-header" href="#" role="button">Support</a>
        <a name id class="btn btn-header" href="#" role="button">Agency Access</a>
        <a name id class="btn btn-header" href="#" role="button">Retail Access</a>
      </div>
    </div>

    <workspace-name name="Artculture BMC"></workspace-name>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
    };
  },
  methods: {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-wrap {
  position: sticky;
  margin-top: 1.5rem;
  z-index: 999999;
}
.btns-wrap {
  background-color: #e0e2fa;
  border-radius: 1.5rem;
}

.btns-wrap .btn {
  font-size: 0.9rem;
  border-radius: 1.5rem;
  padding: 0.3rem 1.3rem;
}
.btn:focus {
  box-shadow: none;
}

.btn-header:first-child {
  background-color: var(--orange-accent);
  color: #ffffff;
}

</style>
