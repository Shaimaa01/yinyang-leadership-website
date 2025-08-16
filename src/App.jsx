// src/App.jsx
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';

function App() {
  return (
    // Note: No need to import index.css here, it's handled by main.jsx
    <div className="relative bg-white">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

export default App;
