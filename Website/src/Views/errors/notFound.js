import React, { Component } from 'react'
import './notfound.css'


class notFound extends Component {
    render(){
        return(
            <div className="container d-flex justify-content-center" style={{backgroundColor: 'white'}}>
                <div className="flex-row">
                    <div className='d-flex justify-content-center'>
                    <img src="https://dummyimage.com/200x200/fff/aaa" alt="..." class="img-thumbnail" style={{width:'200px', height:'200px'}}/>
                    </div>
                    <div className="flex-row">
                        <h1 class="display-4">This page does not exist</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default notFound