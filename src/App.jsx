
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats'; 

function App() {
  return (
   
    <div className="relative bg-white">
      <Header />
      <Hero />
      <About />
      <Stats />
    </div>
  );
}

export default App;
