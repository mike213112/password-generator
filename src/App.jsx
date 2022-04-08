import logo from './logo.svg'
import './App.css'
import Section from './components/sections/section'
import Title from './components/title/title'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Password Generator" />

        <div className="container">
          <Section />
        </div>
      </header>
    </div>
  );
}

export default App;
