import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { MenuItem, Button } from '@blueprintjs/core';
import { Select } from '@blueprintjs/select';
import { updateZone } from '../../store/form/actions';
import { ZONE_OPTIONS } from '../../models';

function ZoneSelect({ zoneName }) {
  const dispatch = useDispatch();

  const itemRenderer = (zone, { handleClick }) => {
    return <MenuItem key={zone.id} onClick={handleClick} text={zone.name} />;
  };

  return (
    <>
      <Select
        fill
        items={ZONE_OPTIONS}
        itemRenderer={itemRenderer}
        filterable={false}
        onItemSelect={(zone) => dispatch(updateZone(zone.name))}
      >
        <Button
          fill
          large
          text={zoneName || 'Select a zone'}
          rightIcon="caret-down"
        />
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
  zoneName: PropTypes.string.isRequired,
};
