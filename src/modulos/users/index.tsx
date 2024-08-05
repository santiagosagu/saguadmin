import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import TableOrders from '../sales/orders/components/TableOrders';
import TableDelivered from '../sales/orders/components/TableDelivered';

const Users = () => {
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
    <div className='flex flex-col mt-8'>
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

export default Users;
