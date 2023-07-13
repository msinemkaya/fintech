import Container from '../base/Container';
import Input from '../base/Input';
import Label from '../base/Label';

export default function Checkbox({ id, label }){
  return(
    <Container className='mb-4'>
      <Input type='checkbox' id={id}/>
      <Label htmlFor={id} className='pl-3'>{label}</Label>
    </Container>
  );
}