export interface Expense {
  id: string;
  note: string;
  price: number | null;
}

export interface Receipt {
  id: string;
  category: string;
  expense: Expense[];
}
