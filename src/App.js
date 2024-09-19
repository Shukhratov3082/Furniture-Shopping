import Boarding from "./components/Boarding";
import { Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<Boarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </div>
)
export default App;






