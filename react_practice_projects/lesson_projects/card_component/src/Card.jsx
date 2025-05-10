//if using an existing photo. put into asset folder
//import profilePic from './assets/profile.jpg'
//set img src to src={-name of import here-}
//preferablly its less than 200x200

function Card(){
    return(
        <div className="card">
                <img className="card-image" src="https://placehold.jp/150x150.png" alt="profile picture"></img>
                <h2 className="card-title">Steveticus</h2>
                <p className="card-text">I stream playing video games...poorly</p>
        </div>
    );
}

export default Card