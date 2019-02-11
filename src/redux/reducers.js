import {combineReducers} from 'redux';
import { QUESTION_ANSWER } from './actions';
import { SUBMIT } from './actions';
import { INIT_QUESTIONS } from './actions';
import { CHANGE_QUESTION } from './actions';

function score(state = 0, action ={}) {
    switch(action.type) {
        case SUBMIT:
            let score = 0;
            action.payload.questions.map((question) => {
                return score+= (question.userAnswer===question.answer)? 1:0;
            });
             return score;
        default:
            return state;
    }
}
function finished(state = false, action ={}) {
    switch(action.type) {
        case SUBMIT:
            return state=true;
        case INIT_QUESTIONS:
            return state=false;    
        default:
            return state;
    }
}
function currentQuestion(state = 0, action ={}) {
    switch(action.type) {
        case CHANGE_QUESTION:
            return action.payload.index;
        default:
            return state;
    }
}
function questions(state = [], action ={}) {
    switch(action.type) {
        case QUESTION_ANSWER:
            return state.map((question,i) => {
                return { ...question,
                            userAnswer: action.payload.index === i ?
                                        action.payload.answer : question.userAnswer}
            })
        case INIT_QUESTIONS:   
            return action.payload.questions;
        default:
            return state;
    }
}
const GlobalState = (combineReducers({
    score,
    finished,
    currentQuestion,
    questions
}));
export default GlobalState;
