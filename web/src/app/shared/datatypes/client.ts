export class Section {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public image?: string,
    public allows_posts?: boolean,
    public created?: string,
    public updated?: string,
    public posts?: Post[]
  ) {}
}

export class Post {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public slug?: string,
    public section?: number,
    public image?: string,
    public published?: boolean,
    public tags?: Tag[],
    public created?: string,
    public updated?: string
  ) {}
}

export class Tag {
  constructor(
    public id?: number,
    public title?: string,
    public icon?: string,
    public created?: string
  ) {}
}

export class ClientReturn {
  data: {
    allSections?: {
      edges: Array<{ node: Section }>
    },
    createSection?: {
      section: Section
    },
    deleteSection?: {
      id: string
    }
  }
}
