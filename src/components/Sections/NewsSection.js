import Container from '../base/Container';
import H3 from '../base/heading/H3';
import AppSection from '../common/AppSection'
import FlexBox from '../common/FlexBox';
import NewsCard from '../common/NewsCard';
import News1 from '../../images/News1.png';
import News2 from '../../images/News2.png';
import News3 from '../../images/News3.png';
import News4 from '../../images/News4.png';
import Section from '../base/Section';

export default function NewsSection(){

  const allNews = [
    {
      title: 'Distinguishing Between Support and Resistance in Terms of Supply and Demand',
      text: "You can't anticipate all (or even most) of the changes in the market without a crystal ball or other clairvoyant lens into the future. Even so, if you aim to make a living as a trader, you'll need to demonstrate a consistent ability to generate profits while simultaneously minimizing exposure to loss in the foreign exchange market.",
      img: News1
    },
    {
      title: 'Selecting Your First Trading Device',
      text: "Purchasing a reliable tool is crucial at any stage of your trading career. However, these gadgets can be expensive, and it can be difficult to figure out how to get started with",
      img: News2
    },
    {
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      text: "You can't anticipate all (or even most) of the changes in the market without a crystal ball or other clairvoyant lens into the future. Even so, if you aim to make a living as a trader, you'll need to demonstrate a consistent ability to generate profits while simultaneously minimizing exposure to loss in the foreign exchange market.",
      img: News3
    },
    {
      title: 'How to Set Up Your Environment and Trading Routine for Success',
      text: "Today, we'd like to zero in on something that most traders overlook: the significance of your physical workspace to your professional success. What Aspects of Your Daily Trading And Working Environment Articles, videos, and other forms of media can be found on educational websites, all of which claim to provide useful advice for traders.",
      img: News4
    },
  ]

  return(
    <Section className='h-nav-screen p-6'>
      <FlexBox className='flex-wrap gap-y-3'>
        <Container className='grow h-64 p-6 ml-3 bg-primary-dark'>
          <H3 className='font-extrabold text-4xl text-white'>News</H3>
        </Container>
        {allNews.map((news,index) => (
          <NewsCard news={news} key={index}/>
        ))}
      </FlexBox>
    </Section>
  );
}