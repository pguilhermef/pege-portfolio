import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Wallpapers from './components/Wallpapers';

function App() {
  return (
    <div>
      <Navbar />
        <Switch>
          <Route
          exact
          path='/wallpapers'
          component={Wallpapers}
          />

          <Route
          exact
          path='/'
          component={Home}
          />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
