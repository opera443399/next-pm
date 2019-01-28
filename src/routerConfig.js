import HeaderAsideFooterLayout from 'layouts/HeaderAsideFooterLayout';
import Home from 'pages/home/index';
import ProjectList from 'pages/projectList/index';
import ProjectDetail from 'pages/projectDetail/index';
import Help from 'pages/help/index';

const routerConfig = [
    {
        path: '/',
        exact: true,
        layout: HeaderAsideFooterLayout,
        component: Home,
    },
    {
        path: '/project/list',
        exact: true,
        layout: HeaderAsideFooterLayout,
        component: ProjectList,
    },
    {
        path: '/project/detail',
        exact: true,
        layout: HeaderAsideFooterLayout,
        component: ProjectDetail,
    },
    {
        path: '/help',
        exact: true,
        component: Help,
    },
];

export default routerConfig;