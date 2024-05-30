import React, { useState } from 'react'

function SearchItem() {

    let fruitsArray = ['apple', 'banana', 'orange', 'cherry', 'papaya', 'grapes', 'watermelon', 'mango']

    const [fruit, setFruit] = useState(fruitsArray)

    // const [searchfruit, setSearchfruit] = useState('')

    function handleChangeInput(e) {
        let bhalue=e.target.value
        let newArr=fruitsArray.filter((i)=>i.includes(bhalue))
        setFruit(newArr)
    }


    // function handleSearch() {
    //     let nayaFruit = fruitsArray.filter((x) => x.includes(searchfruit));
    //     setFruit(nayaFruit)
    //     console.log(setFruit(nayaFruit))
    // }

    return (
        <>
            <input  onChange={handleChangeInput} type='text' placeholder='Search for a fruit...' />


            {fruit.map((item, index) => {
                return <div key={index}>
                    <li>{item}</li>
                </div>
            })}
        </>

    )
}

export default SearchItem
