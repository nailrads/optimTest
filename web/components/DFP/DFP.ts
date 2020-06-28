import {Component, Vue} from 'nuxt-property-decorator';

@Component({
  name: 'DFP',
  props: { size: Array, path: String, id: String },
  // beforeCreate() {
  //     window.googletag.cmd.push(() => {
  //       window.googletag.destroySlots();
  //     });
  // },
  mounted() {
    const { path, size, id }:any = this;
    console.log(path, window)
    // window.googletag.cmd.push(() => {
    //   window.googletag.defineSlot(path, size, id)
    //     .addService(window.googletag.pubads());
    //     window.googletag.pubads().enableSingleRequest();
    //     window.googletag.enableServices();
    //     window.googletag.display(id);
    // });
  },
})
export default class DFP extends Vue {
    
    
}
