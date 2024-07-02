import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div>
            <img src={logo} className="nav-logo" alt="logo" />
          </div>
        </nav>
      </header>
      <main className="App-main">
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  )
}

export default App
