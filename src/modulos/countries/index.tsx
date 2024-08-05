import { Table } from 'antd';
import useGetList from '../../api/services/getServices/useGetList';
import { Typography } from '@mui/material';
import { columnsConntries } from './constants/conntries';

export const CountriesModule = () => {
  const user = localStorage.getItem('user');

  const { data } = useGetList({
    key: 'contriesTable',
    resource: ['countries'],
    keyResults: 'countries',
    enabled: user ? true : false,
  });

  return (
    <div className='flex flex-col mt-8'>
      <div className='font-bold my-8'>
        <Typography variant='h4'>Countries</Typography>
      </div>
      <Table
        columns={columnsConntries}
        dataSource={data?.countries}
        scroll={{ x: 1000 }}
      />
    </div>
  );
};
