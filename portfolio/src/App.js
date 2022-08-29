import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Wallpapers from './components/Wallpapers';
import NotFound from './components/NotFound';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
        <Switch>
          <Route
          exact
          path='/projects'
          component={Projects}
          />

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

          <Route
          exact
          path=''
          component={NotFound}
          />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
