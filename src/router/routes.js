const routes = [
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true }, // Protect this route and its children
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'banquet', component: () => import('pages/BanquetBookingPage.vue') },
      { path: 'calendar', component: () => import('pages/CalendarPage.vue') },
      { path: 'reports', component: () => import('pages/ReportsPage.vue') },
      {
        path: 'menus',
        component: () => import('pages/MenuManagementPage.vue'),
        meta: { requiredRole: 'admin' }, // Only admin/manager can access
      },
      {
        path: 'template-blocks',
        component: () => import('pages/TemplateBlockManagementPage.vue'),
        meta: { requiredRole: 'admin' }, // Only admin/manager can access
      },
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
