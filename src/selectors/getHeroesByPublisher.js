const { heroes } = require("../data/heroes");

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisers = ['DC Comics', 'Marvel Comics'];

    if( !validPublisers.includes(publisher) ){
        throw new Error(`Publisher ${publisher} not found`);
    }

    return heroes.filter(hero => hero.publisher === publisher);
}