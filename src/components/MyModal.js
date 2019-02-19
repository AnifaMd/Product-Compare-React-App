import React from 'react';
import {Modal} from 'react-bootstrap';
import Button from './Button';

export default class MyModal extends React.Component{
    
    render(){
        console.log("inmodal =="+this.props.allPartNumbers)
        return(
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose} text="Submit" />
                    <Button variant="primary" onClick={this.props.handleClose} text="Reset" />
                </Modal.Footer>
            </Modal>
        )
    }
}