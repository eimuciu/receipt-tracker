import css from './SingleReceipt.module.scss';
import type { Receipt, Expense } from '../../types/types';
import Button from '../Button/Button';
import CategoriesList from './CategoriesList/CategoriesList';
import ExpenseList from './ExpenseList/ExpenseList';
import { calcExpenseTotal } from '../../utils/calcExpenseTotal';

interface Props {
  receipt: Receipt;
  handleAddExpense: (a: string) => void;
  handleUpdateExpense: (a: string, b: Expense) => void;
}

const SingleReceipt = ({
  receipt,
  handleAddExpense,
  handleUpdateExpense,
}: Props): JSX.Element => {
  return (
    <div className={css.main}>
      <div className={css.header}>
        <div className={css.totalBox}>
          Receipt total: €{calcExpenseTotal(receipt.expense).toFixed(2)}
        </div>
        <div className={css.controlsBox}>
          <CategoriesList />
          <Button onClick={() => handleAddExpense(receipt.id)} smaller>
            Add expense
          </Button>
        </div>
      </div>
      <div className={css.expenseBox}>
        <ExpenseList
          expenses={receipt.expense}
          handleUpdateExpense={(expObj: Expense) =>
            handleUpdateExpense(receipt.id, expObj)
          }
        />
      </div>
    </div>
  );
};

export default SingleReceipt;
