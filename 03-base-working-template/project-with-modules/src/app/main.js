import './styles/default.css';

import { loadData } from './modules/load-data';

loadData().then(data => {
  console.log(data);
});
