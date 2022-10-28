import './App.css';
import MainPage from './MainPage';

function App() {
  return (
    <div className="App">
      <header>
        <h2>Building a Vanilla Project</h2>
        {/* <MainPage currentPage="Counter" /> */}
        {/* <MainPage currentPage="ColorFlipper" /> */}
        {/* <MainPage currentPage="ColorFlipperHex" /> */}
        <MainPage currentPage="Reviews" />
      </header>
      
    </div>
  );
}

export default App;
