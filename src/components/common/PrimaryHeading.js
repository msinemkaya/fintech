import classNames from 'classnames';
import H1 from '../base/heading/H1';

export default function PrimaryHeading({ children, className }){

  const finalClasses = classNames('font-extrabold text-5.5xl mb-3', className)

  return(
    <H1 className={finalClasses}>
      {children}
    </H1>
  );
}