/**
 * Asynchronously loads the component for Login page
 */
import loadable from '../../utils/loadable';
export default loadable(() => import("./index" /* webpackChunkName: "Notifications" */));