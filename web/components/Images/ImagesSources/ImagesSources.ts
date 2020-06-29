import {Component, Prop, Vue} from 'nuxt-property-decorator';

@Component
export default class ImagesSources extends Vue {
    @Prop(Array) private sources!: string[];

    private getHashKey(index: number, sourceName: string): string {
        return `${index}${sourceName}${Date.now()}`;
    }

    private getComma(index: number): string {
        const lastSource = index === this.sources.length - 1;
        return !lastSource ? ', ' : '';
    }

    private getSource(source: string, index: number): string {
        return `${source}${this.getComma(index)}`;
    };
}
