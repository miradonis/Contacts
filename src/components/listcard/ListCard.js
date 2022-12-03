import './ListCard.css';

const ListCard = (props) => {
    return (
        <div className='cardDiv'>
            <img className='cardImg' src={props.pic} alt="Pic" />
            <p className='cardName'>{props.name}</p>
            <p className='cardPopularity'>{props.popularity}</p>
        </div>
    )
}

export default ListCard;