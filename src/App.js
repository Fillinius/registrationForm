import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <nav className="nav">
          <div>
            <img src={logo} className="nav-logo" alt="logo" />
          </div>
          <div className="nav-reg">
            <a className="nav_reg-btn" href="/signin">
              Signin
            </a>
            <a className="nav_reg-btn" href="singout">
              Signout
            </a>
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
