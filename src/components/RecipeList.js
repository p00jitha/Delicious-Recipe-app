import React,{useState,useEffect} from 'react';
import './recipe.css'
import Recipe from './Recipe';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const id= process.env.REACT_APP_APP_ID;
  const key=process.env.REACT_APP_APP_KEY;
  const [recipes,setRecipe] = useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState("chicken");
  const getrecipes= async()=>{
    const res=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);
    const data = await res.json();
    setRecipe(data.hits);
    console.log(data)
  }

  useEffect(()=>{
    getrecipes();
     },[query])

  const updateSearch=e=>{
      
      setSearch(e.target.value);
  }
  const handleSubmit=e=>{
    e.preventDefault();
    setQuery(search)
    setSearch("")
  }
  return (
    <>
     <Navbar expand="lg" className="bg-secondary" >
      <Container fluid>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Navbar.Brand href="#" className='navbar text-light' style={{fontFamily:"serif",fontWeight:"bolder",fontSize:"30px"}}>🤤Delicious</Navbar.Brand>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search Recipe"
              className="me-2"
              aria-label="Search"
              value={search} onChange={updateSearch}
            />
            <Button variant="success" type="submit"  >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://media-cdn.grubhub.com/grubhub-marketing/image/upload/f_auto,fl_lossy/v1692270106/grubhubHomePage/sushi_homepage1.png')",  backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',height:'300px'}}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3' style={{fontFamily:"serif",fontWeight:"bolder",fontSize:"100px"}}>🤤Delicious</h1>
              <h4 className='mb-3' style={{fontFamily:"serif",fontWeight:"bold"}}>Easy Recipes for Every Home Chef</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
      <div className='recipelist'>
      {recipes.map(r=>(
           <Recipe
             key={r.recipe.label}
             title={r.recipe.label}
             calories={r.recipe.calories}
             image={r.recipe.image}
             ingredients={r.recipe.ingredients}
             url={r.recipe.url}
           />
         ))}
      </div>
    </>
  ) 
}

export default Header
