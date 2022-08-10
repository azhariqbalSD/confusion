import React  from 'react';
import { Card , CardText ,CardTitle ,CardBody ,CardImg } from 'reactstrap';

    function RenderDish({dish}){
        if(dish != null)
        
        {
            
            return(
                
            <div className="col-12 col-md-5 m-2">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>
                        <h1>{dish.name} </h1>
                        </CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            );
        }   
        else
        {
            return(
                <div>
                   
                </div>
            );
        }
    }

    function RenderComments({comments}) {
        if(comments == null) {
            return(
                <div>
                </div>
            )
        }
        else
        {
            const comment = comments.map(comment =>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {new Intl.DateTimeFormat('en-US' ,{ year:'numeric',month:'long',day:'2-digit',}).format(new Date(comment.date))}</p>
                    </li>
                )
            })
            return(
                <div className="col-12 col-md-5 m-2">
                    <h4> Comments </h4>
                    <ul className="list-unstyled">{comment}</ul>
                </div>
            )
        }
    }

    const DishDetail = (props) =>  {
        
        if(props.dish == null) {
            return(
                <div>

                </div>
            )
        } else {
           
            return(
                <RenderDish dish={props.dish}> </RenderDish>,
                <RenderComments comments={props.dish.comments}> </RenderComments>
            );
        }
       
    }

export default DishDetail;