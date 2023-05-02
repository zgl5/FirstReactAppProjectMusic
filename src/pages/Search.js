import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Container, InputGroup, FormControl, Button, Row, Card  } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { Howl, Howler } from 'howler'; // for play music
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa'; // for customazing the icons
import { FaSearch } from 'react-icons/fa';

const apikey= process.env.REACT_APP_RAPID_API_KEY

function Search(props) {
const [endPoint, setEndPoint]=useState('')
const [container, SetContainer] = useState([])
const [finalpoint, setFinalpoint]= useState('')


useEffect(() =>{
   fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=+${endPoint}`, {
   "method": 'GET',
    "headers": {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key':apikey,
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  })

.then(response => {
 return response.json()
})

.then(data => {
  console.log(data)
  if (data.error) return null;
  SetContainer(data.data)
})

.catch(err => {
  console.error(err)
})
}, [finalpoint])   // to start to searh after clcik.

const onChangeHandler = (e) => {
  setEndPoint(e.target.value);
};

const submitHandler = (e) => {
  //e.preventDefault();
  setFinalpoint(endPoint);   // to executive submit button
};

const [currentTrack, setCurrentTrack] = useState(null);
const [howler, setHowler] = useState(null);
const [isPlaying, setIsPlaying] = useState(false);


const playTrack = (track) => {
  if (howler) {
    howler.stop();
    setHowler(null);
    setCurrentTrack(null);
    setIsPlaying(false);
    return;
  }
  
  const newHowler = new Howl({
    src: [track.preview],
    onplay: () => {
      setCurrentTrack(track);
      setIsPlaying(true);
    },
    onpause: () => {
        setIsPlaying(false);
      },
      onstop: () => {
        setCurrentTrack(null);
        setIsPlaying(false);
      },
      onend: () => {
        setCurrentTrack(null);
        setHowler(null);
        setIsPlaying(false);
      }
    });
  setHowler(newHowler);
  newHowler.play();
};



return (
<div className="Search">
<Container>
        <InputGroup className='mp-3 mb-4 mt-4' size='lg' data-toggle="button">
          <FormControl placeholder='Search' type='input'
          onKeyDown={event=>{
            if (event.key==="Enter"){
                submitHandler();
            }
          }}
         onChange={onChangeHandler}
          /> 
          
          <Button onClick={submitHandler}>
          <FaSearch />
          </Button>

        </InputGroup>
      </Container>
          <Container>
            <Row className=' row row-cols-6 g-4 justify-content-center'>
            {container.length>0 && container.map((item,i)=>{
            return (
               
              <Card key={i} className= 'm-3'>
              <Card.Img className="img-thumbnail"  src={item.album.cover}/>
              <Card.Body>
                 <Card.Title style={{ color: 'brown'}}> 
                  {item.title} <br/> <br/>
                  {item.artist.name} 
               </Card.Title>
              </Card.Body>
              <Button className="btn btn-light" onClick={() => playTrack(item)}>
                {isPlaying && currentTrack === item ? 
                 <FaPauseCircle size={40} color="#dc3545" />
                 :
                 <FaPlayCircle size={40} color="#198754" />
                 }
              </Button>
                 </Card>
                )
                 })}
            </Row>
          </Container>
  
    </div>
 
  );
}

export default Search;