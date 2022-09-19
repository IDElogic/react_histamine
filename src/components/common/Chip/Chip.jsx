import React from 'react';
import './Chip.css';

const Chip = ({ label }) => {
return (
<div className='chip__container'>
    <div>
        <p className='chip'>{label}</p>
    </div>
</div>
)
}

export default Chip;