import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  ProductList as ProductListView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
  MapView,
  Points as PointsView,
  AddWaterPoint as AddWaterPointView,
  WaterPointStatus as WaterPointStatusView,
  Attendants as AttendantsView,
  AddAttendant as AddAttendantView,
  Engineers as EgineersView,
  AddEngineer as AddEngineerView,
  Organisations as OrganisationsView,
  AddOrganisation as AddOrganisationView
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
        component={AddWaterPointView}
        exact
        layout={MainLayout}
        path="/add-point"
      />
      <RouteWithLayout
        component={AddAttendantView}
        exact
        layout={MainLayout}
        path="/add-attendant"
      />
      <RouteWithLayout
        component={WaterPointStatusView}
        exact
        layout={MainLayout}
        path="/point-status"
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
        component={AddEngineerView}
        exact
        layout={MainLayout}
        path="/add-engineer"
      />
      <RouteWithLayout
        component={OrganisationsView}
        exact
        layout={MainLayout}
        path="/organisations"
      />
       <RouteWithLayout
        component={AddOrganisationView}
        exact
        layout={MainLayout}
        path="/add-organisations"
      />
      <RouteWithLayout
        component={UserListView}
        exact
        layout={MainLayout}
        path="/users"
      />
      <RouteWithLayout
        component={ProductListView}
        exact
        layout={MainLayout}
        path="/products"
      />
      <RouteWithLayout
        component={TypographyView}
        exact
        layout={MainLayout}
        path="/typography"
      />
      <RouteWithLayout
        component={IconsView}
        exact
        layout={MainLayout}
        path="/icons"
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
