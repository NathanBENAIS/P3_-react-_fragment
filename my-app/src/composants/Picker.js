import React, { Component } from 'react';
import Calendar from 'react-calendar';
import '../../node_modules/react-calendar/dist/Calendar.css'
export default class Picker extends Component {


    state = {
        date: new Date(),
        showDate: false
    }

    onChange = date => {
        this.setState({
            date
        })
    }

    validation = () => {

        this.setState({

            showDate: true
        })
    }


    render() {
        return (

            <div style={{ boxShadow: "5px 5px 25px",  marginRight: '300px'}}>


                <Calendar
                    onChange={this.onChange}
                    selectRange={true}
                    value={this.state.date}
                />
                <br />
                <button onClick={this.validation} className="btn btn-primary btn-block">Validé</button>
                <br />
                <br />
                {this.state.showDate ? (
                    <div>
                        <p>Du : {this.state.date[0].toLocaleDateString()}</p>
                        <p>Du : {this.state.date[1].toLocaleDateString()}</p>
                    </div>

                ) : null}
                
            </div>
            
        )
    }
}
