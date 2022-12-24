// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import logo from './Components/logo.png'
import Home from './Components/Home';
import profile from './Components/Profile.png';
import In from './Components/In.png';
import Mail from './Components/Mail.png';
import Royal from './Components/Royal.jpg';
import Text from './Components/Text.jpg';
import Ichiraku from './Components/Ichiraku.jpg';
import Git from './Components/Git.png';
import Resume from './Components/Resume.pdf';
import Project from './Components/Project';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar logo={logo} Resume={Resume} Git={Git} Mail={Mail} In={In}/>
      <Home profile={profile}/>
      <Project Royal={Royal} Text={Text} Ichiraku={Ichiraku}/>
      <Footer/>
    </>
  );
}

export default App;
