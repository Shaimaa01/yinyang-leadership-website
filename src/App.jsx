
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats'; 
import {Founder} from './components/Founder';
import { Services } from './components/Services';

function App() {
  return (
   
    <div className="relative bg-white">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Founder/>
      <Services/>
    </div>
  );
}

export default App;
