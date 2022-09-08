import type { Expense } from '../types/types';

export function calcExpenseTotal(expenseArr: Expense[]) {
  return expenseArr.reduce(
    (total, current) =>
      current.price !== null
        ? Number(total) + Number(current.price)
        : Number(total),
    0,
  );
}
