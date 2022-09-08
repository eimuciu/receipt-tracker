import css from './Button.module.scss';

interface Props {
  children: string;
  onClick?: () => void;
  smaller?: boolean;
}

const Button = ({ children, onClick, smaller }: Props): JSX.Element => {
  return (
    <button className={smaller ? css.smaller : css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
