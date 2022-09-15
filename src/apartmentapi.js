import  { React, useState, useEffect } from "react"
import { Link } from "react-router-dom";

export default function Apartments() {

    const [data, setData] = useState([])
    

    useEffect(() => {
        fetch('https://maps.googleapis.com/maps/api/place/details/output?parameters')
        .then(response => response.json())
        .then(result => setData(result))
    }, [])

    console.log(data)
    const newdata = data[Math.floor(Math.random() * data.length)]

    return (
        <>
            <h1>Inspirational quotes</h1>
            <p>This is here incase you feel like life just is not going your way. Sometimes a quote can lift you off the ground and help you out. </p>
            <p><strong>WARNING:</strong>Pressing the darkmode changes the quote</p>
            <hr />
            <h2>{newdata?.text} - {newdata?.author}</h2>
            <button><Link to="/Quotes">Quote Change</Link></button>
        </>
    );
}