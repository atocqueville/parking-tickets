import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@blueprintjs/core';
import { decrement, increment } from '../../store/form/actions';
import { selectDuration } from '../../store/form/selectors';
import { formatCount } from './utils';

function Duration() {
  const duration = useSelector(selectDuration);
  const dispatch = useDispatch();

  return (
    <div className="duration-container">
      <Button
        aria-label="Decrement duration"
        icon="minus"
        large
        intent="primary"
        disabled={duration <= 15}
        onClick={() => dispatch(decrement())}
      />
      <span className="counter">{formatCount(duration)}</span>
      <Button
        aria-label="Increment duration"
        icon="plus"
        large
        intent="primary"
        disabled={duration >= 720}
        onClick={() => dispatch(increment())}
      />
    </div>
  );
}

export default Duration;

Duration.propTypes = {};
