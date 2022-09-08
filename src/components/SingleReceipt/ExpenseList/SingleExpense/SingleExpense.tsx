import { useState } from 'react';
import css from './SingleExpense.module.scss';
import type { Expense } from '../../../../types/types';

interface Props {
  expense: Expense;
  handleUpdateExpense: (a: Expense) => void;
}

const SingleExpense = ({
  expense,
  handleUpdateExpense,
}: Props): JSX.Element => {
  const [inputValues, setInputValues] = useState(expense);

  const handleInputChange = (e: any) => {
    const updatedExpense = { ...inputValues, [e.target.name]: e.target.value };
    setInputValues(updatedExpense);
    handleUpdateExpense(updatedExpense);
  };

  return (
    <div className={css.main}>
      <div className={`${css.inputBox} ${css.firstFlexChild}`}>
        <label>Note</label>
        <input
          onChange={handleInputChange}
          value={inputValues.note}
          type="text"
          name="note"
        />
      </div>
      <div className={`${css.inputBox} ${css.secondFlexChild}`}>
        <label>Price</label>
        <input
          onChange={handleInputChange}
          value={Number(inputValues.price)}
          type="number"
          name="price"
        />
      </div>
    </div>
  );
};

export default SingleExpense;
