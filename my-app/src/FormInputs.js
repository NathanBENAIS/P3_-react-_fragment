import React, { Component } from 'react'

export default class FormInputs extends Component {

    state = {

        nom: '',
        age: '',
        ville: '',
        items: []
    }
    // methode onChange
    onChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value

        });
    }

onSubmit = (event) => {
    event.preventDefault(); //prevenir le comportemnt par defaut
    this.setState ({
        nom: '',
        age: '',
        ville: '',
        items: [...this.state.items,{nom: this.state.nom,age :this.state.age, ville : this.state.ville   }]
    });
}

renderCard = (event) => {
return this.state.items.map((item,index)=> {
return (
    <div className='card'key={index} >
 <div className='card-body'>

     <h2>{item.nom}</h2>
     <hr />
     <p> tu as {item.age} ans.</p>
     <p> tu vis à {item.ville}. </p>
 </div>

    </div>
)



})



}
    render() {
        return (
            <div>
                <div className='card my-3'>
                    <div className='card-header'>Ajouter une Personne</div>
                    <div className='card-body'>

                        <form onSubmit={this.onSubmit} >
                            <div className='form-group'>
                                <label htmlFor="nom">Nom</label>
                                <input type="text"
                                    className="form-control form-control-lg"
                                    name="nom"
                                    onChange={this.onChange}
                                    value={this.state.nom}
                                />

                            </div>
                            <div className='form-group'>
                                <label htmlFor="age">Age</label>
                                <input type="text" className="form-control form-control-lg"
                                    name="age"
                                    onChange={this.onChange}
                                    value={this.state.age}
                                />

                            </div>
                            <div className='form-group'>
                                <label htmlFor="ville">Ville</label>
                                <input type="text" className="form-control form-control-lg"
                                    name="ville"
                                    onChange={this.onChange}
                                    value={this.state.ville}
                                />

                            </div>
                            <br />
                            <button className="btn btn-primary btn-block" > Créez votre fiche</button>



                        </form>
                    </div>
                </div>

                {this.renderCard()}
            </div>
        )
    }
}

