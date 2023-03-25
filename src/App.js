import Cars from "./components/cars";
import FastCall from "./components/fastCall";
import Header from "./components/header";
import Intro from "./components/intro";
import ToGo from "./components/ToGo";
import Rev from "./components/rev";
import About from "./components/about";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
import { ReactComponent as Call} from './svg/call.svg';


function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <ToGo/>
      <Cars/>
      <Rev/>
      <About/>
      <FastCall/>
      <Contacts/>
      <Footer/>
      <Call className="floating-call" onClick={()=>{
        
        document.getElementById("fast-call").scrollIntoView();
      }}/>
    </div>
  );
}

export default App;
