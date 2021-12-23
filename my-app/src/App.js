
import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contenu from './Contenu';
import FormInputs from './FormInputs';
import Picker from './Picker';
import Bouton from './composants/Bouton';




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
          <p>Cliquez pour choisir vos dates</p>
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








