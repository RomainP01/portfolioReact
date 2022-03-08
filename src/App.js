import GlobalStyle from './components/GlobalStyle'
//Import Pages
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import OurWork from './pages/OurWork'
import CineSwipe from './pages/Cineswipe'

//Import Nav
import Nav from './components/Nav'
import Footer from './components/Footer'
//Router
import { Switch, Route, useLocation } from 'react-router-dom'

import { AnimatePresence, animatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/cineswipe">
            <CineSwipe />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
