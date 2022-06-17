import React from "react";
import spiderWebs from "./spiderWebs.json";

function Card(props) {

    let randomNumber = Math.round(Math.random()*(100 - 0) + 0);
    let featText = "";

    if (props.featured === "yes") {
        featText = "Featured";
    }
    
    return (
        <div className="card m-3 p-3" style={{width: "16rem"}} id={props.id}>
            <div className="spider-web">
                <img src={spiderWebs[Math.floor(Math.random() * spiderWebs.length)]} height="200px" width="200px" style={{marginLeft:randomNumber}} alt=""></img>
            </div>
            <a className="card-img-frame thumbnail" data-click={"Try" + props.name.replace(/\s/g, '')} href={props.view} target="_blank" rel="noopener noreferrer">
                <img src={props.img} className="card-img-top" alt={props.name}></img>
            </a>
            <div className="card-title mt-1 mb-0">
                <h3>{props.name}</h3>
            </div>
            <div className="card-body mt-0 pt-0">
                <p className="card-sub-text"><strong>Price: </strong>${props.price}</p>
                <p className="featured">{featText}<i className="fas fa-cloud-moon"></i></p>
            </div>
            <div className="row btn-group">
                <a data-click={"View" + props.name.replace(/\s/g, '')} href={props.view} className="btn card-btn mr-1 ml-1" target="_blank" rel="noopener noreferrer">Details</a>
                <a data-click={"Try" + props.name.replace(/\s/g, '')} href={props.buy} className="btn card-btn ml-1 mr-1" target="_blank" rel="noopener noreferrer">Buy Now</a>
            </div>
        </div>
    )
}

export default Card;