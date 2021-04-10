import './App.css';
import Particles from 'react-particles-js'
import Navigation from './components/navigation/Navigation.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.js';
import Rank from './components/rank/Rank.js';


const particlesOptions = {
  // particles: {
  //   number: {
  //     value: 32,
  //     density: {
  //       enable: true,
  //       value_area: 800
  //     }
  //   },
  //   lines_linked: {
  //     shadow: {
  //       enable: true, 
  //       color: '#3CA9D1',
  //       blur: 5
  //     }
  //   }
  // }
}

function App() {
  return (
    <div className="App">
      <Particles className= 'particles' params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* {
      <FaceRecognition />} */}
    </div>
  );
}

export default App;
