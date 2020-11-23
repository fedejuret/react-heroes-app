import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroesById } from '../../selectors/getHeroeById';

export const HeroScreen = ({history}) => {

    const { heroeId } = useParams();
    
    const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);


    if( !heroe ){
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/');
        }else{
            history.goBack();
        }
        
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = heroe;

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeftBig">
            <div className="col-4">
                <img src={`../assets/heroes/${heroeId}.jpg`} 
                className="img-thumbnail"
                alt={superhero} />
            </div>

            <div className="col-8">
                <h2>{superhero}</h2>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: {alter_ego}</b>
                    </li>

                    <li className="list-group-item">
                        <b>Publisher: {publisher}</b>
                    </li>

                    <li className="list-group-item">
                        <b>First Appearance: {first_appearance}</b>
                    </li>
                </ul>

                <div className="ml-2 mt-4">
                    <h5> Characters </h5>
                    <p>
                        {characters}
                    </p>

                    <button 
                        onClick={handleReturn}
                        className="btn btn-outline-info">
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
