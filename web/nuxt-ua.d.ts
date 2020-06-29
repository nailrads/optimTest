import { UA } from "nuxt-user-agent/lib/types";

declare module "vue/types/vue" {
  interface Vue {
    $ua: UA;
  }
}
