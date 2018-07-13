import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import Moment from "moment"


const DishDetail = (props) => {
    const dish = props.dish;

    if (!dish) {
        return (
            <div></div>
        );
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {renderComment(dish.comments)}
                </div>
            </div>
        </div>
    );
}

function renderDish(dish) {
    return (
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function renderComment(comments) {
    if (!comments) {
        return <div></div>
    }

    const lists = comments.map((comment) => {
        return (
            <li key={comment.id}>
                <div>{comment.comment}</div><br />
                <div>--- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</div><br />
            </li>
        )
    });

    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {lists}
            </ul>
        </div >
    );
}

export default DishDetail