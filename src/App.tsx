import { useState } from 'react'
import Navigation from './components/Navigation'
import MagicCursor from './components/MagicCursor'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

type Page = 'home' | 'about' | 'services' | 'contact'

function App() {
  const [page, setPage] = useState<Page>('home')

  const navigate = (p: Page) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <MagicCursor />
      <Navigation current={page} onChange={navigate} />
      <main>
        {page === 'home' && <Home onNavigate={navigate} />}
        {page === 'about' && <About onNavigate={navigate} />}
        {page === 'services' && <Services />}
        {page === 'contact' && <Contact />}
      </main>
    </>
  )
}

export default App
