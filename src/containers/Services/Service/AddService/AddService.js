import React, { Component } from 'react';

import axios from 'axios';
import Card from '../../../../components/UI/Card/Card';
import { CLOUDURL as url, CLOUDPRESET as preset } from '../../../../config/config'
// import Input from "../../../../components/UI/Input/Input";
import classes from './AddService.module.css';


class AddService extends Component {
    state = {
        title: '',
        description: '',
        basePrice: '',
        imageUrl: ''
    }

    // ref to the file upload input button
    fileInputRef = React.createRef();

    onTitleChangeHandler = (event) => {
        event.persist();
        setTimeout(() => {
            this.setState({ title: event.target.value });
            console.log(this.state.title)
        }, 1000);
    }
    onDescriptionChangeHandler = (event) => {
        event.persist();
        setTimeout(() => {
            this.setState({ description: event.target.value });
            console.log(this.state.description)
        }, 1000);
    }

    onPriceChangeHandler = (event) => {
        event.persist();
        setTimeout(() => {
            this.setState({ basePrice: event.target.value });
            console.log(this.state.price);
        }, 1000);
    }

    onFileChangeHandler = (event) => {
        console.log('[onChangeFileHandler] called...')
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
                this.setState({ imageUrl: response.data.secure_url });
                console.log(this.state.imageUrl)
            })
            .catch(err => {
                console.log('something went wrong');
            });
    }



    addServiceHandler = (event) => {
        event.preventDefault();
        // get the data object from the state
        let data = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.basePrice,
            imageUrl: this.state.imageUrl
        }

        console.log(data);

        // data = JSON.stringify(data);
        axios.post('https://services-fix-api.herokuapp.com/services', data)
            // axios.post('http://localhost:5000/services', data)
            .then(response => console.log("Response from backend", response))
            .catch(err => console.log(err));
    }


    // Simulate the click event for the file input field
    onClickSimulator = (event) => {
        event.preventDefault();
        const uploadNode = this.fileInputRef.current;
        uploadNode.click();
    }

    // for testing if the simulated click event worked
    uploadClick = () => {
        console.log('file button clicked');
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
                    >Choose Image File</button>

                    <input className={classes.Submit}
                        type="submit" value="Add Service" />
                </form>
            </Card>
        );
    }
}
export default AddService;