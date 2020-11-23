import React, { useMemo } from 'react';
import queryString from 'query-string'

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {


    const location = useLocation();

    // extraer el query y si no hay nada asignarle un texto vacio
    // por defecto asigna "undefined"
    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q])


    const handleSearch = (event) => {
        event.preventDefault();

        if (searchText !== '') {

            history.push(`?q=${searchText}`);
        }

    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-12 col-md-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Buca tu heroe"
                            className="form-control mt-3"
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <button
                            type="submit"
                            className="btn btn-block btn-outline-info mt-3"
                        >
                            Buscar...
                        </button>
                    </form>
                </div>

                <div className="col-12 col-md-7">
                    <h4>
                        Resultados
                    </h4>
                    <hr />

                    {
                        (q === '')
                        &&
                        <div className="alert alert-info animate__animated animate__fadeIn">
                            Busca un heroe
                            </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger animate__animated animate__fadeIn">
                            No encontramos a "{q}"
                            </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard

                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }


                </div>
            </div>
        </div>
    )
}
