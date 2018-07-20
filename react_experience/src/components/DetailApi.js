import React, { Component } from 'react'

class DetailApi extends Component {
  constructor (props) {
    super(props)
    this.clickFunction = this.clickFunction.bind(this)
    this.toggleFunction = this.toggleFunction.bind(this)
    this.state = {displayDiscription: true}
    this.state = {displayDate: true}
  }
  
  
  clickFunction = (e) => {
    e.preventDefault()
    const {json_coming} = this.props
    
    if (json_coming !== undefined) {
      json_coming("This product is on sale")
    }
    
  }

  toggleFunction(e){
    e.preventDefault()
    this.setState({displayDiscription: !this.state.displayDiscription})

  }

  render () {
    const {backEnd_json} = this.props
    const {displayDiscription} = this.state
    const {displayDate} = this.state
    return (
      <div>
        <h3 onClick={this.clickFunction}>{backEnd_json.product}</h3>
        <h5>{backEnd_json.price}</h5>
        {displayDiscription === true ? <p>{backEnd_json.discription}</p> : ""}
        {displayDate === true ? <p>{backEnd_json.date}</p> : ""}
        <button onClick={this.toggleFunction} className="btn btn-primary">Click to read discription</button>
      </div>  
    )
  }
}

export default DetailApi
