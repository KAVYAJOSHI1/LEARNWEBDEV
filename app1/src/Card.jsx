import passportphoto from './passportphoto.jpeg';

function Card() {
  return (
    <div className="card">
      <img className='card-image' src={passportphoto} alt="profile picture" />
      <h2 className="card-title">KAVYA JOSHI</h2>
      <p className="card-text">I am a student, I do coding</p>
    </div>
  );
}

export default Card;
