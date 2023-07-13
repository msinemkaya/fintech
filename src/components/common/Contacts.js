import SelectionButton from './SelectionButton';
import FlexBox from './FlexBox';
import email from '../../images/email.svg'
import dev from '../../images/dev.svg'
import sale from '../../images/sale.svg'

export default function Contacts({  }){

  const selections = [
    {
      icon: email,
      text: 'General inquiries',
      subtext: 'info@stackpair.com'
    },
    {
      icon: sale,
      text: 'Head of sales',
      name: 'Meliko',
      subtext: 'info@stackpair.com'
    },
    {
      icon: dev,
      text: 'Head of development',
      name: 'Hako',
      subtext: 'info@stackpair.com'
    },
  ]

  return(
    <>
      <FlexBox className='flex-col !items-start gap-8 my-14'>
        {selections.map((selection,index) => (
          <SelectionButton selection={selection} key={index}/>
        ))}
      </FlexBox>
    </>
  );
}