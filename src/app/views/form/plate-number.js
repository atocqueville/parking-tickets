import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import { InputGroup } from '@blueprintjs/core';
import { updatePlate } from '../../store/form/actions';

function PlateNumber() {
  const dispatch = useDispatch();

  const toUpperCase = (newState) => ({
    ...newState,
    value: newState?.value?.toUpperCase(),
  });

  return (
    <InputMask
      mask="**-***-**"
      maskChar={null}
      beforeMaskedValueChange={toUpperCase}
      onChange={(event) => dispatch(updatePlate(event.target.value))}
    >
      {(inputProps) => (
        <InputGroup
          {...inputProps}
          large
          placeholder="Enter your license plate"
        />
      )}
    </InputMask>
  );
}

export default PlateNumber;
