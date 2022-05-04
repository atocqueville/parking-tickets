import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MenuItem, Button } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { updateZone } from '../../store/form/actions';

const zoneOptions = [
  { name: 'Vauban', value: 1 },
  { name: 'Vieux Lille', value: 2 },
  { name: 'République', value: 3 },
];

function ZoneSelect({ zone }) {
  const dispatch = useDispatch();

  const itemRenderer = (film, { handleClick }) => {
    return <MenuItem key={film.value} onClick={handleClick} text={film.name} />;
  };

  return (
    <>
      <Select
        fill
        items={zoneOptions}
        itemRenderer={itemRenderer}
        filterable={false}
        onItemSelect={(zone) => dispatch(updateZone(zone.name))}
      >
        <Button fill text={zone || 'Select a zone'} rightIcon="caret-down" />
      </Select>

      {/*
        Exemple Use of native HTML select tag
        <select
          name="zone"
          id="zone-select"
          onChange={(event) => dispatch(updateZone(event.target.value))}
        >
          {zoneOptions.map((zone) => (
            <option key={zone.value} value={zone.name}>
              {zone.name}
            </option>
          ))}
        </select>
      */}
    </>
  );
}

export default ZoneSelect;

ZoneSelect.propTypes = {
  zone: PropTypes.string.isRequired,
};
