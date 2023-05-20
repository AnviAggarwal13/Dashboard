import './App.css';
import RegistrationForm from './pages/signin';
import Dash from './pages/dashboard';
import SignupForm from './pages/signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
      <Route index element={ <SignupForm />}></Route>
      <Route path="login" element={<RegistrationForm />}></Route>
      <Route path="home" element={<Dash />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
