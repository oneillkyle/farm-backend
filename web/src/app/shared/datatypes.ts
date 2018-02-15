export class Farm {
  public name: string;
  public id?: number;
  public budgets?:  Budget[];
}

export class Budget {
  public amount: string;
  public startDate: string;
  public endDate: string;
  public farm?: string;
  public name?: string;
  public id?: string;
}

export class FarmReturn {
  data: {
    [x: string]: {
      edges: Array<{ node: Farm }>
    }
  }
}

export class Log {
  message?: string;
  code?: number;
  error?: boolean;
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

export class PayloadAction {
  constructor(
    public type: string,
    public payload: any
  ) {}
}
