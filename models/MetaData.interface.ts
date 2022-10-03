import { Tag } from "./Tag";

export interface MetaData {
    id: number
    title: string;
    date: string;
    tag: Tag[];
}