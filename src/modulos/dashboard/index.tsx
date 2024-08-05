/* eslint-disable @typescript-eslint/no-explicit-any */
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CardInfoUser from '../../components/UI/CardInfoUser';
import useGetList from '../../api/services/getServices/useGetList';
import { LineChart } from '@mui/x-charts/LineChart';

import './style.css';
import { CircularProgress, Skeleton, Typography } from '@mui/material';
// import { useMutationService } from '../../api/services/testMutation';
// import { useEffect } from 'react';

const Dashboard = () => {
  const user = localStorage.getItem('user');

  const { data, isLoading } = useGetList({
    key: 'test',
    resource: ['character'],
    params: { name: 'rick', status: 'alive', id: '1' },
    keyResults: 'results',
    enabled: user ? true : false,
  });

  // const mutation = useMutationService({ resource: ['users'] });

  // const handleTest = () => {
  //   mutation.mutate({
  //     name: 'morpheus',
  //     job: 'leader',
  //   });
  // };

  // useEffect(() => {
  //   if (mutation.data) {
  //     console.log(mutation.data);
  //   }
  // }, [mutation.data]);

  return (
    <div className='flex justify-between gap-4 pl-0 mt-8 ml-2'>
      <div className=' w-full md:min-w-[600px] lg:w-1/2'>
        <div className='flex gap-3 flex-col md:flex-row'>
          <div className='card-info h-[95px] m-0 w-full rounded-xl p-4 border border-[#e0e0e3] flex justify-between bg-white'>
            <AttachMoneyIcon fontSize='large' color='primary' />
            <div className='flex flex-col items-end'>
              <Typography>Monthly Revenue</Typography>
              <Typography>6603 US$</Typography>
            </div>
          </div>
          <div className='card-info h-[95px] m-0 w-full rounded-xl p-4 border border-[#e0e0e3] flex justify-between bg-white'>
            <ShoppingCartIcon fontSize='large' color='primary' />
            <div className='flex flex-col items-end'>
              <Typography>New Orders</Typography>
              <Typography>42</Typography>
            </div>
          </div>
        </div>
        <div className='w-full h-[406px] mt-4 text-white rounded-xl p-4 hidden md:block border border-[#e0e0e3] bg-white'>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
          />
        </div>
        <div className=' rounded-xl h-[900px] mt-4 border border-[#e0e0e3] bg-white overflow-y-auto custom-scrollbar'>
          <Typography variant='h4' className='text-4xl mb-10 p-4 '>
            Pending Orders
          </Typography>
          {isLoading && <CircularProgress />}
          {data?.map((item: any, index: any) => (
            <CardInfoUser
              key={index}
              type='order'
              image={item.image}
              pendingOrders={{
                date: '26/07/2024, 03:35:46',
                name: item.name,
                items: '1',
                value: '45.8',
              }}
            />
          ))}
        </div>
      </div>
      <div className=' w-1/4 min-w-[263px] hidden lg:block  '>
        <div className='card-info h-[95px] m-0 w-full rounded-t-xl p-4 border border-[#e0e0e3] flex justify-between bg-white'>
          <MessageIcon fontSize='large' color='primary' />
          <div className='flex flex-col items-end '>
            <Typography>Pending Reviews</Typography>
            <Typography>43</Typography>
          </div>
        </div>
        <div className='w-full h-[1500px] mb-4 rounded-b-xl pt-3 border border-x-[#e0e0e3] border-b-[#e0e0e3] bg-white overflow-y-auto custom-scrollbar'>
          {isLoading && <CircularProgress />}

          {data?.map((item: any, index: any) => (
            <CardInfoUser
              key={index}
              type='review'
              image={item.image}
              description={
                'Adipisci consequuntur adipisci voluptatem. Et error officiis. Expedita sed et eveniet. Cupiditate molestias porro reiciendis id ratione. Aut mollitia id eum magnam ut et ipsum id aut.'
              }
            />
          ))}
        </div>
      </div>
      <div className=' w-1/4 min-w-[263px] hidden lg:block'>
        <div className='card-info h-[95px] m-0 w-full rounded-t-xl border border-[#e0e0e3] flex justify-between bg-white'>
          <PersonAddIcon fontSize='large' color='primary' />
          <div className='flex flex-col items-end'>
            <Typography>New Customers</Typography>
            <Typography>11</Typography>
          </div>
        </div>
        <div className='w-full h-[1500px] mb-4 border border-x-[#e0e0e3] border-b-[#e0e0e3]  rounded-b-xl pt-3 bg-white overflow-y-auto custom-scrollbar'>
          {isLoading && (
            <div className='flex w-full p-4'>
              <Skeleton
                variant='circular'
                width={50}
                height={50}
                className='mr-4'
              />
              <Skeleton variant='text' width={200} sx={{ fontSize: '1rem' }} />
            </div>
          )}

          {data?.map((item: any, index: any) => (
            <CardInfoUser
              key={index}
              type='customer'
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
        {/* <button onClick={() => handleTest()}>test mutation</button> */}
      </div>
    </div>
  );
};

export default Dashboard;
