import Header from './components/Header'
import Profile from './components/Profile'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Location from './components/Location'
import Links from './components/Links'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-grid">
        {/* 左列: Profile */}
        <div className="column">
          <Profile />
        </div>

        {/* 中列: Contact + Skills + Languages */}
        <div className="column">
          <Contact />
          <Skills />
          <Languages />
        </div>

        {/* 右列: Location + Links + Projects */}
        <div className="column">
          <Location />
          <Links />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
