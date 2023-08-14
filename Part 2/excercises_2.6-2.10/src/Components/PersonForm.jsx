// PersonForm.js
import React from 'react';

const PersonForm = ({ newName, newPhoneNumber, handleNameChange, handlePhoneNumberChange, addPerson }) => {
    return (
        <div>
            <div>
                name: <input
                    value={newName}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                phone number: <input
                    value={newPhoneNumber}
                    onChange={handlePhoneNumberChange}
                />
            </div>
            <div>
                <button onClick={addPerson}>add</button>
            </div>
        </div>
    );
};

export default PersonForm;
