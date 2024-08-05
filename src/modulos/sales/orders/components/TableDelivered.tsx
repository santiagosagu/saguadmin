import { Avatar, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

interface DataType {
  key: React.Key;
  date: string;
  reference: string;
  image: string;
  address: string;
  nbItems: number;
  total: number;
  returned: boolean;
  name: string;
  age: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Date',
    dataIndex: 'date',
    fixed: true,
  },
  {
    title: 'Reference',
    dataIndex: 'reference',
  },
  {
    title: 'Customer',
    dataIndex: 'image',
    render: (item, data) => (
      <div className='flex items-center gap-3'>
        <Avatar src={item} />
        <p>{data.name}</p>
      </div>
    ),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    responsive: ['md'],
  },
  {
    title: 'Nb Items',
    dataIndex: 'name',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
  {
    title: 'Returned',
    dataIndex: 'returned',
    render: (returned: string) => {
      if (returned) {
        return <CheckBoxIcon color='success' />;
      } else {
        return <DisabledByDefaultIcon color='error' />;
      }
    },
  },
];

const data: DataType[] = [
  {
    key: '1',
    date: '23/7/2024, 15:29:44',
    reference: 'GPJUL6',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    nbItems: 1,
    total: 450,
    name: 'Rick Sanchez',
    age: 32,
    address: '90012 Colten Drive, Port Garnet, VA, 91278-2842',
    returned: true,
  },
  {
    key: '2',
    date: '23/7/2024, 15:29:44',
    reference: 'GPJUL7',
    image: 'https://rickandmortyapi.com/api/character/avatar/48.jpeg',
    nbItems: 2,
    total: 340,
    name: 'Black Rick',
    age: 42,
    address: '90012 Colten Drive, Port Garnet, VA, 91278-2842',
    returned: false,
  },
  {
    key: '3',
    date: '23/7/2024, 15:29:44',
    reference: 'GPJUL8',
    image: 'https://rickandmortyapi.com/api/character/avatar/72.jpeg',
    nbItems: 3,
    total: 220,
    name: 'Cool Rick',
    age: 32,
    address: '90012 Colten Drive, Port Garnet, VA, 91278-2842',
    returned: true,
  },
  //   {
  //     key: '4',
  //     name: 'Disabled User',
  //     age: 99,
  //     address: 'Sydney No. 1 Lake Park',
  //   },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows,
    );
  },
  //   getCheckboxProps: (record: DataType) => ({
  //     disabled: record.name === 'Disabled User', // Column configuration not to be checked
  //     name: record.name,
  //   }),
};

const TableDelivered = () => {
  return (
    <div>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
        scroll={{ x: 1000 }}
      />
    </div>
  );
};

export default TableDelivered;
