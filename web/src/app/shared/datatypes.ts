export class Farm {
  public name: string;
  public id?: number;
  public budgets?:  Budget[];
}

export class Budget {
  public farm: string;
  public amount: string;
  public start_date: string;
  public end_date: string;
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
