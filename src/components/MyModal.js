import React from 'react';
import {Modal} from 'react-bootstrap';
import Button from './Button';
import 'bootstrap/dist/css/bootstrap.css';

export default class MyModal extends React.Component{
    
    modalbody(){
        return (
            <div className="row">
            {this.props.allPartNumbers.map(k => 
                <div className="col-12 col-sm-6">    
                    <div className="form-check form-check-inline">   
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label" key={k}>{k}</label>
                    </div>
                </div> 
            )}
            </div>
        )
    }
    
    render(){
       // console.log("inmodal =="+this.props.allPartNumbers)
        return(
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.modalbody()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose} text="Submit" />
                    <Button variant="primary" onClick={this.props.handleClose} text="Reset" />
                </Modal.Footer>
            </Modal>
        )
    }
}