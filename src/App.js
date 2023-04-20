import './App.css';
import Block from './block';
import RegistrationForm from './signin';
import Dash from './dashboard';

function App() {
  return (
    <div>
    <div className="board">
      <Block color="black"/>
    </div>
    <div className="signin">
      <RegistrationForm />
    </div>
    <div>
      <Dash />
    </div>
    </div>
  );
}

export default App;
