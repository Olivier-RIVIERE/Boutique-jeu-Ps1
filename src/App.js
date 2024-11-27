
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Boutique from './components/Boutique/Boutique';

function App() {
  return (
    <>
      <header>
        <Navigation></Navigation>
      </header>
      <main>
        <Boutique></Boutique>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
