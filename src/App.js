import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

export default App;