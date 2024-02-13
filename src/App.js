import './App.css';
import Gomb from './components/Gomb';


function App() {

  let kattintasSzam = 0

  function kiiratas(id){
    kattintasSzam++
    console.log(kattintasSzam)
    console.log(id)
  }

  return (
    <div className="App">
        <Gomb fuggveny={kiiratas} id="gomb-1"/>
        <Gomb fuggveny={kiiratas} id="gomb-2"/>
        <Gomb fuggveny={kiiratas} id="gomb-3"/>
    </div>
  );
}

export default App;
