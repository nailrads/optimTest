import Vue from "vue";
import VueLazyload from "vue-lazyload";

import error from "../static/icons/error-loading.svg";
import loading from "../static/icons/heart.svg";

Vue.use(VueLazyload, {
  preLoad: 1,
  error: error,
  loading: loading,
  attempt: 1
});
