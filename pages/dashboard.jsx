import React from 'react';
import { Breadcrumb, Typography } from 'antd';

import { SkeletonPage } from '../component/pages/skeleton-page';
import { SideBarDefault } from '../component/pages/side-bar';

const Dashboard = ({ id }) => (
  <SkeletonPage id={id} sideBarActive={SideBarDefault.DASH_BOARD}>
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
    </Breadcrumb>

    <Typography.Title level={2}>Dashboard</Typography.Title>
  </SkeletonPage>
);

Dashboard.getInitialProps = ({ query: { id } }) => {
  return { id };
};

export default Dashboard;
