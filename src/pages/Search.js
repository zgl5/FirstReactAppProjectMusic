import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Routes, Route } from "react-router-dom";
import {Container, InputGroup, FormControl, Button, Row, Card  } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { Howl, Howler } from 'howler';



function Search(props) {
const [endPoint, setEndPoint]=useState('')
const [container, SetContainer] = useState([])
const [finalpoint, setFinalpoint]= useState('')


useEffect(() =>{

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
}, [finalpoint])

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

const stopTrack = () => {
  if (howler) {
    howler.stop();
    setCurrentTrack(null);
    setHowler(null);
  }
};

return (
    <div className="Search">
<Container>
        <InputGroup className='mp-3' size='lg'>
          <FormControl 
          placeholder='Search'
          type='input'
          onKeyDown={event=>{
            if (event.key==="Enter"){
                submitHandler();
            }
          }}
         onChange={onChangeHandler}
          /> 
          
          <Button onClick={submitHandler}>
            Search
          </Button>

        </InputGroup>
      </Container>
          <Container>
            <Row className='mx-2 row row-cols-4'>
            {container.length>0 && container.map((item,i)=>{
            return (
               
              <Card key={i}>
              <Card.Img src={item.album.cover}/>
              <Card.Body>
                 <Card.Title> {item.title}</Card.Title>
              </Card.Body>
              <Button onClick={() => playTrack(item)}>
                {isPlaying && currentTrack === item ? "Stop" : "Play"}
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