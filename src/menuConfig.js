const headerMenuConfig = [
];

const asideMenuConfig = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        icon: 'home',
    },
    {
        name: 'Resource',
        path: '/resource',
        icon: 'smile',
    },
    {
        name: 'Project',
        path: '/project',
        icon: 'home',
        children: [
            {
                name: 'list',
                path: '/project/list',
            },
            {
                name: 'detail',
                path: '/project/detail',
            },
        ],
    },
    {
        name: 'Help',
        path: '/help',
        icon: 'help',
    }
];

export { headerMenuConfig, asideMenuConfig };