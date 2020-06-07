<template>
    <div class="container-fluid px-0">
        <div class="d-flex">
            <div class="sidebar-wrap">
                <main-sidebar active="dashboard"></main-sidebar>
            </div>
            <div class="flex-grow-1 bg-main container-fluid">
                <nav-header></nav-header>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
