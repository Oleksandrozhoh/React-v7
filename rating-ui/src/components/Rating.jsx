import {useState} from 'react';
import Star from './Star.jsx';
import ThankYouModal from './ThankYouModal.jsx';
import Button from './Button.jsx';

const Rating = ({heading = "Default Heading", color = "gold"}) => {


    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submited, setSubmited] = useState(false);

    const stars = Array.from({length: 5}, (_, i) => i + 1);
    const feedback = ["Very Bad", "Bad", "Okay", "Good", "Excellent"];

    const handleSubmit = () => {
        if (rating > 0) {setSubmited(true)}
    }

    const closeModal = () => {
        setSubmited(false);
        setRating(0);
        setHover(0);
    }

    
  return ( <div className="rating-container">
    <h2>{heading}</h2>
    <div className="stars">
        {stars.map((star) => (
            <Star 
            key={star} 
            rating={rating}
            hover={hover}
            color={color}
            star={star}
            ratingClick={(setRating)}
            hoverEnter={(setHover)}
            hoverLeave={() => setHover(null)}/>
        ))}
        </div>
        <div>
            {rating > 0 && <p className="feedback">{feedback[rating - 1]}</p>}
        </div>
         <Button className="submit-btn" disabled={rating === 0} onClick={handleSubmit}>Submit</Button>
         <ThankYouModal rating={rating} isOpen={submited} closeModal = {closeModal}/>
    </div> );

} 

export default Rating;