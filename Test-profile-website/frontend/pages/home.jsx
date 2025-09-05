export const Home = () => {

  return (
    <div className='summary-container'>
      <div>
        <h1 className="page-title">About Me</h1>
        <p className='summary-box' id='summary'> here's where I will be putting my summary about my self here</p>
        <img className="profile-image"src='https://placehold.co/50x10' alt="image of myself"/>
        <p>image of me</p>
      </div>
    </div>
  )
}


/*shit won't load if sent as an object

ex: return(
        <div>
          test
        </div>) 

it will as a markup

ex: return <div>test</div> 
*/