import { Outlet, Routes, Route, NavLink } from 'react-router'
import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='About' element={<About />} />
      </Route>
    </Routes>
  )
}

const Layout = () => {
  const [show, setShow] = useState(false)

  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  })

  return (
    <>
      <h1>React Router</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/" style={style}>Home</NavLink>
        <NavLink to="/About" style={style}>About</NavLink>
      </nav>
      <main style={{ padding: '1rem 0' }}>
        <button onClick={() => { setShow(!show) }}>Show content</button>
        {show &&  <Outlet />}
      </main>

    </>
  )
}

export default App;