import './app-filter.css'

const AppFilter = (props) => {
  const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'For promotion'},
    {name: 'moreThen3000', label: 'Salary over $3000'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name
    let className = active ? 'btn btn-light' : 'btn btn-outline-light'
    
    return (
      <button
        className={className}
        onClick={() => props.onUpdateFilter(name)}
        key={name}
        type="button">
          {label}
      </button>
    )
  })


  return (
    <div className="btn-group">
      {buttons}
    </div>
  )
}

export default AppFilter;