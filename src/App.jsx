import Hero from './components/sections/Hero.jsx';
import BackToTop from './components/layout/BackToTop.jsx';
import Opening from './components/sections/Opening.jsx';
import Theory from './components/sections/Theory.jsx';
import DigitalMonopoly from './components/sections/DigitalMonopoly.jsx';
import InteractiveCase from './components/sections/InteractiveCase.jsx';
import RideNowStory from './components/sections/RideNowStory.jsx';
import RealWorld from './components/sections/RealWorld.jsx';
import TheoryValue from './components/sections/TheoryValue.jsx';
import Solutions from './components/sections/Solutions.jsx';
import Conclusion from './components/sections/Conclusion.jsx';
import Sources from './components/sections/Sources.jsx';

export default function App() {
  return (
    <div className="site-shell">
      <main>
        <Hero />
        <Opening />
        <Theory />
        <DigitalMonopoly />
        <InteractiveCase />
        <RideNowStory />
        <RealWorld />
        <TheoryValue />
        <Solutions />
        <Conclusion />
        <Sources />
      </main>
      <BackToTop />
    </div>
  );
}
