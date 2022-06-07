import React from 'react'

const Card = ({recipe}) => {
console.log(recipe)
return (
    <div className="card-parent">
        {recipe.title}
    </div>
)

}

export default Card;