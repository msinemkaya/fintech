import classNames from 'classnames';
import Section from '../base/Section';

export default function AppSection({ children, className }){

  const finalClasses = classNames(' h-[calc(100vh-4rem)] flex justify-center w-11/12 mx-auto', className)

  return(
    <Section className={finalClasses}>
      {children}
    </Section>
  );
}