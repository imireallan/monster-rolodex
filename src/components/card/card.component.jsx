import React from 'react';
import './card.styles.css';

export default function Card({ monster }) {
    return (
        <div className="card">
            <img
                src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
                alt="monster"
                loading="lazy"
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    );
}
