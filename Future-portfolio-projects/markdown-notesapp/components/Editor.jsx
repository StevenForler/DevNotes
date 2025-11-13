import TopNav from "./TopNav"

export default function Editor(props) {
    
    return (
        <section className="notes-container">
                    <TopNav {...props}/> {/*using the spread operator like this, pulls all attributes instead of destructuring it*/}
                    <textarea placeholder=" get knocked down, But I get up again,
                    You're never gonna keep me down"/>
                </section>
    )
}
