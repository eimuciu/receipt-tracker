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
        <CategoriesList />
        <Button onClick={() => handleAddExpense(receipt.id)} secondary>
          Add expense
        </Button>
      </div>
      <div className={css.dataBox}>
        <div className={css.expenseBox}>
          <ExpenseList
            expenses={receipt.expense}
            handleUpdateExpense={(expObj: Expense) =>
              handleUpdateExpense(receipt.id, expObj)
            }
          />
        </div>
        <div className={css.totalBox}>
          <p>Total</p>
          <span>€{calcExpenseTotal(receipt.expense).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleReceipt;
