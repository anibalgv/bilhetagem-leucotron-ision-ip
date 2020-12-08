import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '/',
      name: 'import',
      component: require('@/pages/tickets/import').default
    },
    {
      path: '/tickets/report-today',
      name: 'report-today',
      component: require('@/pages/tickets/report-today').default
    },
    {
      path: '/tickets/reports-month',
      name: 'reports-month',
      component: require('@/pages/tickets/reports-month').default
    },
    {
      path: '/tickets/reports-spent-time',
      name: 'tickets-reports-spent-time',
      component: require('@/views/tickets/tickets-report-spent-time').default
    },
    {
      path: '/configurations',
      name: 'configurations',
      component: require('@/pages/configurations').default
    },
    {
      path: '/dashboards/geral',
      name: 'dashboards-geral',
      component: require('@/views/dashboards/dashboard-geral').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
