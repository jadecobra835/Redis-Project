import React, { Component } from 'react';
import axios from 'axios';

import IndividualURL from './individualLinks';

export default class AllLinks extends Component {
    constructor() {
        super()

        this.state = {
            shortenedURL: []
        }
    }

    componentDidMount() {
        axios.get(
            'http://127.0.0.1:5000/url/get'
        ).then(response => {
            const Response = response.data;
            this.setState({
                shortenedURL: Response     
            });
        }).catch(error => {
            console.log('Get links request error', error)
        });
    }; 
    
    render() {
        // Itterate over axiosReponse to get each variable out.
        const allLinks = this.state.shortenedURL.map(link => {
            return(
                <IndividualURL data={link} key={link}/>
            )
        });
    
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