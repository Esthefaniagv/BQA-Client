import './App.css'
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { MainRouter } from './components/router/MainRouter';


function App() {

  return (
    <>
      <MainRouter/>
      <Footer /> 
    </>
  )
}

export default App
