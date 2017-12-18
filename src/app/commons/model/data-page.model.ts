export class DataPage<T> {

  public nextPage: string;
  public totalElements: number;
  public content: Array<T> = [];
}
