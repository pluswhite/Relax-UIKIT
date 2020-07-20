import '!style-loader!css-loader!sass-loader!../src/index.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas, faBell } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);
