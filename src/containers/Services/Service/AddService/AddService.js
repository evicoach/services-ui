import React, { Component } from 'react';

import axios from 'axios';
import { CLOUDURL as url, CLOUDPRESET as preset } from '../../../../config/config'
import classes from './AddService.module.css';


class AddService extends Component {
    state = {
        title: '',
        description: '',
        imageUrl: '',
    }

    onTitleChangeHandler = (event) => {
        this.setState({ title: event.target.value });
    }
    onDescriptionChangeHandler = (event) => {
        this.setState({ description: event.target.value });;
    }

    onFileChangeHandler = (event) => {
        event.preventDefault();
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

    addServiceHandler = () => {

    }
    render() {
        return (
            <form action="" method="post" onSubmit={this.addServiceHandler}>
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
                    onChange={this.onFileChangeHandler} />
                <input className={classes.AddServiceInput}
                    name="serviceimage"
                    type="file"
                    onChange={this.onFileChangeHandler} />

                <input type="submit" value="Add Service" />
            </form>
        );
    }
}
export default AddService;