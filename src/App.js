import './App.css';
import Nav from './Nav';
import Features from './features';
import Mission from './mission';
import Component from './component';
import Footer from './footer';
import HomeContent from './homecontent';
function App() {
  return (
    <div className="App">
    <Nav />
    <HomeContent />
    <Features />
    <Mission />
    <Component />
    <Footer />
    </div>
  );
}

export default App;
