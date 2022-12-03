import ContactList from '../../assets/data/list';
// import ListCard from '../listcard/ListCard';
import { useState } from 'react';

import './List.css';

const List = () => {

    const [contactListRef, setSort] = useState(ContactList);
    console.log(contactListRef);
    const SortName = () => {
        let contactListRefCopy = [...contactListRef];
        setSort(contactListRefCopy.sort((x, y) => x.name < y.name ? -1 : 1));
    }

    const SortPopularity = () => {
        let contactListRefCopy = [...contactListRef];
        contactListRefCopy.sort((x, y) => Number(x.popularity) - Number(y.popularity));
        setSort(contactListRefCopy);
    }


    return (
        <section>
            <div className='buttonsForSort'>
                <button className='sortByName' onClick={SortName}>Sort by name</button>
                <button className='sortByPopularity' onClick={SortPopularity}>Sort by popularity</button>
            </div>
            <article className='cardsBox'>
                {
                    contactListRef.map((item, index) => {
                        return (
                            <div className='cardDiv' key={index}>
                                <img className='cardImg' src={item.pictureUrl} />
                                <p className='cardName'>{item.name}</p>
                                <p className='cardPopularity'>{item.popularity.toFixed(2)}</p>
                            </div>
                        )
                    })
                }
            </article>
        </section>
    );
}

export default List;