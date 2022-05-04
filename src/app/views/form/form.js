import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { selectPlate, selectZone } from '../../store/form/selectors';
import './form.scss';
import PlateNumber from './plate-number';
import ZoneSelect from './zone-select';
import Duration from './duration';

function Form() {
  const plate = useSelector(selectPlate);
  const zone = useSelector(selectZone);

  const isValid = () => {
    return plate.length >= 9 && zone;
  };

  return (
    <section className="form">
      <Card elevation={Elevation.TWO}>
        <div className="container">
          <h2>Hello ! Welcome to Lille !</h2>
          <div className="input">
            <PlateNumber />
          </div>
          <div className="input">
            <ZoneSelect zone={zone} />
          </div>
          <Duration />
          <div className="action">
            <Link to="/result">
              <Button disabled={!isValid()} large intent="success">
                Validate
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
}

export default Form;

Form.propTypes = {};
