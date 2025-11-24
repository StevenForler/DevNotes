const DropdownExample = () => {
    return (
    <div className="container">
        <dropdownContent href="#" >Hi I am said button</dropdownContent>
    </div>
    );
};

const dropdownContent = ({children, href, dropdownContent})  => {
    return(
        <div className="list-container">
            <a href={href}> 
                
            </a>
        </div>
    )
}

export default DropdownExample

// <ul id="list" >
//                 <p>Apple</p>
//                 <p>Orange</p>
//                 <p>Tomato</p>
//                 <p>Pineapple</p>
//                 <p>Lemon</p>
//                 </ul>