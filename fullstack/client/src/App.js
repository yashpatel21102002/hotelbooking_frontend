import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './components/home/Home';
import Hotel from './components/hotel/Hotel';
import List from './components/list/List'

const App = ()=>{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/hotels' element={<List/>}/>
          <Route path='/hotels/:id' element={<Hotel/>}/>
        </Routes>
      </BrowserRouter>   
    </div>
  )
}


export default App;  