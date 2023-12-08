import {Link} from 'react-router-dom';

export default function About() {
  return (
    <section>
      <h1>Hello, There!</h1>
      <p>You are in my website about page</p>
      <Link to="/">Go to Home</Link>
    </section>
  )
}
