
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contenu from './composants/Contenu';
import FormInputs from './composants/FormInputs';
import Picker from './composants/Picker';
import Bouton from './composants/Modal/Bouton';




class App extends Component {
  render() {

    return (
      <div >
        <div className="App">
          <p>Salut</p>
          <Contenu />
        </div>
        <hr className="hr" />
        <br />

        <div className="FormInputs"><FormInputs /></div>
        <hr className="hr" />
        <br />

        <div className="App">
          <h3 style={{ fontWeight: 'bold' }}  >Cliquez pour choisir vos dates</h3>
          <br /> <br />
          <Picker /></div>

        <br />
        <hr className="hr" />
        <br />


        <div ><Bouton /></div>     
        <br />
        <hr className="hr" />
     

       
      
          
        <hr className="hr" />
      </div>
    );
  }
}
export default App;








