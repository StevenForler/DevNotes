import ComponentD from './ComponentD.jsx';

function ComponentC(){
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <ComponentD />
            {/* this is what it will looks when passing props through components 
            function Componentc(props){
              
              return(
                <div>
                    <h1>ComponentB<h1/>
                    <ComponentD user={props.user}/>
                <div/>
              )
            } */}
        </div>
    );
}

export default ComponentC