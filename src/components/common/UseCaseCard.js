import classNames from 'classnames';
import Container from '../base/Container';
import H3 from '../base/heading/H3';
import P from '../base/P';

export default function UseCaseCard({ dark, item }){

  const finalClasses = classNames('p-6 bg-primary-light rounded-sm w-52', {
    '!bg-primary-dark text-white': dark,
    'h-36': !item.company
  }
  )

  return(
    <Container className={finalClasses}>
      {item.company && (
        <Container className='py-3 px-2 rounded-sm bg-white border-secondary-light border-2 inline-block'>
          Logo
        </Container>
      )}
      <H3 className='font-bold py-2'>{item.company}</H3>
      <P className='text-xs'>
        {item.desc}
      </P>
    </Container>
  );
}