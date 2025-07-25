import ComponentC from './ComponentC.jsx';

function ComponentB(){
    
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC />
            {/* this is what it will looks when passing props through components 
            function ComponentB(props){
              
              return(
                <div>
                    <h1>ComponentB<h1/>
                    <ComponentC user={props.user}/>
                <div/>
              )
            } */}
        </div>
    );
}

export default ComponentB