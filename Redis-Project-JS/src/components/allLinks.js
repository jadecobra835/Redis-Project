import React, { Component, useState } from 'react';
import axios from 'axios';

export default class AllLinks extends Component {
    constructor() {
        super()

        this.state = {
            response: []
        }
        this.redirectURL = this.redirectURL.bind(this)
    }

    redirectURL(link) {
        fetch("http://127.0.0.1:5000/url/get-value", { 
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify({ link: link })
        }).then(response => response.json())
        .then(data => {
            // setKey(data);
            // setUrl(urlInput);
            console.log(data);
        }).catch(error => {
            console.log('Fetch request error', error)
        });
    }

    componentDidMount() {
        axios.get(
            'http://127.0.0.1:5000/url/get'
        ).then(response => {
            const Response = response.data;
            this.setState({
                response: Response     
            });
            console.log(Response);
        }).catch(error => {
            console.log('Get links request error', error)
        });  
    }; 

    
    render() {
        for (var i in this.state.response) {
            console.log(this.state.response[i]);
        }

        // for(var link in this.state.response) {
        //     return <a href={this.state.response[link]}>link</a>
        // }

        const allLinks = this.state.response.map(link => {
            this.redirectURL(link)

            return(
                <div className="link-wrapper" key={link}>
                    <a href={link}>{link}</a>
                </div>
            )
        })

        // Itterate over axiosReponse to get each variable out.
    
        return (
            <div>
                All Links
                <div className="links-wrapper">
                    {allLinks}
                </div>
            </div>
        );
    }
}