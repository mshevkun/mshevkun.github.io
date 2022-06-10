import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'


class App extends Component {
  constructor () {
    super()
    this.state = {
      data: [ 
        {name: "John Smith", salary: 2500, increase: false, rise: true, id: 1},
        {name: "Max S.", salary: 3500, increase: true, rise: false, id: 2},
        {name: "Alex M.", salary: 3000, increase: false, rise: false, id: 3},
        {name: "Jennifer M.", salary: 4500, increase: false, rise: false, id: 4}
      ],
      term: '',
      filter: 'all'
    }
  }

  onToogleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(elem => {
        if (elem.id === id) {
          return {...elem, [prop]: !elem[prop]}
        }
        return elem
      })
    }))
  }

  onUpdateSalary = (id, salary) => {
    this.setState({
      data: this.state.data.map(item => {
        if (item.id === id) {
          return {...item, salary: salary}
        }
        return item
      })
    })
  }

  deleteElem = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  

  addElem = (e, name, salary) => {
    e.preventDefault()
    if (name.length > 1 && salary) {
      this.setState(({data}) => {
        const currentId = data.length + 1
        const newItemArray = [{name: name, salary: salary, increase: false, rise: false, id: currentId}]
        const newArr = data.concat(newItemArray)
  
        return {
          data: newArr
        }
      })
    }
  }

  onUpdateSerch = (term) => {
    this.setState({term})
  }

  searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  filterEmployee = (items, filter) => {
    switch (filter) {
      case 'moreThen3000':
        return items.filter(item => {
          return item.salary > 3000
        })
      case 'rise':
        return items.filter(item => {
          return item.increase
        })
    
      default:
        return items;
    }
  }

  onUpdateFilter = (filter) => {
    this.setState({filter})
  }
  
  render() {
    const {data, term, filter} = this.state
    const employees = data.length
    const increased = data.filter(item => item.increase).length
    let visibleData = this.filterEmployee((this.searchEmployee(data, term)), filter)
    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased}/>
        <div className="search-panel">
          <SearchPanel filter = {filter} onUpdateSerch={this.onUpdateSerch}/>
          <AppFilter filter={this.state.filter} onUpdateFilter={this.onUpdateFilter}/>
        </div>
        <EmployeesList 
          data={visibleData}
          onDelete={this.deleteElem}
          onToogleProp={this.onToogleProp}
          onUpdateSalary={this.onUpdateSalary}
          />
        <EmployeesAddForm
          onAdd={this.addElem}/>
      </div>
    )
  }
  
}

export default App;