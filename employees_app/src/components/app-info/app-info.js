import './app-info.css'

const AppInfo = (props) => {
    const {employees, increased} = props


    return (
        <div className="app-info">
            <h1 className="app-info__title">Accounting for employees in the company</h1>
            <h2 className="app-info__employees-count">Total count of employees: {employees}</h2>
            <h2 className="app-info__prize">The award will be received: {increased}</h2>
        </div>
    )
}

export default AppInfo;