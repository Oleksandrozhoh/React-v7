import Button from './Button';

const ThankYouModal = ({isOpen, rating, closeModal}) =>  {

    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Thank You!</h2>
                <p>You rated us {rating} star{rating > 1 ? 's' : ''}.</p>
                <Button className="close-btn" onClick={closeModal}>Close</Button>
            </div>
        </div>
    );
}

export default ThankYouModal;