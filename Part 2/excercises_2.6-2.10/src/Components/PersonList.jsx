// PersonList.js
import React from 'react';

const PersonList = ({ persons }) => {
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person => (
                    <li key={person.id}>
                        {person.name} - {person.phoneNumber}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PersonList;
