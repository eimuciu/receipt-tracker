import css from './TotalCounter.module.scss';

interface Props {
  totalSpendings: number;
}

const TotalCounter = ({ totalSpendings }: Props): JSX.Element => {
  return (
    <div className={css.main}>
      Total <span>€{totalSpendings.toFixed(2)}</span>
    </div>
  );
};

export default TotalCounter;
