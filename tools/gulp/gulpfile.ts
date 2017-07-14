import {createPackageBuildTasks} from 'angular-wechat-build-tools';

// Create gulp tasks to build the different packages in the project.

createPackageBuildTasks('angular-wechat');

import './tasks/clean';
import './tasks/development';
