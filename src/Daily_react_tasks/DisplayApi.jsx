import React, { useEffect, useState} from 'react'

function DisplayApi() {
    const [data, setData] = useState({})
    const [search, setSearch] = useState('India')

    async function handleGetData() {
           let res=await fetch('https://disease.sh/v3/covid-19/countries/'+search)
           let mydata=await res.json()
           console.log(mydata)
           setData(mydata)       
        }
    
   useEffect(() =>{
    handleGetData()
   },[search])
    
    function handleSearch(e) {
        setSearch(e.target.value)
    }

console.log(search)
console.log(data)
    // let newArr = data.filter((x) =>
    //     x.country.toLowerCase().includes(search.toLowerCase()))
    // console.log(newArr)

    return (
        <>
            <div>
                <h1>Covid cases</h1>
                <input
                    onChange={handleSearch}    
                    type='text' placeholder='search country...'
                    value={search}  />

                <button type="button" onClick={handleGetData}>Get Data</button>
            </div>

        
                    <div>
                        {/* <img src={data.countryInfo.flag}  alt='flag' /> */}
                        <h3>country:{data.country}</h3>
                        <p>Cases:{data.cases}</p>
                        <p>Recovered{data.recovered}</p>
                        <p>Deaths:{data.deaths}</p>
                    </div>
            
        </>
    )
}
export default DisplayApi
