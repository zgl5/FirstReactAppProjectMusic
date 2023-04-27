import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {Container, InputGroup, FormControl, Button, Row, Card  } from 'react-bootstrap'
import axios from 'axios'
import {useState, useEffect} from 'react'


function App() {


 
  async function getData() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result.data[0].album.tracklist);
    
  } catch (error) {
    console.error(error);
  }
}
getData();
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
        
          />
          <Button>
            Search
          </Button>

        </InputGroup>
      </Container>
          <Container>
            <Row className='mx-2 row row-cols-4'>

            
            <Card>
              <Card.Img src="#"/>
              <Card.Body>
                 <Card.Title>
               Album Name
               </Card.Title>
              </Card.Body>
           
            </Card>
            </Row>
          </Container>

          
    </div>
  );
}

export default App;

