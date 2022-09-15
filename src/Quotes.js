import React, { useState, useEffect } from "react"

export default function Apartments() {

    const [data, setData] = useState([])
    

    useEffect(() => {
        fetch('https://favqs.com/api/qotd')
        .then(response => response.json())
        .then(result => setData(result))
    }, [])

    console.log(data.quote)

    // const newdata = data[Math.floor(Math.random() * data.length)]

    return (
        <>
            <h1>Inspirational quotes</h1>
            <p>This is here incase you feel like life just is not going your way. Sometimes a quote can lift you off the ground and help you out. </p>
            <hr />
            <h2>{data.quote?.body} - {data.quote?.author}</h2>
            {/* <button><Link to="/Quotes">Quote Change</Link></button> */}
        </>
    );
}