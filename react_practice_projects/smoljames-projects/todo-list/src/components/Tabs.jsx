//going to use the .map() method to create three buttons for one button tag instead of multiple button tags aka mapping/react mapping
// Tab = the name of each element in the array
// tabIndex = array number of the element(placement)
export function Tabs(props) {
    const { todos } = props

    const tabs = ['All','Open', 'Completed']

    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ?
                    todos.length :
                    tab === 'Open' ?
                    todos.filter(val => !val.complete).length:
                    todos.filter(val => val.complete).length
                    //<todos className="length">tab</todos>

                return (
                    <button key={tabIndex} className="tab-button">
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
        </nav>
    )
}