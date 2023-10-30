import MainImg from './Main_img/Main_img'
import NaviBar from './NaviBar/NaviBar';
import Contain from './Contain/Contain';
import Item from './Contain/Item/item';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sotong from './SotongUl/Sotong';
import Advertising from './Advertsing/Advertising';
import Bottom from './Bottom/Bottom'
import SotongDetail from './SotongDetail/SotongDetail'; 
import SotongCook from './SotongDetail/SotongCook';

function App() {
  return (
  
    <div style={{ width: '100%' }} className="App">
      <div style={{ width: '100%', margin: '0 auto' }} className='wrap'>
    <Router>
      <Routes>
        <Route path="/" element ={ 
        <>
        <NaviBar />,
        <MainImg />,
        <Contain/> ,
        <Item/>,
        </>
      }/>;
      <Route path="/Sotong" element ={<Sotong/>}/>
      <Route path="/Sotong/Cook" element ={
      <>
      <NaviBar />,
      <SotongCook/>
      </>
      }/>
      <Route path="/Advertising" element={<Advertising/>}/>
      </Routes>
    </Router>
    <Bottom/>
      </div>
    </div>
  
  );
}

export default App;
