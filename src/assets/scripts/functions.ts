// Types and interfaces
import StylesModule from "../../models/styles-module";
import AnyObject from "../../models/any-object";

// Helper function to make adding styles modules to the JSX elements easier and fasterd
export function addCSSClassName(
  stylesModule: StylesModule,
  className: string,
  ...helperClasses: string[]
) {
  const finalClass = stylesModule[className];
  const finalClasses = `${finalClass ? finalClass : ""} ${
    helperClasses ? helperClasses.join(" ") : ""
  }`.trim();

  return finalClasses ? finalClasses : "";
}

export const isObjectEmpty = (object: AnyObject) =>
  Object.keys(object).length <= 0 ? true : false;

export const getCurrentViewportSizes = () => {
  const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );

  return {
    vw,
    vh,
  };
};

export const scrollToMainEl = (smoothScroll: boolean, id: string) => {
  const mainEl = document.getElementById(id) as HTMLElement | undefined;

  if (mainEl) {
    const coords = mainEl.getBoundingClientRect();

    window.scrollTo({
      top: coords.y + window.scrollY - 50,
      left: 0,
      behavior: smoothScroll ? "smooth" : "auto",
    });
  }
};
