import React, { useState }from 'react';


export default function() {
    const [urlInput, setUrlInput] = useState("");
    const [url, setUrl] = useState("");
    const [key, setKey] = useState("");

    function handleSubmit() {
        fetch("http://127.0.0.1:5000/url/add", { 
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({ url: urlInput })
        }).then(response => response.json())
        .then(data => {
            setKey(data);
            setUrl(urlInput);
        }).catch(error => {
            console.log('Fetch request error', error)
        });
    }

    return (
        <div>
            <input 
                type="text" 
                value={urlInput} 
                onChange={event => setUrlInput(event.target.value)}
            />
            <button onClick={handleSubmit} id="btn">Shorten URL</button>
            {key ? <a href={url} target='_blank'>https://localhost:3000/{key}</a> : null }
        </div>
    );
}