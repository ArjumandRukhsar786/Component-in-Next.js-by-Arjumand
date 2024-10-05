import Header from './components/Header';
import About from './components/About';

export default function Home(){
  return(
    <div className="bg-green-400  ">
    <h1 className="text-brown-500 font-bold ">This is a  Home page</h1>

    
    <Header />
    <About />

    
    </div>
  );
}