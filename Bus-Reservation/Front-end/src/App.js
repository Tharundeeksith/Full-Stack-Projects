import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import UserComponent from './components/UserComponent';
import ViewComponent from './components/ViewComponent';
import Reservation from './components/Reservation';
import DeleteComponent from './components/DeleteComponent';
import EditComponent from './components/EditComponent';
function App() {
  return (
    <div className="App">
      <Router> 
        <Routes> 
          <Route exact path="/" element={<UserComponent/>}/>
          <Route exact path="/view" element={<ViewComponent/>}/>
          <Route exact path="/add" element={<Reservation/>}/>
          <Route exact path="/delete" element={<DeleteComponent/>}/>
          <Route exact path="/edit" element={<EditComponent/>}/>

         </Routes>
      </Router>
    </div>
  );
}

export default App;