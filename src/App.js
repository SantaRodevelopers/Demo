import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Button from './Components/Button';

function App() {
  function displaynext(){
    console.log('next..')
  }
  return (
    <>
    <Nav />
    <h1>This button is for main section {1+1} <Button dn={displaynext} /></h1>
    </>
      


  );
}

export default App;
