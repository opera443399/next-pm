const headerMenuConfig = [
];

const asideMenuConfig = [
    {
        name: 'Dashboard',
        path: '/dashboard',
        key: 'dashboard',
        icon: 'smile',
    },
    {
        name: 'Resources',
        path: '/resources',
        key: 'resources',
        icon: 'smile',
    },
    {
        name: 'Projects',
        path: '/projects',
        key: 'projects',
        icon: 'smile',
        children: [
            {
                name: 'project list',
                path: '/project/list',
                key: 'project-list',
                icon: 'smile',
            },
            {
                name: 'project detail',
                path: '/project/detail',
                key: 'project-detail',
                icon: 'smile',
            },
        ],
    },
    {
        name: 'Help',
        path: '/help',
        key: 'help',
        icon: 'help',
    }
];

export { headerMenuConfig, asideMenuConfig };