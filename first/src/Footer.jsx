
function Footer(){

    return(
        // to add javascript within a return element. You have to use {} to allow for JS code
        <footer>
            <p>&copy; {new Date().getFullYear()} Your website name</p>
        </footer>
    );
}

export default Footer