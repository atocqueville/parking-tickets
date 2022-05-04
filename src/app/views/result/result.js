import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { reset } from '../../store/form/actions';
import {
  selectDuration,
  selectPlate,
  selectZone,
} from '../../store/form/selectors';

function Result() {
  const duration = useSelector(selectDuration);
  const plate = useSelector(selectPlate);
  const zone = useSelector(selectZone);
  const dispatch = useDispatch();

  return (
    <section>
      <Link onClick={() => dispatch(reset())} to="/">
        Retour au generator
      </Link>
      <p>duration: {duration}</p>
      <p>plate: {plate}</p>
      <p>zone: {zone}</p>
    </section>
  );
}

export default Result;
