import Container from '../base/Container';
import turnkey from '../../images/Turnkey.svg'
import investment from '../../images/Investment.svg'
import consultations from '../../images/Consultations.svg'
import SelectionButton from './SelectionButton';

export default function ProductSelection(){

  const selections = [
    {
      icon: turnkey,
      text: 'Turnkey Fintech Solutions'
    },
    {
      icon: investment,
      text: 'Investment in Fintech Companies'
    },
    {
      icon: consultations,
      text: 'Fintech Consultations'
    },
  ]

  return(
    <Container className='space-y-6 basis-0'>
      {selections.map((selection,index) => (
        <SelectionButton selection={selection} key={index}/>
      ))}
    </Container>
  );
}