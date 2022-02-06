import './App.css';
import Header from './Header';
import Buttons from './Buttons';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="outer-container">
        <div className='business-card'>
          <Header />
          <Buttons />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
