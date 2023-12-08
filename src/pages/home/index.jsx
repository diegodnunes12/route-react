import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <section>
      <h1>Hello, There!</h1>
      <p>You are in my website home</p>
      <Link to="/about">Go to About Us</Link>
    </section>
  )
}
