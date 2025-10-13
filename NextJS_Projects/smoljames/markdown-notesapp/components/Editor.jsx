export default function Editor(props) {
    const { isViewer } = props
    
    return (
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
                    <div className="full-line"></div>
                    <textarea placeholder=" get knocked down, But I get up again,
                    You're never gonna keep me down"/>
                </section>
    )
}
