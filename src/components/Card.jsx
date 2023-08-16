import './Card.css';
import { Rating } from '@mui/material';


export default function Card(props){
    const {id, title, price, image, rating, category, onClick} = props;
    const size = 40;
    let newTitle = title.slice(0, size);
    if(title.length > size) {
        newTitle = newTitle + '...';
    }
   
    return (
        <div className="card" id={id} key={id} onClick={onClick}>
            <span className="img">
                <img src={image} alt={title} />
            </span>
            <h4 className='title'>{newTitle}</h4>
            <h4 className='price'>${price}</h4>
            <Rating className='rating' name="read-only" value={rating.rate} readOnly />
            <p className='show-details'>Click to view details </p>
        </div>
    )
}