import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Records from "./Records"

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;


  return (
    
    <div >
       <NavBar user={user} setUser={setUser} />
      <main className="recordcontainer">
          <Switch>
            <Route  path="/records">
             <Records />
           </Route>
            <Route  path="/">
              <Home user={user}/>
            </Route>
          </Switch>
      </main>
    </div>
     
    
  );
}
export default App;