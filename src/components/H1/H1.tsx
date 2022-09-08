import css from './H1.module.scss';

interface Props {
  children: string;
}

const H1 = ({ children }: Props): JSX.Element => {
  return <h1 className={css.main}>{children}</h1>;
};

export default H1;
