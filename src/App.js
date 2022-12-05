import './App.css';
import {useState} from "react";
import AnotherCal from './anothercal';
function App() {
  // const [eqn, setEqn]= useState("");
  // const [res,setRes] = useState("");
  // const calculate = ()=>{
  //    setRes(eval(eqn));
  //  }
  //  const remove = () =>{
  //    setEqn(eqn.substring(0,eqn.length-1));
  //  }
  return (
    <>
    {/* <div className='container body-cont'>
      <div className='container bg-dark input'>
      <div className='container bg-light input-2'>
       {eqn}
      </div>
      <div className='container bg-light input-2 rightv'>
        {res}
      </div>
      </div>
      <div className='container d-flex row-cont'>
        <div className='row'>
          <div className='col-sm-3'>
          <button className='btn btn-dark highlight' style={{color:"white"}} onClick={()=>{
            setEqn("");
            setRes("");
          }}>C</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark highlight' style={{color:"white"}} onClick={remove}>x</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark highlight' style={{color:"white"}} onClick={()=>setEqn(eqn+'%')}>%</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark highlight' style={{color:"white"}} onClick={()=>setEqn(eqn+'/')}>/</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'7')}>7</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'8')}>8</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'9')}>9</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark highlight' style={{color:"white"}} onClick={()=>setEqn(eqn+'*')}>*</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'4')}>4</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'5')}>5</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'6')}>6</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark highlight' style={{color:"white"}} onClick={()=>setEqn(eqn+'-')}>-</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'1')}>1</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'2')}>2</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'3')}>3</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark highlight' style={{color:"white"}} onClick={()=>setEqn(eqn+'+')}>+</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}}>G</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'0')}>0</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark' style={{color:"white"}} onClick={()=>setEqn(eqn+'.')}>.</button>
          </div>
          <div className='col-sm-3'>
          <button className='btn btn-dark equal highlight' style={{color:"white"}} onClick={calculate}>=</button>
          </div>
        </div>
      </div>
       */}

    {/* </div> */}
    <AnotherCal/>
    </>
  );
}

export default App;
