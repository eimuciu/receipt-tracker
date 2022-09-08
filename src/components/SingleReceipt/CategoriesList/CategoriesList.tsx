import css from './CategoriesList.module.scss';
import { categories } from './categories';

const CategoriesList = (): JSX.Element => {
  return (
    <select className={css.main}>
      <option>-</option>
      {categories.map((sCat) => (
        <option key={sCat} value={sCat}>
          {sCat}
        </option>
      ))}
    </select>
  );
};

export default CategoriesList;
