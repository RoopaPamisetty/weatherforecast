import React from 'react'

function TopButtons({ setQuery }) {
    const cities = [
        {
            id: 1,
            title: 'Anantapur'
        },
        {
            id: 2,
            title: 'Bengaluru'
        },
        {
            id: 3,
            title: 'Hyderabad'
        },
        {
            id: 4,
            title: 'Chennai'
        },
        {
            id: 5,
            title: 'Mumbai'
        },
    ]

    return <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
            <button key={city.id} className="text-white text-lg font-medium" onClick={() => setQuery({ q: city.title })}
            >
                {city.title}
            </button>
        ))}
    </div>

}

export default TopButtons
