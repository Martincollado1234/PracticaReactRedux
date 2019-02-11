import React from 'react';
import '../Estilo.css';
export default class Navbar extends React.Component {
        render() {
            return (
                <div className="Navbar">Quiz
                 <img src={this.props.imagen}/>
                </div>
            );
        }
}
