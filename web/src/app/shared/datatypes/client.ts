export class Section {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public image?: string,
    public allowsPosts?: boolean,
    public created?: string,
    public updated?: string,
    public posts?: {edges: {node: Post}[]}
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
    public publishDate?: boolean,
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
    },
    updateSection?: {
      section: Section
    },
    allPosts?: {
      edges: Array<{ node: Post }>
    },
    createPost?: {
      post: Post
    },
    deletePost?: {
      id: string
    },
    updatePost?: {
      post: Post
    },
  }
}
