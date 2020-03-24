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
    console.log("Counter App Constructor");
  }

  //mount lifecycle hook
  componentDidMount(){
    //Ajax call and setState with new data
    console.log("App mounted");
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

  // after updation
  componentDidUpdate(prevState){
    console.log("component Updated ");
    console.log("current state : ", this.state.count);
    console.log("prev state : ", prevState);
    // aim : if states changes then give a ajax call to get new data from server
  }

  componentWillUnmount(){
    console.log("Counter deleted...");
    // place for cleanup....timers or prevent memory leak
  }

  render(){
    console.log("rendered");
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
