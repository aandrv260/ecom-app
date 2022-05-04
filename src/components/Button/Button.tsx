import React from 'react';
import { addCSSClassName } from '../../assets/scripts/functions';
import css from './Button.module.scss';

type Props = {
  children: React.ReactNode;
  full?: boolean;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = props => {
  const { children, full, onClick } = props;
  const btnFullClass = full
    ? addCSSClassName(css, 'btn--full')
    : addCSSClassName(css, 'btn--outline');

  return (
    <button
      onClick={onClick}
      className={addCSSClassName(css, 'btn', btnFullClass)}
    >
      {children}
    </button>
  );
};

export default Button;
