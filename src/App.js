import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Container, InputGroup, FormControl, Button, Row, Card  } from 'react-bootstrap'
import {useState, useEffect} from 'react'


function App() {
const [endPoint, setEndPoint]=useState('')
const [container, SetContainer] = useState([])
const [finalpoint, setFinalpoint]= useState('')


async function search(){
  console.log("search" + setEndPoint)
}

useEffect(() =>{
   fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=+${endPoint}`, {
   "method": 'GET',
    "headers": {
   
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
  e.preventDefault();
  setFinalpoint(endPoint);   // to executive submit button
};


   return (
    <div className="App">
<Container>
        <InputGroup className='mp-3' size='lg'>
          <FormControl 
          placeholder='Search'
          type='input'
          onKeyDown={event=>{
            if (event.key==="Enter"){
             (console.log("hello"))
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
              <Button onClick={item.artist.preview}>
            preview
          </Button>
                 </Card>
                )
                 })}
            </Row>
          </Container>
      
    </div>
  );
}

export default App;

