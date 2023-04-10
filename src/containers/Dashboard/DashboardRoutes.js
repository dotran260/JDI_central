import React, { Suspense, lazy } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Loader from '@iso/components/utility/loader';

const routes = [
  {
    path: '',
    component: lazy(() => import('@iso/containers/Widgets/Widgets')),
    exact: true,
  },
  {
    path: 'opportunities/match/:id/match_more',
    component: lazy(() => import('@iso/containers/MatchMore/View')),
    exact: true,
  },
  {
    path: 'opportunities/job/:id',
    component: lazy(() => import('@iso/containers/DetailJob/DetailJob')),
    exact: true,
  },
  {
    path: 'opportunities/match/:id',
    component: lazy(() => import('@iso/containers/DetailJob/View')),
    exact: true,
  },
  {
    path: 'opportunities',
    component: lazy(() => import('@iso/containers/Opportunities/View')),
    exact: true,
  },
  {
    path: '/*',
    component: lazy(() => import('@iso/containers/Opportunities/View')),
    exact: false,
  },
  {
    path: 'companies',
    component: lazy(() => import('@iso/containers/Companies/View')),
    exact: true,
  },
  {
    path: 'candidates',
    component: lazy(() => import('@iso/components/Candidate/Candidate')),
  },
  {
    path: 'freelancers/:userId',
    component: lazy(() => import('@iso/components/Candidate/CandidateProfile')),
  },
  {
    path: 'tasks/:id',
    component: lazy(() => import('@iso/containers/DetailTask/View')),
    exact: true,
  },
  {
    path: 'tasks',
    component: lazy(() => import('@iso/containers/Tasks/View')),
    exact: true,
  },

  {
    path: 'blank_page',
    component: lazy(() => import('@iso/containers/BlankPage')),
  },
  // {
  //   path: 'candidates.profile',
  //   component: lazy(() => import('@iso/components/Candidate/CandidateProfile')),
  // },
];

export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {routes.map((route, idx) => (
          <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}
