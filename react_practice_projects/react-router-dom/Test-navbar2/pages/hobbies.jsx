function Hobbies (){
    return(
        <div hobbies-container>
            <p>Guitar Video</p>
            <video width="600" height="400" controls>
                <source src="https://placehold.co/600x400" type="video/mp4"/>

            </video>
            <p>Cubing Video</p> {/* grab PB video from twitch */}
            <video width="600" height="400" controls>
                <source src="https://placehold.co/600x400" type="video/mp4"/>

            </video>
        </div>
    )
}

export default Hobbies