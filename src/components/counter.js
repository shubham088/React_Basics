import React from 'react'

export class Counter extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      count : this.props.value,
      id : this.props.id
    };
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
  }

  formatCounter(){
    //destructuring variables
    const {count} = this.state;
    return count === 0 ? "Zero" : count;
  }

  handleIncrement(){
    // this.setState((prevState) => {
    //   return {count : prevState.count + 1}
    // })
    this.setState({count : this.state.count + 1})
    console.log('Clicked!!', this.state.count)
  }

  handleDecrement(){
    this.setState({count : this.state.count - 1})
  }

  getBadgeClass(){
    let classes = "badge badge-"
    classes += ((this.state.count === 0) ? 'warning' : 'primary');
    return classes;
  }



  render(){
    return (
      <div>
      <button className="btn btn-primary m-2" onClick={this.handleIncrement}>Increment</button>
      <span className={this.getBadgeClass()}>{this.formatCounter()}</span>
      <button className="btn btn-secondary m-2" onClick={this.handleDecrement}>Decrement</button>
      <button className="btn btn-danger m-2" onClick={() => this.props.activity(this.props.id)} >Delete</button>
      </div>
  )
  }
}
