import css from './ReceiptController.module.scss';
import Button from '../Button/Button';
import TotalCounter from '../TotalCounter/TotalCounter';
import { calcTotalSpent } from '../../utils/calcTotalSpent';
import type { Receipt } from '../../types/types';

interface Props {
  handleAddReceipt: () => void;
  receipts: Receipt[];
}

const ReceiptController = ({
  handleAddReceipt,
  receipts,
}: Props): JSX.Element => {
  return (
    <div className={css.container}>
      <TotalCounter totalSpendings={calcTotalSpent(receipts)} />
      <div>
        <Button onClick={handleAddReceipt}>Add receipt</Button>
      </div>
    </div>
  );
};

export default ReceiptController;
