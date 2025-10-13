// nextjs registers layout.js(a reserved file in nextJS) as the parent for the page.js file. it wraps the contexts put into layout around the page.js files

export default function NoteLayouts(props){
    const { children } = props // this is a one line destructuring for the children content which in this case is the content of the page.js file
    return (
        <div>
            {children} {/*since children is JS we need to use curly brackets to inject the contents of "children" onto the page*/}
        </div>
    )
}