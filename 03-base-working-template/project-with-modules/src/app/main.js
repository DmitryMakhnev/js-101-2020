import './styles/default.scss';

import { loadData } from './modules/load-data';

loadData().then(data => {
  console.log(data);
});
