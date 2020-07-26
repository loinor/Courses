import React from 'react';
import classes from './ActiveQuiz.module.css';
import AnswersList from './AnswersList/AnswersList'

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>1.</strong>&nbsp;
                    {props.question}
                </span>
    <small>{props.answerNumber} из {props.quizLength}</small>
            </p>
            <AnswersList 
                answer = {props.answers}
                onAnswerClick = {props.onAnswerClick}
                state = {props.state}
            />
        </div>
    )
}

export default ActiveQuiz