import BlogNewsCard from '../common/BlogNewsCard';
import GridBox from '../common/GridBox';
import newsImage from '../../images/BlogNews.png'
import bigNewsImage from '../../images/BigNewsCard.png'


export default function BlogNewsSection(){

  const news = [
    {
      img: newsImage,
      topics: [
        'updates',
        'stocks',
        'real-time data'
      ],
      date: '01 Jan 2000',
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      img: newsImage,
      topics: [
        'updates',
        'stocks',
        'real-time data'
      ],
      date: '01 Jan 2000',
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      img: newsImage,
      topics: [
        'updates',
        'stocks',
        'real-time data'
      ],
      date: '01 Jan 2000',
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      img: bigNewsImage,
      topics: [
        'updates',
        'stocks',
        'real-time data'
      ],
      date: '01 Jan 2220',
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      img: newsImage,
      topics: [
        'updates',
        'stocks',
        'real-time data'
      ],
      date: '01 Jan 2000',
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      img: bigNewsImage,
      topics: [
        'updates',
        'stocks',
        'real-time data'
      ],
      date: '01 Jan 2220',
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      img: newsImage,
      topics: [
        'updates',
        'stocks',
        'real-time data'
      ],
      date: '01 Jan 2000',
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
    {
      img: bigNewsImage,
      topics: [
        'updates',
        'stocks',
        'real-time data'
      ],
      date: '01 Jan 2220',
      title: 'Strategy for Minimizing and Mastering Dangers in Foreign Exchange Trading',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'
    },
  ]

  return(
    <GridBox className='semi-md:grid-cols-3 sm:grid-cols-2 '>
      {news.map((news,index) => (
        <BlogNewsCard img={news.img} topics={news.topics} title={news.title} date={news.date} key={index}>
          {news.content}
        </BlogNewsCard>
      ))}
    </GridBox>
  );
}