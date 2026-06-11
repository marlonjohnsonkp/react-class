import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


const Home = () => <h1>Home Component</h1>;
const One = () => <h1>One Component</h1>;
const Tow = () => <h1>Two Component</h1>; 
const Three = () => <h1>Three Component</h1>;
const Four = () => <h1>Four Component</h1>;
const Five = () => <h1>Five Component</h1>;
const Task = () => <h1>Task Component</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/one"> One</Link> | 
        <Link to="/tow"> Tow</Link> | 
        <Link to="/three"> Three</Link> | 
        <Link to="/four">Four </Link> | 
        <Link to="/five">Five </Link> | 
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/one" element={<One />} />
        <Route path="/tow" element={<Tow />} />
        <Route path="/three" element={<Three />} />
        <Route path="/four" element={<Four />} />
        <Route path="/five" element={<Five />} />
      </Routes>

      {/* The Task component must sit inside BrowserRouter if it uses any routing hooks */}
      <Task />
    </BrowserRouter>
  )
}

export default App
