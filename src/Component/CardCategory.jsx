import React from 'react';
import {Link} from "react-router-dom";

const CardCategory = ({img,text}) => {
    return (
        <Link to={""}>
            <div className="category__card">
                <h3 className="category__card-title">
                    {text}
                </h3>
                <img className="category__card-img" src={img} alt="asfasg"/>
            </div>
        </Link>
    );
};

export default CardCategory;