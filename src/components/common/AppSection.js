import classNames from 'classnames';
import Section from '../base/Section';

export default function AppSection({ children, className }){

  const finalClasses = classNames('min-h-nav-screen flex justify-center items-center w-11/12 mx-auto', className)

  return(
    <Section className={finalClasses}>
      {children}
    </Section>
  );
}