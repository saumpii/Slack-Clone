import React,{useEffect,useState} from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {useStateValue} from "./StateProvider";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chat from "./Chat";
import Login from "./Login";

function App(){

 // const [user, setUser] = useState();
  const [{user}, dispatch] = useStateValue();

  return(
    <div className="app">
      <Router>
  {!user ? (<h1><Login/></h1>):(
          <>
  <Header/>
  <div className="app_body">
    <Sidebar/>
{/*sidebar*/}
 {/* React-Router* -> Chat Screen*/}
 <Switch>
   <Route path="/room/:roomId">
    <Chat />
   </Route>
   <Route path="/">
     <h1>Welcome</h1>
   </Route>
    </Switch>
  </div>
  </>
  )
  }

  </Router>
  </div>//windows + period for emojis
  )
}

export default App;