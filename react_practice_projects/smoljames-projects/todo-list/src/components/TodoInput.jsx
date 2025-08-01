import { useState } from 'react'

export function TodoInput(props) {
    const { handleAddTodo } = props
    const [inputValue, setInputValue] = useState('')

    return (
        <div className="input-container">
            <input value={inputValue} onChange={(e) => {
                setInputValue(e.target.value)
                {/* the input value will take from the inputValue set on line 9
                    and with setInputValue set to pase th target value, it shall pass through the use stake hook
                    as a string within the default array set earlier*/}
            }} placeholder="Add task" />
            <button onClick={() => {
                if (!inputValue) { return }
                handleAddTodo(inputValue)
                setInputValue('')
            }}>
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    )
}