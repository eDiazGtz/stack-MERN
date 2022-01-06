import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router'
import AllRestaurants from './components/AllRestaurants'
import Create from './components/Create'
import Details from './components/Details'
import Edit from './components/Edit'
import Delete from './components/Delete'

function App() {
  return (
    <div className="App">
      <h1>Welcome to our Restaurants App!</h1>
      <Router>
        <AllRestaurants path='/restaurants' />
        <Create path='/restaurants/new' />
        <Details path='/restaurants/:id' />
        <Edit path='/restaurants/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
