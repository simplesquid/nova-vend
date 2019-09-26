Nova.booting((Vue, router, store) => {
    router.addRoutes([
        {
            name: 'vend-api',
            path: '/vend-api',
            component: require('./components/Tool'),
        },
    ])
})
