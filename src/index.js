import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import 'font-awesome/css/font-awesome.min.css';

const routes = makeMainRoutes();
ReactDOM.render(
  routes,
  document.getElementById('root')
);
