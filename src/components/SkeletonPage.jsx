import React from 'react';
import { Skeleton } from 'antd';

const SkeletonPage = () => (
  <div className="skeleton-page p-4 black-background">
    <Skeleton active avatar round paragraph={{ rows: 4 }} />
    <Skeleton active avatar round paragraph={{ rows: 5 }} />
    <Skeleton active avatar round paragraph={{ rows: 5 }} />
  </div>
);

export default SkeletonPage;
