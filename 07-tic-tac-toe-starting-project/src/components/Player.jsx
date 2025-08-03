import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [name, setName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    const handleEdit = () => {
        setIsEditing((value) => !value);
        if (isEditing) {
            onChangeName(symbol, name)
        }
    }
    return (
        <li className={isActive ? 'active': undefined}>
            <span className="player">
                {
                    !isEditing ?
                    <span className="player-name">{name}</span>
                    :
                    <input type="text" autoFocus={true} required value={name} onChange={(e) => {setName(e.target.value)}} onBlur={() => setTimeout(() => {
                        setIsEditing(false);
                    }, 200)} />
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{!isEditing? 'Edit' : 'Save'}</button>
        </li>
    );
}
