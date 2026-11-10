import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page1 from './page1/page1';
import Page2 from './page2/page2';
import Page3 from './page3/page3';
import Page4 from './page4/page4';
import Page5 from './page5/page5';
import Page6 from './page6/page6';
import Page7 from './page7/page7';
import Page8 from './page8/page8';
import Page9 from './page9/page9';
import Page10 from './page10/page10';
import Page11 from './page11/page11';
import Page12 from './page12/page12';
import Page13 from './page13/page13';
import Header from './header/header';
import Footer from './footer/footer';


function App() {

  
  return (
    <>
      <BrowserRouter>
      <Header/>
         <Routes>
           <Route path="/page1" index element={<Page1/>}/>
           <Route path="/page2" index element={<Page2/>}/>
           <Route path="/page3" index element={<Page3/>}/>
           <Route path="/page4" index element={<Page4/>}/>
           <Route path="/page5" index element={<Page5/>}/>
           <Route path="/page6" index element={<Page6/>}/>
           <Route path="/page7" index element={<Page7/>}/>
           <Route path="/page8" index element={<Page8/>}/>
           <Route path="/page9" index element={<Page9/>}/>
           <Route path="/page10" index element={<Page10/>}/>
           <Route path="/page11" index element={<Page11/>}/>
           <Route path="/page12" index element={<Page12/>}/>
           <Route path="/page13" index element={<Page13/>}/>
         </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
