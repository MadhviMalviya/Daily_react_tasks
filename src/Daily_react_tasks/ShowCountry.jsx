import React, { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';

function ShowCountry() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState('')

    function handleName(e) {
        setName(e.target.value);
    }

    function handleAge(e) {
        setAge(e.target.value);
    }

    function handleSubmit() {
        if (name === '' || name.length < 2) {
            alert('Please enter a valid name');
        } else if (age === '' || age < 18) {
            alert('Please enter a valid age');
        } else if (/[^a-zA-Z]/.test(name)) {
            alert('Please enter alphabet only');
        } else {
            const newData = {
                name: name,
                age: age,
                country: selected
            };

            setData([...data, newData]);
            setAge('');
            setName('');
        }
    }

    return (
        <div>
            <h1>ShowCountry</h1>
            <input
                value={name}
                type='text'
                placeholder='name...'
                onChange={handleName}
            />
            <br />
            <input
                value={age}
                type='number'
                placeholder='age...'
                onChange={handleAge}
            />
            <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
            ></ReactFlagsSelect>
            <br />
            <button onClick={handleSubmit}>Submit</button>

            {data.map((x, y) => (
                <div key={y}>
                    <p>Name:{x.name} ,  :Age:{x.age}</p>
                    <p>{x.country}</p>

                </div>
            ))}
        </div>
    );
}

export default ShowCountry;
