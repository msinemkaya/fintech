import classNames from 'classnames';
import Section from '../base/Section';

export default function AppSection({ children, className }){

  const finalClasses = classNames('px-6 h-[calc(100vh-4rem)] flex items-center', className)

  return(
    <Section className={finalClasses}>
      {children}
    </Section>
  );
}