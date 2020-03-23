import React from "react"
export class ConditionalRender extends React.Component{
  counterState = {
    num : 80
  }
  select(){
    if(this.counterState.num < 10)
      return <h3>hmm</h3>
    return <h3>yuuuu</h3>
  }
  render(){
    return(
      <div>
        {this.select()}
    </div>
  )
  }
}
