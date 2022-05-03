import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import './form.scss'
import {
  decrement,
  increment,
  updatePlate,
  updateZone
} from '../../store/form/actions';
import { selectDuration} from '../../store/form/selectors';
import { formatCount } from './utils';

const zoneOptions = [ 'Vauban', 'Vieux Lille', 'République' ]
 
function Form() {
  const duration = useSelector(selectDuration);
  const dispatch = useDispatch();

  return (
    <section className='form'>
      <div style={{gridArea: 'plate'}}>
        <input type="text" className="bp4-input" placeholder="Plate number" onChange={(event) => dispatch(updatePlate(event.target.value))} />
      </div>
      <div style={{gridArea: 'zone'}}>
        <div className='zone-select'>
          <select name="zone" id="zone-select" onChange={(event) => dispatch(updateZone(event.target.value))}>
              {zoneOptions.map((zone) => <option key={zone} value={zone}>{zone}</option>)}
          </select>
        </div>
      </div>
      <div className="duration-container">
        <span className='counter'>{formatCount(duration)}</span>
        <div className='buttons'>
          <button
            disabled={duration <= 15}
            className='button'
            aria-label="Decrement duration"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button
            disabled={duration >= 720}
            className='button'
            aria-label="Increment duration"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
      <div style={{gridArea: 'action'}}>
      <Link to="/result">
        <button type="button">
            Validate
        </button>
      </Link>
     
      </div>
    </section>
  );
}

export default Form;
