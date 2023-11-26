import React from 'react'

export default function About({ about, image }) {
    return (
        <aside>
            <img src={image ? image : 'https://via.placeholder.com/215'} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}
