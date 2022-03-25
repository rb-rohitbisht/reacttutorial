
import React, { Component } from 'react'

export class CfunctionClick extends Component {
    
        
     hey() {
         console.log('hey is call')
        
    }
  render() {
    return (
      <div>
          <button onClick={this.hey}>onClick</button>
      </div>
    )
  }
}

export default CfunctionClick