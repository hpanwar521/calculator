/* eslint-disable no-eval */
import React ,{useState} from "react";
import { Container, Row, Col} from "react-bootstrap";
import './calculator.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalculatorIndex = () => {
    const [value, setValue] = useState([]);
    const [cal, setCal] = useState('');

    const operation = (set) =>{
      if(value[value.length-1] !== '/' 
      && value[value.length-1] !== '*' 
      && value[value.length-1] !== '+' 
      && value[value.length-1] !== '-' 
      && value[value.length-1] !== '.'){
        setValue(set)
      }}
    

    const calculateHandler = () =>{
     const see =  value.join("");
     setCal(eval(see));
   
    }
   

  return (
    <div className="calculator">
      <Container fluid className="text-white text-center">
        <Row>
            <div className="totalField">
                <span>{value || '0'} </span>
                <span className="total"> Total = {cal || '0'}</span>
            </div>
        </Row>
        <Row className="operations">
          <Col onClick={()=>{operation([...value,'/'])}}>/</Col>
          <Col onClick={()=>{operation([...value,'*'])}}>*</Col>
          <Col onClick={()=>{operation([...value,'-'])}}>-</Col>
          <Col onClick={()=>{operation([...value,'+'])}}>+</Col>
          <Col onClick={()=>{setValue([]); setCal('')}}>DEL</Col>
          <Col onClick={()=>{value.pop(); setValue([...value])}}>C</Col>
        </Row>
        <Row>
          <Col onClick={()=>setValue([...value,1])}>1</Col>
          <Col onClick={()=>setValue([...value,2])}>2</Col>
          <Col onClick={()=>setValue([...value,3])}>3</Col>
        </Row>
        <Row>
          <Col onClick={()=>setValue([...value,4])}>4</Col>
          <Col onClick={()=>setValue([...value,5])}>5</Col>
          <Col onClick={()=>setValue([...value,6])}>6</Col>
        </Row>
        <Row>
          <Col onClick={()=>setValue([...value,7])}>7</Col>
          <Col onClick={()=>setValue([...value,8])}>8</Col>
          <Col onClick={()=>setValue([...value,9])}>9</Col>
        </Row>
        <Row>
      
         <Col onClick={()=>setValue([...value,0])}>0</Col>
          <Col onClick={()=>{operation([...value,'.'])}}>.</Col>
          <Col onClick={()=>calculateHandler()}>=</Col>
        </Row>
      </Container>
    </div>
  );
};

export default CalculatorIndex;
