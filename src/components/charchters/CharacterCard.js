import React, { useState } from 'react';


const CharacterCard = ({ character }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card-front">
                <img src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
            </div>
            <div className="card-back">
                <p>{character.species}</p>
                {/* Add more details as needed */}
            </div>
        </div>
    );
};

export default CharacterCard;
