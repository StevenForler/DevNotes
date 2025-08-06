//going to use the .map() method to create three buttons for one button tag instead of multiple button tags aka mapping/react mapping
// Tab = the name of each element in the array
// tabIndex = array number of the element(placement)
export function Tabs(props) {
    const { todos, selectedTab, setSelectedTab } = props

    const tabs = ['All', 'Open', 'Completed']

    return (
        <nav className="tab-container">
            {tabs.map((tab, tabIndex) => {
                const numOfTasks = tab === 'All' ?
                    todos.length :
                    tab === 'Open' ?
                        todos.filter(val => !val.complete).length :
                        todos.filter(val => val.complete).length
                    {/*setting up a variable to filter the length of an array will save time in the long run
                        lines 12- 16 help with gathering the count for all tasks and parse out all the tasks that are either completed or open 
                        passing this through as an arguement for lines 25-26 will help keep the page flexible when there's more or less than 1*/}

                return (
                    <button onClick={() => {
                        setSelectedTab(tab)
                    }} key={tabIndex}
                        className={"tab-button " + (tab == selectedTab ? ' tab-selected' : ' ')}> 
                            {/*line 25: to append additional classes you must add a space in front of the current class name and surround the additional class in parentheses
                                you can then add a conditional statement to allow for specific variables to receive a specific class. 
                                in this case, intandem with the hr tag it shows with a highlight under the tab of which tab is selected */}
                        <h4>{tab} <span>({numOfTasks})</span></h4>
                    </button>
                )
            })}
            <hr /> {/* hr = horizontal rule this just gives a horizontal line break*/} 
        </nav>
    )
}