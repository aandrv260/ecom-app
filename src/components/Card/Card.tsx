// Packages
import React from 'react';

// Styles
import css from './Card.module.scss';

// Util functions
import { addCSSClassName } from '../../assets/scripts/functions';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = props => {
  const { className, children } = props;

  return (
    <div className={addCSSClassName(css, 'card', className ? className : '')}>
      {children}
    </div>
  );
};

export default Card;
