import { BrowserRouter,Routes,Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Login from "./component/Login";
import Register from "./component/Register";


function App() {
  return (
    <div>

      <BrowserRouter>
            <Routes>
              <Route path="/dashboard" element= { <Dashboard/>} />
              <Route path="/register" element= { <Register/>} />
              <Route path="/" element= { <Login/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;