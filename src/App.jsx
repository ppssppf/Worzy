import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./shared/components/Navbar"
import routes from "./routes"

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 p-6">
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

