// Types and interfaces
import StylesModule from '../../models/styles-module';

// Helper function to make adding styles modules to the JSX elements easier and fasterd
export function addCSSClassName(
  stylesModule: StylesModule,
  className: string,
  ...helperClasses: string[]
) {
  const mainClass = stylesModule[className];
  const finalClasses = `${mainClass ? mainClass : ''} ${
    helperClasses ? helperClasses.join(' ') : ''
  }`.trim();

  return finalClasses ? finalClasses : '';
}

export function generateId() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}
