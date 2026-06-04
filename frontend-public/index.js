import App from './src/App.jsx';
import ErrorPage from './src/pages/Error.jsx';
import LessonsPage from './src/pages/lessons/LessonsPage.jsx';
import TeachersPage from './src/pages/teachers/TeachersPage.jsx';
import { initWood } from './src/core/initWood.js';
import GroupsPage from './src/pages/groups/GroupsPage.jsx';

const routes = [
  { path: '/public', component: App, parentSelector: '#app' },
  { path: '/public/teachers', component: TeachersPage, parentSelector: '#app' },
  { path: '/public/groups', component: GroupsPage, parentSelector: '#app' },
  { path: '/public/teachers/:id/lessons', component: LessonsPage, parentSelector: '#app' },
  { path: '/public/groups/:id/lessons', component: LessonsPage, parentSelector: '#app' },
];

const errorComponent = { component: ErrorPage, parentSelector: '#app' };

initWood(App, routes, errorComponent);
