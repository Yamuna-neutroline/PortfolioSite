import { Container, CssBaseline, Grid } from '@material-ui/core';
import Profile from './components/Profile';
import Skill from './components/Skill';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Interests from './components/Interests';
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile/>
            <Skill/>
          </Grid>
          <Grid item xs>
          <Education/>
          <Projects/>
            <WorkExperience/>
            <Interests/>
          </Grid>
        
        </Grid>
        
      </Container>
      <Footer/>
      <CssBaseline/>
    </>
  );
}

export default App;
