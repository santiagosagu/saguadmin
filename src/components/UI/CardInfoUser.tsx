import { Avatar, Typography } from '@mui/material';

interface IProps {
  type: 'order' | 'review' | 'customer';
  image: string;
  description?: string;
  name?: string;
  pendingOrders?: { date: string; name: string; items: string; value: string };
}

const CardInfoUser = ({ image, description, name, pendingOrders }: IProps) => {
  return (
    <div className='flex items-center hover:bg-slate-300 p-4'>
      <Avatar src={image} className='mr-4' sx={{ width: 50, height: 50 }} />
      {description && <Typography>{description}</Typography>}
      {name && <Typography>{name}</Typography>}
      {pendingOrders && (
        <div className='w-full flex justify-between'>
          <div className=' '>
            <Typography>{pendingOrders.date}</Typography>
            <Typography>{pendingOrders.name}</Typography>
          </div>
          <Typography className='text-lg mr-6'>
            {pendingOrders.value}$
          </Typography>
        </div>
      )}
    </div>
  );
};

export default CardInfoUser;
