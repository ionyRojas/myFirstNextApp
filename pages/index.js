import Link from 'next/link'

const linkStyle = {
  marginRight: '20px',
};

const MyFirstView = () => (
  <section>
    <Link href='/profile'>
      <a style={linkStyle}>Profile</a>
    </Link>
    <Link href='/shows'>
      <a style={linkStyle}>Shows</a>
    </Link>
    <h1>Home</h1>
    <p>Hola Mundo</p>
  </section>
);

export default MyFirstView;