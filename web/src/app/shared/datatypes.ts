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
