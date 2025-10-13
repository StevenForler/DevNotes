//* "?" is a ternary operator in JS which helps create If/Else eg: condition ? TrueStatement:FalseStatement

export default function page() {
    const isViewer = true // if a variable represents the state of something using "is" in part of the name of said variable helps define state of being.


    return (
        <div>
            <main id="notes">
                <section className="notes-container">
                    <div className="notes-btn">
                        <button className="card-button-primary menu">
                            <i className="fa-solid fa-bars"></i>
                        </button>
                        <button className="card-button-secondary">
                            <h6>Save</h6>
                            <i className="fa-solid fa-floppy-disk"></i>
                        </button>
                        <button className="card-button-secondary">
                            {isViewer ?
                                <>
                                    <h6>Editor</h6>
                                    <i className="fa-solid fa-pencil"></i>
                                </>
                                :
                                <>
                                    <h6>Viewer</h6>
                                    <i className="fa-solid fa-check-double"></i>
                                </>
                            }
                        </button>
                    </div>
                </section>
            </main>
        </div>
    )
}
