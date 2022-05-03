import { addCSSClassName } from "../../../assets/js/functions";

import css from "./Container.module.scss";

type ContProps = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<ContProps> = (props) => {
  const className = props.className;

  return (
    <div
      className={addCSSClassName(css, "container", className ? className : "")}
    >
      {props.children}
    </div>
  );
};

export default Container;
