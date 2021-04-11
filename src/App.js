import './App.css';
import Particles from 'react-particles-js'
import Navigation from './components/navigation/Navigation.js';
import FaceRecognition from './components/faceRecognition/FaceRecognition.js';
import SignIn from './components/signIn/SignIn.js';
import Register from './components/register/Register.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.js';
import Rank from './components/rank/Rank.js';
import Clarifai from 'clarifai';
import { useState } from 'react';

const clf = new Clarifai.App({
 apiKey: '83dc1c94796a4088ba4b8c132056f364'
});


function App() {
  const [userInput, setUserInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [box, setBox] = useState({})
  const [route, setRoute] = useState('signin')
  const [isSignedIn, setIsSignedIn] = useState(false)


  const calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width, height)


    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),
    }
  }


  const displayFaceBox = (box) => {
    console.log('setBox:', box)
    setBox(box)
  }

  const onInputChange = (event) => {
    setUserInput(event.target.value)
  }

  const onButtonSubmit = () => {
    setImageUrl(userInput)
    console.log('click');
    clf.models
      .predict(
        Clarifai.FACE_DETECT_MODEL, 
        imageUrl)
      .then(response => displayFaceBox(calculateFaceLocation(response)))
      .catch(err => console.log('There was an error in the Clarifai request.', err)) 
  }

  const onRouteChange = (route) => {
    if (route === 'signout'){
      setIsSignedIn(false);
    } else if (route==='home') {
      setIsSignedIn(true)
    }
    setRoute(route)
  }

  return (
    <div className="App">
      <Particles className= 'particles' />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
      <Logo />
      { route === 'home'
        ? <div>
            <Rank />
            <ImageLinkForm 
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit} 
            />
            <FaceRecognition 
            box={box}
            imageUrl={imageUrl} 
            />
          </div> 
        : 
        (
          route === 'signin' 
          ? <SignIn onRouteChange={onRouteChange} />
          : <Register onRouteChange={onRouteChange} />
        )
      }
    </div>
  );
}

export default App;
