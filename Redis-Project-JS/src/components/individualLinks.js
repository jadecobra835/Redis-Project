import React, { Component } from 'react';
import axios from 'axios';
 
export default class IndividualURL extends Component {
    constructor(props) {
        super(props)
        this.state = {
            key: this.props.data,
            url: ''
        }

        this.redirectURL = this.redirectURL.bind(this)
    }

    redirectURL(key) {
        axios.get(
            `http://127.0.0.1:5000/url/get-value/${key}`
        ).then(response => {
            const dataUrl = response.data.value;
            this.setState({
                url: dataUrl
            })
        }).catch(error => {
            console.log('Get links request error', error)
        });         
    }

    componentWillMount() {
        this.redirectURL(this.state.key)
    }
    
    render() {
        return(
            <div className="link-wrapper" key={this.state.key}>
                <a href={this.state.url} target='_blank'>https://localhost:3000/{this.state.key}</a>
            </div>
        );
    }
}