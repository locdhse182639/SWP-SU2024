import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import HomePage from './pages/homePage';
import AppRoute from './routes/appRoute';

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <AppRoute></AppRoute>
    </div>
  );
}

export default App;
