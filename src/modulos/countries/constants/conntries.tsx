import { TableColumnsType } from 'antd';
import { Countries } from '../../../interface/countries/tableCountries';

export const columnsConntries: TableColumnsType<Countries> = [
  {
    title: 'Created at',
    dataIndex: 'created_at',
    fixed: true,
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Code',
    dataIndex: 'code',
  },
  {
    title: 'Updated at',
    dataIndex: 'updated_at',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Id',
    dataIndex: 'id',
  },
];
