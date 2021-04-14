import React from 'react';
const Rating = (props) => {
    return (
        <div>
            <div className="rating">                      
                <span>
                    <i className="fa fa-star"></i>
                            </span>
                            <span>
                                <i className="fa fa-star"></i>
                            </span>
                            <span>
                            <i className={(props.num=="0")?"fa fa-star":(props.num=="0.5")?"fa fa-star-half":"fa fa-star-o"}></i>
                            </span>
                            <span>
                                <i className={(props.num=="1")?"fa fa-star":(props.num=="1.5")?"fa fa-star-half-o":"fa fa-star"}></i>
                            </span>
                            <span>
                            <i className={(props.num=="3")?"fa fa-star":(props.num=="3.5")?"fa fa-star-half-o":"fa fa-star"}></i>
                            </span>
            </div>
        </div>
    );
}
pk