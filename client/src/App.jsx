import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>}></Route>
          <Route path="/about" element={<Layout><About /></Layout>}></Route>
          <Route path="/skills" element={<Layout><Skills /></Layout>}></Route>
          <Route path="/contact" element={<Layout><Contact /></Layout>}></Route>


        </Routes>
      </Router>
    </>
  )
}

export default App
