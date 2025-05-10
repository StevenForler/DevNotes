function ProfilePicture(){

    const imageUrl = 'https://placehold.jp/150x150.png'

    //  if you want to use an actual photo you would make the file path './src/assets/profile.jpg' 
    const handleClick = (e) => e.target.style.display = "none"
    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}
export default ProfilePicture