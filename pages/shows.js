import Link from 'next/link'

const linkStyle = {
  marginRight: '20px',
};

const Shows = () => (
  <section>
    <Link href='/'>
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href='/profile'>
      <a style={linkStyle}>Profile</a>
    </Link>
    <h1>Shows</h1>
    <p>Hola mundo desde Shows</p>
  </section>
);

export default Shows;