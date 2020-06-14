<template>
  <div class="container-fluid px-0">
    <div class="d-flex">
      <div class="sidebar-wrap">
        <main-sidebar active="dashboard"></main-sidebar>
      </div>
      <div class="flex-grow-1 bg-main container-fluid scroll-y">
        <nav-header></nav-header>
        <user-location class="mt-3" active="billing" :data="locations"></user-location>
        <div class="row mt-5">
          <div class="col-6">
            <div class="billing-info">
              <div
                class="desc"
              >Your plan will automatically renew on 2020-03-25 and you'll be charged .</div>
              <a name id class="btn btn-change-plan" href="#" role="button">Change Plan</a>
            </div>

            <div class="billing-info mt-4">
              <h4>Cancel Subscription</h4>
              <div class="desc">
                After cancelling subscription, you will have access to your active plan until
                your billing period end.
              </div>
              <button class="btn btn-cancel">Cancel</button>
            </div>
          </div>
          <div class="col-6">
            <div class="billing-info">
              <div class="desc-payment">Accepted Payment Methods.</div>
              <div class="payment-methods">
                <img src="@/assets/logo-stripe.png" alt="payment methods" class="img-fluid">
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
          name: 'Subscription',
          route: 'billing',
        },
        {
          name: 'Invoices',
          routable: false,
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

.billing-info .desc, .billing-info .desc-payment {
  font-size: 0.7rem;
  margin-bottom: 1rem;
  font-weight: 700;
  margin-top: 1rem;
}

.billing-info .desc-payment {
  text-transform: capitalize;
}

.billing-info h4 {
  text-transform: capitalize;
}

.billing-info .btn-cancel {
  background-color: var(--orange-accent);
  color: #ffffff;
  border-radius: 1rem;
}

.billing-info {
  margin-bottom: 1rem;
}

.payment-methods img {
  width: 75%;
}
</style>
