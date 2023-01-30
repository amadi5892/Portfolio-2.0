import Nav from './routes/nav/nav.components';
import Hero from './components/hero/hero.components';
import Projects from './components/projects/projects.components';
import Contact from './components/contact/contact.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
