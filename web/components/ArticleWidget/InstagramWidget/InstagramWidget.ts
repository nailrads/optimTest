import {Component, Vue, Prop} from "nuxt-property-decorator";
// import { initInstagram } from "~/lib/embed";


@Component
export default class InstagramWidget extends Vue {
    @Prop(String) private code!: string;

    private mounted() {
        // initInstagram();
    }
}
