import React from 'react';
import {Counter} from "./counter.js"

export class Counters extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counters : [
        {id : 1, value : 10},
        {id : 2, value : 89},
        {id : 3, value : 4},
        {id : 4, value : 0},
      ]
    }
    this.handler = this.handler.bind(this)
  }
  // adding or removing of state must be done from this component
 handler(counterId){
   console.log("clicked...", counterId);
   const new_counter = this.state.counters.filter(function checkCounters(counter){
     if(!(counterId === counter.id)){
       return counter
     }
   })
   console.log(new_counter);
   this.setState({
     counters : new_counter
   })
 }

  render(){
    let handle = this.handler;
    return(
      <div>
       {this.state.counters.map(
         function(counter){
           console.log("in function");
           return (<Counter key={counter.id} id={counter.id} value={counter.value} activity={handle}/>)
         }
       )}
      </div>
    )
  }
}
