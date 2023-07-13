import Container from '../base/Container';
import Input from '../base/Input';
import Label from '../base/Label';

export default function CategoryButton({ children, ...rest }){
  
  return(
    <Container className='flex'>
      <Input type='checkbox' id={children} className='peer hidden' {...rest}/>
      <Label htmlFor={children} className='py-2 px-5 bg-secondary-light border-primary-grey border rounded-full text-xs first-letter:uppercase peer-checked:bg-primary-blue peer-checked:text-white text-primary-dark hover:bg-primary-blue hover:text-white transition-all duration-500'>{children}</Label>
    </Container>
  );
}
