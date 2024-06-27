import React, { useEffect, useState } from 'react'

function Location() {
    const [location, setLocation] = useState({
        latitude: '',
        longitude: ''
    })


    console.log(localStorage.getItem('latitude'))


    useEffect(() => {
        if (localStorage.getItem('latitude')) {
            setLocation(
                {
                    latitude: localStorage.getItem('latitude'),
                    longitude: localStorage.getItem('longitude')
                }
            )
        }
    }, [])

    function handleLocation() {
        navigator.geolocation.getCurrentPosition(function (p) {
            let latitude = p.coords.latitude
            let longitude = p.coords.longitude

            setLocation({
                latitude: latitude,
                longitude: longitude,
            })

            localStorage.setItem('latitude', latitude)
            localStorage.setItem('longitude', longitude)

        })

    }

    console.log(location)


    return (
        <div>
            <h1>Location</h1>
            <p>your current location: {location.latitude} and {location.longitude}</p>
            <button onClick={handleLocation}>Get location</button>
            
        </div>
    )
}

export default Location