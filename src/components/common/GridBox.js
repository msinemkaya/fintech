import classNames from 'classnames';

export default function GridBox({ children, className }){

  const finalClasses = classNames('grid', className)

  return(
    <div className={finalClasses}>
      {children}
    </div>
  );
}