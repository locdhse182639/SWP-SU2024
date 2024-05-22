import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav/Nav';
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
