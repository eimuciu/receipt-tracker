import css from './Button.module.scss';

interface Props {
  children: string;
  onClick?: () => void;
  secondary?: boolean;
}

const Button = ({ children, onClick, secondary }: Props): JSX.Element => {
  return (
    <button
      className={secondary ? css.secondary : css.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
