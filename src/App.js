import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SinglePost from "./components/singlePost/SinglePost";
import Create from "./Create";
import {
BrowserRouter as Router,
Routes,
Route,
Link
} from "react-router-dom";


function App() {

  const user =false;

  return (
  
    <Router>
      <TopBar/>

      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/register" element = {user? <Home/> : <Register/>}/>
        <Route exact path="/login" element = {<Login/>}/>
        <Route exact path="/write" element = {<Write/>}/>
        <Route exact path="/singlepost" element = {<SinglePost/>}/>
        <Route exact path="/settings" element = {<Settings/>}/>
        <Route exact path="/single" element = {<Single/>}/>
        <Route exact path="/create" element = {<Create/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
