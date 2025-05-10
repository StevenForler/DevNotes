// react hook: a special feature to allow functional components to use react features without writing class components
//            (React 16.8: useState, useEffect, useContext, useReducer, useCallback, and more)

// useState: A react hook that allows the creation of a stateful variable
//           AND a setter function to update tis value in the Virtual DOM. [name(variable), setName(setter function)]
import Counter from './Counter.jsx'


function App() {
  

  return (
    <>
      <Counter />
    </>
  )
}

export default App
