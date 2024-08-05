import { Table } from 'antd';
import useGetList from '../../api/services/getServices/useGetList';
import { Typography } from '@mui/material';
import { columnsMaterials } from './constants/materials';

export const MaterialsModule = () => {
  const user = localStorage.getItem('user');

  const { data } = useGetList({
    key: 'materialsTable',
    resource: ['materials'],
    keyResults: 'materials',
    enabled: user ? true : false,
  });

  return (
    <div className='flex flex-col mt-8 min-h-screen ml-2'>
      <div className='font-bold'>
        <Typography variant='h4'>Material</Typography>
      </div>
      <Table
        columns={columnsMaterials}
        dataSource={data}
        scroll={{ x: 1000 }}
      />
    </div>
  );
};
