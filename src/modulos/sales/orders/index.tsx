import { Tabs } from 'antd';
import TableOrders from './components/TableOrders';
import type { TabsProps } from 'antd';
import TableDelivered from './components/TableDelivered';

const Orders = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Ordered',
      children: <TableOrders />,
    },
    {
      key: '2',
      label: 'Delivered',
      children: <TableDelivered />,
    },
    {
      key: '3',
      label: 'Cancelled',
      children: <TableOrders />,
    },
  ];

  return (
    <div className='mt-4'>
      <Tabs
        type='card'
        defaultActiveKey='1'
        size='large'
        style={{ marginBottom: 32, width: '100%' }}
        items={items}
        tabBarStyle={{ width: '100%' }}
      />
    </div>
  );
};

export default Orders;
