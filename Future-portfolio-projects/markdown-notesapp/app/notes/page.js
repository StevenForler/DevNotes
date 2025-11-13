// "?" is a ternary operator in JS which helps create If/Else eg: condition ? TrueStatement:FalseStatement
/* you can pass attributes through props by adding it in the react imported compontents, 2 kinds static and dynamic, dynamic usually means adding {} because its JS
this method of adding attributes a way to pass down info from parent to child components*/
/* {!isViewer && (<Editor isViewer={isViewer}/>)} in plain english this is saying "if the user is not in viewer show the editor component" the && in this structure,
it forces the the truthy statement to be required and will not show said statement otherwise.*/
//? look into how to do line breaks in placeholder strings <br> and \n aren't getting the results I'm needing

import Editor from "@/components/Editor"
import MDX from "@/components/MDX"
import SideNav from "@/components/SideNav"

export default function page() {
    const isViewer = false // if a variable represents the state of something using "is" in part of the name of said variable helps define state of being.
    
    return (
        <main id="notes">
            <SideNav/>
            {!isViewer && ( // this is call the "and shortcircut" syntax more or less making it required for the condition to be met for the information to show.
                <Editor hello="world" isViewer={isViewer} />)}
            {isViewer && (<MDX/>)}
        </main>
        
    )
}
