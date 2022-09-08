import css from './ReceiptsList.module.scss';
import SingleReceipt from '../SingleReceipt/SingleReceipt';
import type { Receipt, Expense } from '../../types/types';

interface Props {
  receipts: Receipt[];
  handleAddExpense: (a: string) => void;
  handleUpdateExpense: (a: string, b: Expense) => void;
}

const ReceiptsList = ({
  receipts,
  handleAddExpense,
  handleUpdateExpense,
}: Props): JSX.Element => {
  return (
    <div className={css.main}>
      {receipts.map((rObj) => (
        <SingleReceipt
          key={rObj.id}
          receipt={rObj}
          handleAddExpense={handleAddExpense}
          handleUpdateExpense={handleUpdateExpense}
        />
      ))}
    </div>
  );
};

export default ReceiptsList;
