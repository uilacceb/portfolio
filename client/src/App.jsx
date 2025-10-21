import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout"
import Projects from "./pages/Projects"
import { Analytics } from "@vercel/analytics/next"


function App() {


  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Layout><Home /></Layout>}></Route> */}
          <Route path="/" element={<Layout><About /></Layout>}></Route>
          <Route path="/skills" element={<Layout><Skills /></Layout>}></Route>
          <Route path="/projects" element={<Layout><Projects /></Layout>}></Route>
          <Route path="/contact" element={<Layout><Contact /></Layout>}></Route>


        </Routes>
      </Router>
      <Analytics />
    </>
  )
}

export default App
