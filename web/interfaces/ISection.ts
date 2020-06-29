export default interface ISection {
    readonly name: string;
    readonly code: string;
    readonly id: number;
    readonly subsection: {
        readonly name: string;
        readonly code: string;
        readonly id: number;
    };
}
