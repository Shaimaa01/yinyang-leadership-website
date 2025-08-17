
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats'; 
import {Founder} from './components/Founder';

function App() {
  return (
   
    <div className="relative bg-white">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Founder/>
    </div>
  );
}

export default App;
