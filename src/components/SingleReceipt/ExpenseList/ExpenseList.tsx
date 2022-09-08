import css from './ExpenseList.module.scss';
import type { Expense } from '../../../types/types';
import SingleExpense from './SingleExpense/SingleExpense';

interface Props {
  expenses: Expense[];
  handleUpdateExpense: (a: Expense) => void;
}

const ExpenseList = ({ expenses, handleUpdateExpense }: Props): JSX.Element => {
  return (
    <div className={css.main}>
      {expenses.map((sExp) => (
        <SingleExpense
          key={sExp.id}
          expense={sExp}
          handleUpdateExpense={handleUpdateExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
