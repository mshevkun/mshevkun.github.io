import './search-panel.css'
import { Component } from 'react'

class SearchPanel extends Component {
  
    constructor({props}) {
      super(props)
      this.state = {
        term: ''
      }
    }

    onUpdateSerch = (e) => {
      const term = e.target.value 
      this.setState({term})
      this.props.onUpdateSerch(term)
    }

    render () {
      return (
        <input 
          type="text" 
          className='form-control search-input' 
          placeholder='Find an employee' 
          value = {this.state.term}
          onChange = {this.onUpdateSerch}/>
      )
  }
}

export default SearchPanel;