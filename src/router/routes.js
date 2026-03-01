const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'banquet', component: () => import('pages/BanquetBookingPage.vue') },
      { path: 'calendar', component: () => import('pages/CalendarPage.vue') },
      { path: 'reports', component: () => import('pages/ReportsPage.vue') },
      { path: 'menus', component: () => import('pages/MenuManagementPage.vue') },
      { path: 'template-blocks', component: () => import('pages/TemplateBlockManagementPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
