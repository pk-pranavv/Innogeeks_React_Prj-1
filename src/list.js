import React from "react";

function List ({people}){
    return (
        <React.Fragment>
            {people.map((person) => {
                const {id,name,age,image} = person;
                return (
                    <article key={id} className="doc">
                        <img className="photo" src={image} />
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                )
            })}
        </React.Fragment>
    )
}
export default List;