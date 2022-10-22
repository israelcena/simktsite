import TopBar from './components/topMenu/TopBar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

import "./app.scss"

export default function App() {
  return (
    <div className='app'>
        <TopBar/>
      <section className='sections'>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </section>
    </div>
  );
}
