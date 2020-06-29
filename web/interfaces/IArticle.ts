import ISection from "~/interfaces/ISection";

export default interface IArticle {
    readonly id: number;
    readonly image: string;
    readonly name: string;
    readonly code: string;
    readonly section: ISection;
    readonly date_code?: string;
    readonly comments_count?: number;
    readonly active_from?:number;
}
