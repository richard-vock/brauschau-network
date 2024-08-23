import * as React from 'react';
import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { Page as HomePage } from '@/pages/marketing/home';
import { Layout as MarketingLayout } from '@/components/marketing/layout/layout';

export const routes: RouteObject[] = [
  {
    element: (
      <MarketingLayout>
        <Outlet />
      </MarketingLayout>
    ),
    children: [{ index: true, element: <HomePage /> }],
  },
];
