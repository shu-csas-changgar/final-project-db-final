import React, { Component }from 'react'

class Popup extends Component {

    /**
     * Dismisses the Modal
     */
    dismissModal = ()=>{
        this.props.toggle()
    }
    
    render() {
        return (
            <div className={`modal fade WelcomeModal ${this.props.showModal ? 'show' : ''}`} style={{display: `${this.props.showModal ? 'block' : 'none'}`, backgroundColor: 'rgb(0,0,0,.8)'}} id="WelcomeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.header}</h5>
                        <button type="button" className="close" onClick={this.dismissModal} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>                             
                    </div>
                    <div className="modal-body">
                    <p className="text-center"> {this.props.body}</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Popup