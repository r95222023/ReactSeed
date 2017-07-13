import React from 'react';
import Layout from '../../components/Layout';
import Test from './Test';

function action() {
  return {
    chunks: ['test'],
    title: 'test',
    component: <Layout><Test /></Layout>,
  };
}

export default action;
