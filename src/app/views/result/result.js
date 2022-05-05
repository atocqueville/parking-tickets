import { useDispatch, useSelector } from 'react-redux';
import { Card, Elevation } from '@blueprintjs/core';
import { Link } from 'react-router-dom';
import { reset } from '../../store/form/actions';
import {
  selectDuration,
  selectPlate,
  selectZone,
} from '../../store/form/selectors';
import { computePrice } from '../../utils';
import './result.scss';

function Result() {
  const duration = useSelector(selectDuration);
  const plate = useSelector(selectPlate);
  const zone = useSelector(selectZone);
  const dispatch = useDispatch();

  const price = computePrice(duration, zone);

  return (
    <section className="page">
      <Card elevation={Elevation.TWO}>
        <Link onClick={() => dispatch(reset())} to="/">
          Retour au generator
        </Link>
        <p>duration: {duration}</p>
        <p>plate: {plate}</p>
        <p>zone: {zone}</p>
        <p>price: {price}</p>
      </Card>
    </section>
  );
}

export default Result;
