import landmarks from '../images/landmarks.png'
import Home from './Home';
import Header from './Header';
import LandmarkPage from './LandmarkPage';
import { Route, Routes} from "react-router-dom"
import Visited from './Visited';
import Profile from './Profile';
import Favorites from './Favorites';

function App() {
  return (
    <> 
    <Header />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/landmarks" element={<LandmarkPage />}/>
        <Route path="/visted" element={<Visited />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/Favorites" element={<Favorites />}/>

        </Routes>
    </div>
    
    </>
  );
}

export default App;
