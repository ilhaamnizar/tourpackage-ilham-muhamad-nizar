import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Table from './components/pagination/Table';
import Registration from './pages/Registration';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Table />
      <Switch>
        <Route path='/registration' component={Registration} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
