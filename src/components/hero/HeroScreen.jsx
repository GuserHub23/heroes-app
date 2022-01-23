import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../helpers/getHeroById";

const heroImages = require.context('../../assets', true)

const HeroScreen = () => {

    const { heroeId } = useParams();

    const navigate = useNavigate();
    
    const hero = useMemo(() => getHeroById(heroeId), [ heroeId ]);

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;

    // const imagePath = `/assets/${ id }.jpg`;

    const handleReturn = function() {
        navigate(-1)
    }

    if (!hero) {
       return <Navigate to='/'/>
    }

    return (
        <div className="row mt-5 d-flex align-center hero--screen">
            
                <img 
                    src={ heroImages(`./${id}.jpg`) } 
                    alt={superhero}
                    className="col-4 img-thumbnail"
                />
            <div className="col-8">
                <h3>{ superhero }</h3>

                <ul className="list-group list-group-flush">

                    <li className="list-group-item">
                        <b>Alter ego:</b> { alter_ego }
                    </li>

                    <li className="list-group-item">
                        <b>First appearance:</b> { first_appearance }
                    </li>

                    <li className="list-group-item">
                        <b>Publisher:</b> { publisher }
                    </li>

                </ul>

                <h5 className="mt-3">Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-danger"
                    onClick={handleReturn}
                >
                    Restart
                </button>
            </div>
        </div>
    )
}

export default HeroScreen
