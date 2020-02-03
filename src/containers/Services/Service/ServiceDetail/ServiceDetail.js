import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from '../../../../components/UI/Card/Card';
import classes from './ServiceDetail.module.css';
import * as actions from '../../../../stores/actions/index';
import { withRouter } from "react-router-dom";

class ServiceDetail extends Component {

    componentDidMount() {
        this.setState({ serviceId: this.props.location.state.serviceId });
        console.log('this is the service id: ', this.props.location.state.serviceId);
        this.props.fetchServiceDetail(this.props.location.state.serviceId);
    }

    render() {
        
        let productImages = this.props.serviceImages.map(servicesImage => {
            return (
                <Card>
                    <img src={servicesImage} width="100" height="100" alt="" />
                </Card>
            )
        });
        
        return (
            <Card className={classes.ServiceDetail}>
                <h3>{this.props.serviceDetail.title}</h3>
                <section className={classes.ImagesSection}>{productImages}</section>
                <h3>{this.props.serviceDetail.price}</h3>
                <section>{this.props.serviceDetail.description}</section>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        serviceImages: state.service.imageUrls,
        serviceDetail: state.service
    }
}
const mapDispatchToProps = dispatch => {
    return {
        // dispatch getSingleServiceDetials action
        fetchServiceDetail: (serviceId) => dispatch(actions.getSingleService(serviceId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ServiceDetail));