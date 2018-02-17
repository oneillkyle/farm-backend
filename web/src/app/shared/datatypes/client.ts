export class Section {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public posts?: Post[],
    public created?: string,
    public updated?: string
  ) {}
}

export class Post {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public created?: string,
    public updated?: string
  ) {}
}
