import './App.css'
import Counter from './Components/Counter'
import Counter1 from './Components/Counter1' 
import { Component } from 'react';
export class App extends Component {
  constructor() {
    super();
    this.state={
show:false
    }
  }
  toggel=()=>{
    this.setState({
      show : ! this.state.show
    })
    console.log(this.state.show)
  }
  render() {
    return (
      <div>
        <h1 className='click'> click on the button </h1>
<button onClick={()=>this.toggel()}  >{ this.state.show ? 'hide' : 'start the counter'  }</button>

{
  this.state.show ? (<Counter/>) : (<h1 className='noth'>nothing to show</h1>) 
  
} 
<Counter1/> 


      </div>
    )
  }
}

export default App
