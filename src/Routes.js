import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  MapView,
  Points as PointsView,
  ViewWaterPoint as ViewWaterPointView,
  Attendants as AttendantsView,
  Engineers as EgineersView,
  Organisations as OrganisationsView,
  Organisation as OrganisationView,
  District as DistrictView,
  Cluster as ClusterView
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/sign-in"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={MapView}
        exact
        layout={MainLayout}
        path="/mapview"
      />
      <RouteWithLayout
        component={PointsView}
        exact
        layout={MainLayout}
        path="/points"
      />
      <RouteWithLayout
        component={ViewWaterPointView}
        exact
        layout={MainLayout}
        path="/view-point/:id"
      />
      <RouteWithLayout
        component={AttendantsView}
        exact
        layout={MainLayout}
        path="/attendants"
      />
      <RouteWithLayout
        component={EgineersView}
        exact
        layout={MainLayout}
        path="/engineers"
      />
      <RouteWithLayout
        component={OrganisationsView}
        exact
        layout={MainLayout}
        path="/organisations"
      />
      <RouteWithLayout
        component={OrganisationView}
        exact
        layout={MainLayout}
        path='/organisation/:id'
      />
      <RouteWithLayout
        component={ClusterView}
        exact
        layout={MainLayout}
        path='/cluster/:name'
      />
      <RouteWithLayout
        component={DistrictView}
        exact
        layout={MainLayout}
        path='/district/:name'
      />
      <RouteWithLayout
        component={AccountView}
        exact
        layout={MainLayout}
        path="/account"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={MinimalLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
