import React from 'react';
import Card from '../../../../components/UI/Card/Card';
import classes from './ServiceDetail.module.css';

const serviceDetail = (props) => {
    return (
        <Card className={classes.ServiceDetail}>
            {/* title
            images,
            price,
            description */}
            <h3>{props.title}</h3>
            
        </Card>
    );
}

export default serviceDetail;