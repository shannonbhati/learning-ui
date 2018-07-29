import React from 'react';
import ReactDOM from 'react-dom';

import {Weather} from './weather-app/Weather';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Weather />, document.getElementById('root'));
registerServiceWorker();
