import React, { useEffect, useState } from 'react';
import './App.css';
const FlashCards = () => {
  const [question,setQuestion]=useState({})
  const [answer,showAnswer]=useState(false)
  const [next,setNext]=useState(1)
  const details = [
    {
      id:1,
      question: 'What is JavaScript?',
      answer:
        'JavaScript is a programming language used to make web pages interactive.',
    },
    {
      id:2,
      question: 'What is a variable?',
      answer: 'A variable is used to store data values.',
    },
    {
      id:3,
      question: 'What is the difference between var, let, and const?',
      answer: 'var is function-scoped, while let and const are block-scoped.',
    },
    {
      id:4,
      question: 'What is a function?',
      answer:
        'A function is a block of code designed to perform a specific task.',
    },
    {
      id:5,
      question: 'What is an array?',
      answer:
        'An array is a collection of multiple values stored in a single variable.',
    },
    {
      id:6,
      question: 'What is an object?',
      answer: 'An object stores data in key-value pairs.',
    },
    {
      id:7,
      question: 'What is a string?',
      answer: 'A string is a sequence of characters used to represent text.',
    },
    {
      id:8,
      question: 'What is a loop?',
      answer: 'A loop repeatedly executes a block of code.',
    },
    {
      id:9,
      question: 'What is an if statement?',
      answer: 'An if statement executes code when a condition is true.',
    },
    {
      id:10,
      question: 'What is an operator?',
      answer: 'An operator is a symbol used to perform an operation on values.',
    },
    {
      id:11,
      question: 'What is DOM?',
      answer:
        'DOM stands for Document Object Model and represents the structure of a web page.',
    },
    {
      id:12,
      question: 'What is an event in JavaScript?',
      answer: 'An event is an action such as a click or key press.',
    },
    {
      id:13,
      question: 'What is React?',
      answer: 'React is a JavaScript library used to build user interfaces.',
    },
    {
      id:14,
      question: 'What is a React component?',
      answer: 'A component is a reusable part of a React user interface.',
    },
    {
      id:15,
      question: 'What is JSX?',
      answer: 'JSX allows you to write HTML-like syntax inside JavaScript.',
    },
    {
      id:16,
      question: 'What is useState?',
      answer:
        'useState is a React Hook used to store and update component state.',
    },
    {
      id:17,
      question: 'What is a prop in React?',
      answer: 'Props are values passed from one React component to another.',
    },
    {
      id:18,
      question: 'What is npm?',
      answer:
        'npm is a package manager used to install and manage JavaScript packages.',
    },
    {
      id:19,
      question: 'What is an arrow function?',
      answer:
        'An arrow function is a shorter way to write a JavaScript function.',
    },
    {
      id:20,
      question: 'What is JSON?',
      answer: 'JSON is a text format used to store and exchange data.',
    },
  ];
  const handleNext = ()=>{
    setNext(next+1)
   let nextQuestion=details.find((i=>i.id == (next+1)))
   setQuestion(nextQuestion)
  }
  const handlePrevious = ()=>{
    setNext(next-1)
    let previousQuestion=details.find((i=>i.id == (next-1)))
    setQuestion(previousQuestion)
  }
   useEffect(()=> {
    setQuestion(details[0])
  },[])
  return (
    <div>
      <div class="container">
        <h1>Flash Cards</h1>
        <div class="progress-box">
          <div class="progress">
            <div class={`progress-fill width-${(100/details.length)*next}`}></div>
          </div>
          <span>{(100/details.length)*next}%</span>
          <span class="count">{next} of {details.length}</span>
        </div>
        <div class="card">
          <div class="question">
           {question.question}
           {answer && question.answer}  
          </div>
          <div class="buttons">
            {next!==1 &&  <button onClick={()=>handlePrevious()}>&lt; Previous</button>}
            <button onClick={()=>showAnswer(!answer)}>{answer?"Hide":"Show"}Answer </button>
            {next<details.length&& <button onClick={()=> handleNext()}>Next &gt;</button> }
          </div>
        </div>
        <h2>Flash Cards</h2>
      </div>
    </div>
  );
};
export default FlashCards;