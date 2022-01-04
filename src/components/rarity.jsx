import React, { useState } from 'react';

export const Rarity = (props) => {

    const [inputValue, setInputValue] = useState();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div id='rarity' className='text-center'>
            <div className='container'>
                <div className='col-md-8 col-md-offset-2 section-title'>
                    <h2>Rarity</h2>
                    <p>
                        This tool allows you to check the rarity of your Santa by inserting his serial number !
                    </p>
                    <p>
                        (for example you want the rarity of #14, simply insert : 14)
                    </p>
                </div>

                <div id='row'>
                    <label>
                        <input className="rarity-input" value={inputValue} onChange={handleChange} placeholder="241" />
                    </label>
                    <div className="rarity-item">
                        {inputValue?.length ? props.data.filter((item) => (inputValue?.length ? item.id === inputValue : true))
                                .map((d, i) => (
                                <div className='cards'>
                                    <div className="card">
                                        <img src={d.image}/>
                                        <div className="card-body">
                                            <h2>Santa #{d.id}</h2>
                                            <h3>Rank: {d.rarity}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))
                            : ''}
                    </div>
                </div>
            </div>
        </div>
    )

}