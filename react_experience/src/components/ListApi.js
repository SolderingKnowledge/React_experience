import React, { Component } from 'react'
import DataList from '../backEndApi/data.json'

import DetailApi from '../components/DetailApi'

class ListApi extends Component {
  constructor (props) {
    super(props)
    this.getJson = this.getJson.bind(this)
  }
  getJson(json_message){
    alert(json_message)
  }
  
  render () {
    return (
      <div>
        {DataList.map((DataList, index) => {
          return <DetailApi backEnd_json={DataList} key={`list-api-key ${index}`} json_coming = {this.getJson} /> })
        }
      </div>
    )
  }
}

export default ListApi
