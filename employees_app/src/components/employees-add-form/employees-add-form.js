import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor({props}) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {name, salary} = this.state
        const {onAdd} = this.props
        return (
            <div className="app-add-form">
                <h3>Add a new employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        onChange={this.onInputChange}
                        name='name'
                        value={name}
                        placeholder="What's name?" />
                    <input type="number"
                        className="form-control new-post-label"
                        onChange={this.onInputChange}
                        name='salary'
                        value={salary}
                        placeholder="Salary in $?" />
    
                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={(e) => onAdd(e, name, +salary)}>Add</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;