import './App.css';
import {useState} from "react";
function AnotherCal() {
    const [eqn , setEqn]= useState("");
    const [result , setRes] = useState("");

    const clear = ()=>{
        return (setEqn(""),
        setRes(""));
    }
    const click=(e)=>{
        return(
            setEqn(eqn.concat(e.target.name))
        )
    }
    const calculate= ()=>{
        setRes(eval(eqn))
    }
    const backSpace= ()=>{
            setEqn(eqn.slice(0 , eqn.length-1))
    }

  return (
    <>
    <div className='container body-cont'>
      <div className='container bg-dark input'>
      <div className='container bg-light input-2'>
       {eqn}
      </div>
      <div className='container bg-light input-2 rightv'>
        {result}
      </div>
      </div>
      <div className='container d-flex row-cont'>
        <div className='row'>
          <div className='col-sm-3'>
          <button  name="c" className='btn btn-dark highlight' style={{color:"white"}} onClick={clear}>C</button>
          </div>
          <div className='col-sm-3'>
          <button name="X" className='btn btn-dark highlight' style={{color:"white"}} onClick={backSpace} >x</button>
          </div>
          <div className='col-sm-3'>
          <button name="%" className='btn btn-dark highlight' style={{color:"white"}} onClick={click}>%</button>
          </div>
          <div className='col-sm-3'>
          <button name="/" className='btn btn-dark highlight' style={{color:"white"}} onClick={click}>/</button>
          </div>
          <div className='col-sm-3'>
          <button name="7" className='btn btn-dark' style={{color:"white"}} onClick={click} >7</button>
          </div>
          <div className='col-sm-3'>
          <button name="8" className='btn btn-dark' style={{color:"white"}} onClick={click} >8</button>
          </div>
          <div className='col-sm-3'>
          <button name="9" className='btn btn-dark' style={{color:"white"}} onClick={click} >9</button>
          </div>
          <div className='col-sm-3'>
          <button name="*" className='btn btn-dark highlight' style={{color:"white"}} onClick={click} >*</button>
          </div>
          <div className='col-sm-3'>
          <button name="4" className='btn btn-dark' style={{color:"white"}} onClick={click}>4</button>
          </div>
          <div className='col-sm-3'>
          <button name="5" className='btn btn-dark' style={{color:"white"}} onClick={click}>5</button>
          </div>
          <div className='col-sm-3'>
          <button name="6" className='btn btn-dark' style={{color:"white"}} onClick={click}>6</button>
          </div>
          <div className='col-sm-3'>
          <button name="-" className='btn btn-dark highlight' style={{color:"white"}} onClick={click}>-</button>
          </div>
          <div className='col-sm-3'>
          <button name="1" className='btn btn-dark' style={{color:"white"}} onClick={click}>1</button>
          </div>
          <div className='col-sm-3'>
          <button name="2" className='btn btn-dark' style={{color:"white"}} onClick={click} >2</button>
          </div>
          <div className='col-sm-3'>
          <button name="3" className='btn btn-dark' style={{color:"white"}} onClick={click}>3</button>
          </div>
          <div className='col-sm-3'>
          <button name="+" className='btn btn-dark highlight' style={{color:"white"}} onClick={click}>+</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}}>G</button>
          </div>
          <div className='col-sm-3'>
          <button name="0" className='btn btn-dark' style={{color:"white"}} onClick={click}>0</button>
          </div>
          <div className='col-sm-3'>
          <button name="." className='btn btn-dark' style={{color:"white"}} onClick={click} >.</button>
          </div>
          <div className='col-sm-3'>
          <button name="=" className='btn btn-dark equal highlight' style={{color:"white"}} onClick={calculate}>=</button>
          </div>
        </div>
      </div>
      

    </div>
    </>
  );
}

export default AnotherCal;
