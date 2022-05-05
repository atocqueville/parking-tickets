import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Card, Elevation } from '@blueprintjs/core';
import { selectPlate, selectZone } from '../../store/form/selectors';
import './form.scss';
import PlateNumber from './plate-number';
import Loader from './loader';
import ZoneSelect from './zone-select';
import Duration from './duration';

function Form() {
  const navigate = useNavigate();
  const plate = useSelector(selectPlate);
  const zone = useSelector(selectZone);
  const [isLoading, setLoading] = useState(false);

  const isValid = () => {
    return plate.length >= 9 && zone;
  };

  const waitAndNavigate = () => {
    setLoading(true);
    setTimeout(() => navigate('/result'), 1500);
  };

  return (
    <section className="page">
      <Card elevation={Elevation.TWO}>
        {isLoading && <Loader />}
        {!isLoading && (
          <div className="container">
            <h2>Hello ! Welcome to Lille !</h2>
            <div className="input">
              <PlateNumber />
            </div>
            <div className="input">
              <ZoneSelect zoneName={zone} />
            </div>
            <Duration />
            <div className="action">
              <Button
                onClick={waitAndNavigate}
                disabled={!isValid()}
                large
                intent="success"
              >
                Validate
              </Button>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}

export default Form;

Form.propTypes = {};
