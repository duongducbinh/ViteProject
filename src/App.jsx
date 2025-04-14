import { Outlet, Routes, Route, Link } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  return (
    <>
      <h1>React Router</h1>
      <Navigator />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='Home' element={<Home />} />
          <Route path='About' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

const Navigator = () => {
  return (
    <div>
      <nav>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
      </nav>
    </div>
  )
}

const Layout = () => {
  return (
    <>
      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  )
}

export default App;