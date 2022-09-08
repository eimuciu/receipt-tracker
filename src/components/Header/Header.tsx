import css from './Header.module.scss';
import Button from '../Button/Button';
import H1 from '../H1/H1';

interface Props {
  handleAddReceipt: () => void;
}

const Header = ({ handleAddReceipt }: Props): JSX.Element => {
  return (
    <div className={css.main}>
      <H1>Receipts</H1>
      <div>
        <Button onClick={handleAddReceipt}>Add receipt</Button>
      </div>
    </div>
  );
};

export default Header;
