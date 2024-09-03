//add an image to the card from google
import profilepic from './profile.jpg';
function Card(){
return(
<div className="card">
    <img className='card.image' src={profilepic} alt="profile picture"></img>
    <h2 className="card-title">FLASH TUBE</h2>
    <p className="card-text">I am a student, i do coding</p>
</div>

);

}

export default Card