import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  InputGroup,
  MenuItem,
  Button,
  Card,
  Elevation,
} from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import './form.scss';
import {
  decrement,
  increment,
  updatePlate,
  updateZone,
} from '../../store/form/actions';
import { selectDuration, selectZone } from '../../store/form/selectors';
import { formatCount } from './utils';

const zoneOptions = [
  { name: 'Vauban', value: 1 },
  { name: 'Vieux Lille', value: 2 },
  { name: 'République', value: 3 },
];

function Form() {
  const duration = useSelector(selectDuration);
  const zone = useSelector(selectZone);
  const dispatch = useDispatch();

  const itemRenderer = (film, { handleClick }) => {
    return <MenuItem key={film.value} onClick={handleClick} text={film.name} />;
  };

  return (
    <section className="form">
      <Card elevation={Elevation.TWO}>
        <h5>
          <a href="#">Card heading</a>
        </h5>
        <p>Card content</p>
        <Button>Submit</Button>
      </Card>
      <div style={{ gridArea: 'plate' }}>
        <InputGroup
          large
          onChange={(event) => dispatch(updatePlate(event.target.value))}
          placeholder="Enter your password..."
        />
      </div>
      <div style={{ gridArea: 'zone' }}>
        <Select
          items={zoneOptions}
          itemRenderer={itemRenderer}
          filterable={false}
          onItemSelect={(zone) => dispatch(updateZone(zone.name))}
        >
          <Button text={zone || 'Select a zone'} rightIcon="caret-down" />
        </Select>

        {/* Exemple Use of native HTML select tag
          <select
            name="zone"
            id="zone-select"
            onChange={(event) => dispatch(updateZone(event.target.value))}
          >
            {zoneOptions.map((zone) => (
              <option key={zone} value={zone}>
                {zone}
              </option>
            ))}
          </select> */}
      </div>
      <div className="duration-container">
        <span className="counter">{formatCount(duration)}</span>
        <div className="buttons">
          <button
            disabled={duration <= 15}
            className="button"
            aria-label="Decrement duration"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
          <button
            disabled={duration >= 720}
            className="button"
            aria-label="Increment duration"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
        </div>
      </div>
      <div style={{ gridArea: 'action' }}>
        <Link to="/result">
          <button type="button">Validate</button>
        </Link>
      </div>
    </section>
  );
}

export default Form;
