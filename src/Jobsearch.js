import React, { useEffect, useState } from "react";

export default function Search() {

    const [data, setData] = useState([])
    

    useEffect(() => {
        fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=4e16c244&app_key=2453fbaf0631f03cb9ec9dd46de45d5e&what=felony%20friendly')
        .then(response => response.json())
        .then(result => setData(result))
    }, [])
    console.log(data.results)

    return (
        <>
             <h1>Job Search</h1>
             <p>This is the part where jobs are listed hit the search button and a list of jobs will pop up. Unfortunatly the api I used had some copies and the description trailed off but it will be fixed in the near future. I also plan on using an input text to filter by location by taking the users input. I took multiple items from the object to display them directly. I chose these because I believed these were the most important pieces of information.</p>
             <hr />
            {data.results?.map(item => <p id = 'quote' key = {item.id}> { item.title } : { item.description } | More information can be found at <a href={item.redirect_url} className='Jobs'>{ item.redirect_url }</a></p>)}
        </>
    );
}