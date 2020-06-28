import IAuthor from "~/interfaces/IAuthor";

export default interface IPost {
  image: string;
  date: string;
  likes: number;
  author: IAuthor
}
