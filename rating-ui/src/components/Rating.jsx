const Rating = () => {

    const stars = Array.from({length: 5}, (_, i) => i + 1);

    const clicked = () => console.log('Clicked!');
    const hovered = (state, index) => console.log(`Hovered: ${state} on star ${index + 1}`);

    
  return ( <div className="rating-container">
    <h2>Rate your experience</h2>
    <div className="stars">
        {stars.map((star, index) => (
            <span 
            onClick={clicked} 
            onMouseEnter={()=>hovered('enter', index)}
            onMouseLeave={()=>hovered('leave', index)}
            key={star} className='star'>{'\u2605'}</span>
        ))}
        </div>
    </div> );

} 

export default Rating;