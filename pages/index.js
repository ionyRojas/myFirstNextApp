import styled, { hydrate} from 'react-emotion';
import Link from 'next/link';

if (typeof window !== 'undefined') {
 hydrate(window.__NEXT_DATA__.ids)
};

const Item = styled('li') ({
  margin: '0 10px',
});

const Title = styled('h1') (
  {
    color: 'blue'
  },
  (props) => ({
    fontSize: props.fontSize
  })
);

const Index = () => (
  <section>
    <ul>
      <Item>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </Item>
      <Item>
        <Link as='/shows/show1' href='/show?show=show1'>
          <a>Show 1</a>
        </Link>
      </Item>
      <Item>
        <Link as='/shows/show2' href='/show?show=show2'>
          <a>Show 2</a>
        </Link>
      </Item>
      <Item>
        <Link as='/shows/show3' href='/show?show=show3'>
          <a>Show 3</a>
        </Link>
      </Item>
      <Item>
        <Link as='/shows/show4' href='/show?show=show4'>
          <a>Show 4</a>
        </Link>
      </Item>
    </ul>
    <Title fontSize='40px'>Home</Title>
    <p>Hola Desde Home</p>
  </section>
);

export default Index;
