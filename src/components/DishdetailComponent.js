import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

  
class DishDetail extends Component {

  renderComments(comments){
    
    if (comments != null){
        const commentsList = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <div className="m-2">{comment.comment}</div>
                    
                    <div className="m-3">--{comment.author}, {comment.date}</div>
                </li>
            );
        });

        return(
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">{commentsList}</ul>
            </div>
        );
    }
    else
        return <div></div>
  }


  renderDish(dish) {
      if (dish != null)
          return(
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          );
      else
          return(
              <div></div>
          );
  }

  render() {
      
      return (
        <div className="row">
            <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.selectedDish)}
            </div>
            <div  className="col-12 col-md-5 m-1">
                {/* {console.log(this.props.selectedDish.comments)} */}
                {this.renderComments(this.props.selectedDish.comments)}
            </div>
        </div>
      );
  }
}

export default DishDetail;