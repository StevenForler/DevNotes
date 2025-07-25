import React, {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentD(){

    const user = useContext(UserContext);
    return(
        <div className="box">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
            {/* this is what it will looks when passing props through components 
            function ComponentD(props){
              
              return(
                <div>
                    <h1>ComponentD<h1/>
                    <`Bye ${props.user}`/>
                <div/>
              )
            } */}
        </div>
    );
}

export default ComponentD