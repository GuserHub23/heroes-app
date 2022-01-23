import { useMemo } from 'react';
import { getHeroByPublisher } from '../../helpers/getHeroByPublisher'
import HeroCard from './HeroCard';


const HeroList = ({ publisher }) => {

  const heroes = useMemo(() => getHeroByPublisher(publisher), [ publisher ])  

  return (

      <div className="row col">
       <div className="row rows-cols-1 row-cols-md-4 row-cols-sm-3 g-3">        
           {
              heroes.map( hero => (
                  <HeroCard key={hero.id} {...hero} />
              ))
            }
        </div>
      </div>
  );};

export default HeroList;
