import React from 'react';
import { Link } from 'react-router-dom';

const heroImages = require.context('../../assets', true)

const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
 
  // const imagePath = `/assets/${id}.jpg`

  return (


      <div className="d-flex flex-wrap">
        <div className="card">

          <div className="row no-gutters">

            <img src={ heroImages(`./${id}.jpg`) } className="card-img" alt={ superhero } />

            <div className="col-md-12">
              <div className="card-body d-flex justify-content-between flex-column">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{alter_ego}</p>

                <p className="card-text">
                  first appearance:  <small className="text-muted">{ first_appearance }</small>
                </p>
                
                <Link to={`/hero/${id}`} className="text-decoration-none">See more...</Link>

              </div>
            </div>

          </div>
          
        </div>
      </div>

  )
};

export default HeroCard;
