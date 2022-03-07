import Navigation from "./components/Navigation"
import ComponentOne from "./components/ComponentOne"
import ComponentTwo from "./components/ComponentTwo"
import ComponentThree from "./components/ComponentThree"
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   <>
   <Navigation/>
   <Routes>
    <Route path="/" element = {<ComponentOne/>}></Route>
    <Route path="/ComponentTwo" element = {<ComponentTwo/>}></Route>
    <Route path="/ComponentThree" element = {<ComponentThree/>}></Route>
   </Routes>
   </>
  );
}

export default App;


