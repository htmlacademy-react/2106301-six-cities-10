import { Navigate } from 'react-router-dom';
import { AutorizationStatus } from '../../consts';

type PrivateRouteProps = {
  autorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {autorizationStatus, children} = props;

  return(
    autorizationStatus === AutorizationStatus.Auth ? children : <Navigate to='/login'/>
  );
}

export default PrivateRoute;
