import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
  // code here
  return(
    <div className='app'>
      <h1>Kalvim Gallery</h1>
      <div className='img'>
      {imageData().map((image)=>{
        return <img src={image.img} alt="" />
      })}
      </div>
    </div>
  )
}

export default App;
