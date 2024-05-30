import React, { useState } from 'react';

function MyDisplayApi() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    function handleGetData() {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then((res) => res.json())
            .then((d) => setData(d));
    }

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    let newArr = data.filter((h) =>
        h.country.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div>
                <h1>Covid cases</h1>
                <input
                    onChange={handleSearch}
                    type='text'
                    placeholder='search country...'
                    value={search}
                />
                <button type="button" onClick={handleGetData}>Get Data</button>
            </div>

            {newArr.map((any, index) => {
                return (
                    <div key={index}>
                        <img src={any.countryInfo.flag} alt='flag' />
                        <h3>country: {any.country}</h3>
                        <p>Cases: {any.cases}</p>
                        <p>Recovered: {any.recovered}</p>
                        <p>Deaths: {any.deaths}</p>
                    </div>
                );
            })}
        </>
    );
}
export default MyDisplayApi;
