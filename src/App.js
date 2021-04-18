import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/navigation/Navigation.js';
import FaceRecognition from './components/faceRecognition/FaceRecognition.js';
import SignIn from './components/signIn/SignIn.js';
import Footer from './components/footer/Footer.js';
import Register from './components/register/Register.js';
import Logo from './components/logo/Logo.js';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm.js';
import Rank from './components/rank/Rank.js';
import { useEffect, useState } from 'react';


const defaultUser = {
  id: '',
  name: '',
  email: '',
  entries: 0,
  joined: ''
}

export const serverUrl = 'https://rocky-basin-66122.herokuapp.com'


function App() {
  const [userInput, setUserInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [boxes, setBoxes] = useState({})
  const [route, setRoute] = useState('signin')
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  })



  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    })
  }


  useEffect(() => {
    fetch(`${serverUrl}`)
      .then(response => response.json())
      .then(data => console.log(data))
  })

  const calculateFaceLocations = (data) => {
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    // console.log(width, height)

    const leftCols = []
    const topRows = []
    const rightCols = []
    const bottomRows = []


    for (let region of data.outputs[0].data.regions) {
      let clarifaiFace = region.region_info.bounding_box
      leftCols.push(clarifaiFace.left_col)
      topRows.push(clarifaiFace.top_row)
      rightCols.push(clarifaiFace.right_col)
      bottomRows.push(clarifaiFace.bottom_row)
    }

    return {
      leftCols: leftCols.map(x => x * width),
      topRows: topRows.map(x => x * height),
      rightCols: rightCols.map(x => width - x * width),
      bottomRows: bottomRows.map(x=> height - x*height)
    }
  }


  const displayFaceBoxes = (boxes) => {
    console.log('setBoxes:', boxes)
    setBoxes(boxes)
  }

  const onInputChange = (event) => {
    setUserInput(event.target.value)
  }

  const onButtonSubmit = () => {
    setImageUrl(userInput);
    document.getElementById('App').style.minHeight = '1000px';
    fetch(`${serverUrl}/imageurl`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: userInput
      })
    })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch(`${serverUrl}/image`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              setUser({ ...user, entries: count })
            })
            .catch(console.log)
        }
        displayFaceBoxes(calculateFaceLocations(response))
      })
      .catch(err => console.log('There was an error in the Clarifai request.', err))


  }

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignedIn(false);
      setUser(defaultUser);
      setImageUrl('');
      setBoxes({});
    } else if (route === 'home') {
      setIsSignedIn(true)
    }
    setRoute(route)
  }



  return (
    <div className='content-wrapper'>
      <div id="App" className="App">
        <Particles className='particles' />
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
        <Logo />
        {route === 'home'
          ? <div>
            <Rank
              userName={user.name}
              userEntries={user.entries}
            />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition
              boxes={boxes}
              imageUrl={imageUrl}
            />
          </div>
          :
          (
            route === 'signin'
              ? <SignIn
                onRouteChange={onRouteChange}
                loadUser={loadUser}
              />
              : <Register
                onRouteChange={onRouteChange}
                loadUser={loadUser}
              />
          )
        }

      </div>
      <Footer />
    </div>
  );
}

export default App;
