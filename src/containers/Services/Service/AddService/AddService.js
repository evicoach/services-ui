import React, { Component } from 'react';

import axios from 'axios';
import Card from '../../../../components/UI/Card/Card';
import { CLOUDURL as url, CLOUDPRESET as preset } from '../../../../config/config'
import Input from "../../../../components/UI/Input/Input";
import classes from './AddService.module.css';


class AddService extends Component {
    state = {
        title: '',
        description: '',
        imageUrl: '',
    }
    // ref to the file upload input button
    fileInputRef = React.createRef();

    onTitleChangeHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    onDescriptionChangeHandler = (event) => {
        this.setState({ description: event.target.value });;
    }

    onFileChangeHandler = (event) => {
        // event.preventDefault();
        let file = event.target.files[0];

        let formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', preset);
        axios({
            url: url,
            method: 'POST',
            headers: {
                "Content-Type": "application/x-wwww-urlencoded"
            },
            data: formData
        })
            .then(response => {
                console.log(response.data);
                this.setState({ imageUrl: response.data.secureurl })
            })
            .catch(err => {
                console.log('something went wrong');
            });
    }

    uploadClick = () => {
        console.log('file button clicked');
    }

    addServiceHandler = () => {

    }
    onClickSimulator = (event) => {
        event.preventDefault();
        const uploadNode = this.fileInputRef.current;
        uploadNode.click();
    }
    render() {
        return (

            <Card className={classes.AddService}>
                <form
                    className={classes.AddSrvice}
                    onSubmit={this.addServiceHandler}>
                    <input className={classes.AddServiceInput}
                        name="title"
                        type="text" placeholder="Service Name"
                        onChange={this.onTitleChangeHandler} />
                    <input className={classes.AddServiceInput}
                        name="description"
                        type="text" placeholder="Servce Description"
                        onChange={this.onDescriptionChangeHandler} />
                    <input className={classes.AddServiceInput}
                        name="price"
                        type="number"
                        placeholder="Basic charge"
                        onChange={this.onPriceChangeHandler} />
                    

                    <input
                        onClick={this.uploadClick}
                        ref={this.fileInputRef}
                        name="serviceimage"
                        type="file"
                        onChange={this.onFileChangeHandler}
                    />  
                    
                    <button
                        className={classes.FileSimulator}
                        onClick={this.onClickSimulator}
                    >Choose Image</button>

                    <input className={classes.Submit}
                        type="submit" value="Add Service" />
                </form>
            </Card>
        );
    }
}
export default AddService;