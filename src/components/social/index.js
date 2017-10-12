import React, { Component } from 'react';


import FacebookLogin from './FacebookLogin/'
import GoogleLogin from './GoogleLogin/'
import LinkedinLogin from './LinkedinLogin/'



class Social extends Component{
    
    render(){
        return(
            <div>
                <p>
                    <FacebookLogin />
                    <GoogleLogin />
                    <LinkedinLogin />
                </p>
                <h2>Facebook, Google, Twitter and LinkedIn login</h2>   
            </div>
        )
    }
}

export default Social;