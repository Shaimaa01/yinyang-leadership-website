
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats'; 
import {Founder} from './components/Founder';
import { Services } from './components/Services';
import { Approach } from './components/Approach';
import { Features } from './components/Features';
import { Outcomes } from './components/Outcomes';

function App() {
  return (
   
    <div className="relative bg-white">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Founder/>
      <Services/>
      <Approach/>
      <Features/>
      <Outcomes/>
    </div>
  );
}

export default App;
