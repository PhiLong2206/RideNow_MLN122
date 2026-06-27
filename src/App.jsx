import Header from './components/layout/Header.jsx';
import Hero from './components/sections/Hero.jsx';
import Opening from './components/sections/Opening.jsx';
import Theory from './components/sections/Theory.jsx';
import DigitalMonopoly from './components/sections/DigitalMonopoly.jsx';
import RideNowStory from './components/sections/RideNowStory.jsx';
import RealWorld from './components/sections/RealWorld.jsx';
import TheoryValue from './components/sections/TheoryValue.jsx';
import Solutions from './components/sections/Solutions.jsx';
import Conclusion from './components/sections/Conclusion.jsx';
import Sources from './components/sections/Sources.jsx';

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Opening />
        <Theory />
        <DigitalMonopoly />
        <RideNowStory />
        <RealWorld />
        <TheoryValue />
        <Solutions />
        <Conclusion />
        <Sources />
      </main>
    </div>
  );
}
