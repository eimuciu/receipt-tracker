import type { Receipt } from '../types/types';
import { calcExpenseTotal } from './calcExpenseTotal';

export function calcTotalSpent(receiptsArr: Receipt[]): number {
  return receiptsArr.reduce(
    (total, current) => total + calcExpenseTotal(current.expense),
    0,
  );
}
