import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { selectDuration, selectPlate, selectZone} from '../../store/form/selectors';

function Result() {
  const duration = useSelector(selectDuration);
  const plate = useSelector(selectPlate);
  const zone = useSelector(selectZone);

  return (
   <section>
     <Link to='/'>Retour au generator</Link>
     <pre>
       duration: {duration}
       plate: {plate}
       zone: {zone}
     </pre>
   </section>
  );
}

export default Result;