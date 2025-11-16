import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MonksPage from './pages/MonksPage'
import GenomeTechnologyPage from './pages/GenomeTechnologyPage'
import PreventiveCarePage from './pages/PreventiveCarePage'

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monks" element={<MonksPage />} />
            <Route path="/genome-technology" element={<GenomeTechnologyPage />} />
            <Route path="/preventive-care" element={<PreventiveCarePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
