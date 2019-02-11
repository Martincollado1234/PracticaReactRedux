import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Game from "./Components/Game";
import Navbar from  "./Components/Navbar";
import {questionAnswer, initQuestions} from './redux/actions';
import {changeQuestion} from './redux/actions';
import {submit} from './redux/actions';
import $ from 'jquery';
import './Estilo.css';
class App extends Component {
  constructor(props){
    super(props)
    this.previous=this.previous.bind(this)
    this.next=this.next.bind(this)
    this.submit=this.submit.bind(this)
    this.volver=this.volver.bind(this)
  }
  previous(){
    if(this.props.currentQuestion===0) {
      return
    }
    this.props.dispatch(changeQuestion(this.props.currentQuestion-1))
  }
  next(){
    if(this.props.currentQuestion===this.props.questions.length-1){
      return
    }
     this.props.dispatch(changeQuestion(this.props.currentQuestion+1))
  }
  submit(){
    this.props.dispatch(submit(this.props.questions))
  }
  componentDidMount(){
    $.ajax({
      url: "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=dded81ef2abf8d555904",
    })
    .done((data)=> {
      this.props.dispatch(initQuestions(data))
      console.log(data);
    });
  }

  volver(){
    $.ajax({
      url: "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=dded81ef2abf8d555904",
    })
    .done((data)=> {
      this.props.dispatch(initQuestions(data))
      console.log(data);
    });
  }
  render(){
    if (this.props.finished) 
     return(
        <div>
          <div className="Marcador">Has obtenido {this.props.score} puntos </div>
          <div className="botonVueltaClase"><button  onClick={/*() => */this.volver}>Reiniciar</button></div>
        </div>
     );
    else{
     return (
        <div>
          <Navbar
            imagen ={this.props.questions[this.props.currentQuestion].attachment.url}
          />
          <Game 
            index = {this.props.currentQuestion +1} 
            question ={this.props.questions[this.props.currentQuestion]}
            onQuestionAnswer={(answer)=>{
              this.props.dispatch(questionAnswer(this.props.currentQuestion,answer))
                }}
            submit1 ={this.submit }
            onQuestionNext= {this.next} 
            onQuestionPrevious= {this.previous}
            reset= {this.volver}
          />
        </div>
     );
    }
  }
}
function mapStateToProps(state){
  return{
      ...state
  };
}
export default connect(mapStateToProps)(App);



  