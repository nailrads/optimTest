import IAuthor from "@/interfaces/IAuthor";
import IState from '@/interfaces/IState';

export default (state: IState, payload: IAuthor) => state.authors = payload;
