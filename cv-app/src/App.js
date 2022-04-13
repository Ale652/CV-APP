
import './App.css';
import User from "./components/User";
import Skills from './components/Skills';
// import Profil from './components/Profil';
// import FormationsExperiences from './components/FormationsExperiences';
import DarkMode from './components/DarkMode';
import { Preview, print } from 'react-html2pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { ProfilPages } from './components/Pages/ProfilPages';
import { FormationsPages } from './components/Pages/FormationsPages';
import { ExperiencesPages } from './components/Pages/ExperiencesPages';
import { OverviewPages } from './components/Pages/OverviewPage';
import { Header } from './components/Header';
import Projects from './components/Projects';
import Form from './Form';
import { NavLink } from "react-router-dom";
import { PdfPages } from './components/PdfPage';

function App() {

const handleGenerateCv = () => {
  let cvTemplate = document.getElementById("cv-print");
  cvTemplate.setAttribute("style","width:210mm !important")
  cvTemplate.classList.add('cv-print')  /**I need to add cv-print class, otherwise the print will not work correctly */
  document.body.classList.remove("dark")
  setTimeout(() => {
    print("cv","cv-print")
    cvTemplate.setAttribute("style","width:100% !important")
    cvTemplate.classList.remove('cv-print')
  },300)
}

  return (
    
<Router>
  
  {/* <Preview id={'cv-print'} > */}

    
      <div className="App">
        <div className="grid__container">
        
          <div className="sidebar">
            <div className='actions'>
              <DarkMode />
              {/* <button onClick={handleGenerateCv}> <PictureAsPdfIcon /></button> */}

              <NavLink
                className="nav-button-pdf"
                // activeClassName="nav-button--active"
                to="/pdf"
                >
              <PictureAsPdfIcon />
             </NavLink>
            </div>
            <User />
            <Skills />
            </div>
            
            <div className="main">
            <Header />
                <Switch>
                <Route path="/overview">
                    <OverviewPages />
                  </Route>
                  <Route path="/profile">
                    <ProfilPages />
                  </Route>

                  <Route path="/formations">
                    <FormationsPages />
                  </Route>

                  <Route path="/experiences">
                    <ExperiencesPages />
                  </Route>

                  <Route path="/projects">
                    <Projects />
                  </Route>

                  <Route path="/contactme">
                    <Form />
                  </Route>

                  <Route path="/pdf">
                    <PdfPages />
                  </Route>

                   {/* <FormationsExperiences />  */}
                  <Redirect to="/overview" />
              </Switch>
            </div>
            
        </div>
      </div>
    
  {/* </Preview> */}
</Router>
  )
}

export default App;
