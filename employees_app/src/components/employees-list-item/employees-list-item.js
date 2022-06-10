import './employees-list-item.css'
import { Component } from 'react'

class EmployeesListItem extends Component {
    constructor({props}) {
        super(props)
        this.state = {
            salary: ''
        }
    }
    
    render() {
        const {name, salary, onDelete, onToogleProp, increase, rise, onUpdateSalary} = this.props

        let classNames = 'list-group-item d-flex justify-content-between'
            
        if (increase) {
            classNames += ' increase'
        }

        if (rise) {
            classNames += ' like'
        }
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onToogleProp} data-toogle="rise">{name}</span>
                <input type="text" className="list-group-item-input" onChange={onUpdateSalary} defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        onClick={onToogleProp}
                        data-toogle="increase"
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            onClick={onDelete}
                            className="btn-trash btn-sm ">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star" data-tooltip="Click on name to change"></i>
                </div>
            </li>
        )
    }
} 

export default EmployeesListItem;