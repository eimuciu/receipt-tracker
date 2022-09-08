import css from './TotalCounter.module.scss';

interface Props {
  totalSpendings: number;
}

const TotalCounter = ({ totalSpendings }: Props): JSX.Element => {
  return (
    <div className={css.main}>Total spent: €{totalSpendings.toFixed(2)}</div>
  );
};

export default TotalCounter;
