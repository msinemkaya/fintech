import classNames from 'classnames';
import Button from '../base/Button';

export default function AppButton({ className, primary, rounded, purple, dark, white, gray, children }){

  const finalClasses = classNames(className, 'font-bold flex items-center hover:scale-110 transition-all duration-500', {
    'w-[11.5rem] h-12 px-8 py-3 rounded-sm': primary,
    'bg-primary-purple text-white': purple,
    'bg-white text-primary-dark': white,
    'bg-primary-light text-primary-dark': gray,
    'bg-primary-dark text-white w-32 h-7 rounded-sm px-4 py-1.5': dark,
    'w-8 h-8 rounded-full bg-secondary-light text-primary-dark': rounded
  })

  return(
    <Button className={finalClasses}>
      {children}
    </Button>
  );
}