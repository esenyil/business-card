import './App.css';
import Header from './Header';
import Buttons from './Buttons';

function App() {
  return (
    <div className="App">
      <div className="outer-container">
        <div className='business-card'>
          <Header />
          <Buttons />
          {/* <Main />
          <Footer /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
