import React from 'react';
import   '../Estilo.css'
export default class Actionbar extends React.Component {
    render() {
        return (
            <div className="Actionbar" >
                <div> <button onClick={/*() =>*/ this.props.previous} > Previous </button></div>
                <div><button  onClick={/*() =>*/ this.props.next}>Next</button></div>
                <div><button  onClick={/*() =>*/ this.props.submit2}> Submit </button></div>
                <div><button  onClick={/*() =>*/ this.props.botonReset}> Reset </button></div>
            </div>
        );
    }
}

      