import React from 'react'
import CharacterItems from './CharacterItems'
import Spinner from '../UI/Spinner'

const CharacterGrid = ({ items, isLoading, searchQuery }) => {
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        isLoading ? (<Spinner />) :
            <section className='cards'>
                {filteredItems.map((item, index) => (
                    <CharacterItems
                        key={index}
                        item={item}

                    />
                ))}
            </section>

    )
}

export default CharacterGrid
