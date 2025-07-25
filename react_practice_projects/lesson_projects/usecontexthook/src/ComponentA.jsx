import React, {useState, createContext} from 'react';
// Provider Component: import and export createContext
// export: const MyContext = createContext{}
// the variable should be labeled to match what it's being used for 
//  <MyContext.Provider value={value}> <child component/> </MyContext.Provider>
//

// Consumer Component: import {useContext} in the component in question
// import React, {useContext} from 'react';
// import {MyContext} from './ComponentA;
// const value = useContext(MyContext);
import ComponentB from './ComponentB.jsx';

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("FUTURE PARADOX POKEMON!");

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />
                {/* if we were to pass through properties(props drilling)
                <ComponentB user={user}> */}
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA