import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, InputGroup, FormControl, Button, Row, Card  } from 'react-bootstrap'
import {useState, useEffect} from 'react'







function App() {
const [searchInput, setSearchInput]= useState("")
const [accessToken, setAccessToken]=useState("")

useEffect=(() =>{               //set uup how to run and initialing API code
//API Access Token
var authParameters = {
  //Host:'https://accounts.spotify.com/',
  method:'POST',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded',
    //'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },

  body:'grant_type=client_credentials&client_id=' + client_id + '&client_secret=' + client_secret 
  //+ client_id + '&client_secret=' + client_secret + '&redirect_uri=' + redirect_uri 
}

fetch('https://accounts.spotify.com/api/token', authParameters)    //get access token from Spotify 
  .then(result =>{
    if (!result.ok){                                               // if can't get token to catch error
      throw new Error('Failed to fetch access token from Spotify API')
    }
      return result.json()
    })
  .then(data => setAccessToken(data.access_token)
  )
  .catch(error=>{
    console.log(error)
  })
 },[])                    

//search
async function search(){
  console.log("search " + searchInput)
// Search with Artist ID
const artistParameters = {
  method:'GET',
  headers:{
    'Content-Type': 'application/json',
    'Authorization':'Bearer' + accessToken
  }

}
const artistID = await fetch ('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
.then(response=>response.json())
.then(data=>console.log(data))

}

  return (
    <div className="App">
      <Container>
        <InputGroup className='mp-3' size='lg'>
          <FormControl
          placeholder='Search'
          type='input'
          onKeyDown={event=>{
            if (event.key==="Enter"){
              search()
            }
          }}
          onChange={event=>setSearchInput(event.target.value)}
          />
          <Button onClick= {search}>
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
