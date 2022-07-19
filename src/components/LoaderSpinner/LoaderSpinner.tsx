import css from './LoaderSpinner.module.scss';

import { addCSSClassName } from '../../assets/scripts/functions';

const LoaderSpinner = () => {
  return <div className={addCSSClassName(css, 'spinner')}></div>;
};

export default LoaderSpinner;
