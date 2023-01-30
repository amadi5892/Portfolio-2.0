import Nav from './routes/nav/nav.components';
import Hero from './components/hero/hero.components';
import Projects from './components/projects/projects.components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
