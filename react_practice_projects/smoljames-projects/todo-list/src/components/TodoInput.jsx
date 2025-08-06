import { useState } from 'react'

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('') // inputvalue 

    //console.log(inputValue) - to check if the usestate variable is pulling your input correctly 
    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value) 
                {/*e(or event) is passed as the onChange value so if anything changes( like an input) 
                    the usestate variable will grab the change with the setter function on line 10 with e.target.value */}
                {/* the input value will take from the inputValue set on line 9
                    and with setInputValue set to pase th target value, it shall pass through the use stake hook
                    as a string within the default array set earlier*/}
            }} placeholder="Add task" />
            <button onClick={() => {
                if (!inputValue) { return } // this is a guard clause this is here in case if there is a empty input and prevent empty todos
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    )
}