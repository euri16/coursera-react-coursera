import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


const DishDetail = (props) => {
    console.log(props.comments);
    const dish = props.dish;

    if (!dish) {
        return (
            <div></div>
        );
    }
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
}

function RenderDish(dish) {
    console.log(dish)
    return (
        <Card>
            <CardImg top src={dish.dish.image} alt={dish.dish.name} />
            <CardBody>
                <CardTitle>{dish.dish.name}</CardTitle>
                <CardText>{dish.dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments(comments) {
    console.log(comments.comments);
    if (!comments) {
        return <div></div>
    }

    const lists = comments.comments.map((comment) => {
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