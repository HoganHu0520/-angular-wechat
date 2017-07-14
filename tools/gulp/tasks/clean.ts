import {task} from 'gulp';
import {cleanTask} from '../util/task_helpers';
import {buildConfig} from 'angular-wechat-build-tools';


/** Deletes the dist/ directory. */
task('clean', cleanTask(buildConfig.outputDir));
