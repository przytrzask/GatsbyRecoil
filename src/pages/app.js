import React from 'react';
import Layout from '../components/layout';
import Recoil from '../components/recoil';
import { RecoilRoot } from 'recoil';

export default () => (
  <RecoilRoot>
    <Layout>
      <Recoil path="app/recoil" />
    </Layout>
  </RecoilRoot>
);
