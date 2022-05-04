import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectDuration,
  selectPlate,
  selectZone,
} from '../../store/form/selectors';

function Result() {
  const duration = useSelector(selectDuration);
  const plate = useSelector(selectPlate);
  const zone = useSelector(selectZone);

  return (
    <section>
      <Link to="/">Retour au generator</Link>
      <p>duration: {duration}</p>
      <p>plate: {plate}</p>
      <p>zone: {zone}</p>
    </section>
  );
}

export default Result;
