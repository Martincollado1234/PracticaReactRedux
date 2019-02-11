import React from 'react';
import Actionbar from "./Actionbar";
export default class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="Question"> Question {this.props.index}</div>
                <div className="contenidoPregunta">{this.props.question.question}  </div>
                <input type="text" value={this.props.question.userAnswer || ''} onChange={(e)=>{
                        this.props.onQuestionAnswer(e.target.value);
                }}/>
                <div className="contenidoPregunta">Tip: {this.props.question.tips} </div>
                <Actionbar 
                    indice ={this.props.index}
                    previous={this.props.onQuestionPrevious}
                    next={this.props.onQuestionNext}
                    submit2={this.props.submit1}
                    botonReset={this.props.reset}
                    imagen={this.props.imagen}
                /> 
            </div>
        );
    }
}
    
