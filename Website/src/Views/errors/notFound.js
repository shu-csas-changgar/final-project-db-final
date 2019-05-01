import React, { Component } from 'react'
import './notfound.css'
import Thanos from '../../Images/404_thanos.jpg'


class notFound extends Component {
    render(){
        return(
            <div className="container justify-content-center" style={{backgroundColor: 'white'}}>
                <div className="row justify-content-center">
                    <div className='flex-col m-1'>
                    <img src={Thanos} alt="..." className="img-thumbnail" style={{width:'300px', height:'250px'}}/>
                    </div>
                    <div className="col m-1">
                        <div className="d-flex justify-content-center">
                            <h1 className="display-4">This page does not exist</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default notFound