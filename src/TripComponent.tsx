import { ISearchTrips } from './ITrip';
import { Duration } from 'luxon';
// import { tripDetails } from './api-request';
// import { useQuery } from 'react-query';

const TripComponent = (props: { trip: ISearchTrips }) => {
  const { trip } = props;

  //TODO: Following fetch request should return us the driver objet with the name and picture.
  // const { data, isError, isLoading } = useQuery('trip', async () => {
  //   await tripDetails(trip.link);
  // });

  // return (
  //   {
  //     data?.data.map((tripInfo) => {
  return (
    <div
      onClick={() => window.open(trip.link, '_blank')}
      className='p-6 bg-white rounded-md shadoow-sm hover:shadow-md grid grid-cols-2 mt-6 w-9/12 h-40 cursor-pointer'
    >
      <div className='flex flex-col'>
        <span>
          <strong>From:</strong> {trip.waypoints[0].place.city}
        </span>
        <span>
          <strong>To:</strong> {trip.waypoints[1].place.city}
        </span>
        <span>
          <strong>Duration:</strong>{' '}
          {Duration.fromObject({
            seconds: trip.duration_in_seconds,
          }).toFormat('hh:mm')}
        </span>
      </div>
      <div className='flex justify-self-end'>
        <strong>Price:</strong>
        {trip.price.amount}
        {trip.price.currency === 'EUR' ? '€' : '$'}
      </div>
      {/* 
            TODO: we have to fetch the right api with trip details,
           which will give us the driver & available seats info that could be displayed below.
          <div>
            <img
              src={tripInfo.driver.thumbnail}
              alt={tripInfo.driver.display_name}
            />
            <div>
              <div>{tripInfo.driver.display_name}</div>
              <div>{tripInfo.driver.rating.overall}</div>
            </div>
          </div>
          
          <div className='flex justify-self-end'>
            <strong>Available seats:</strong>{' '}
          </div>
          */}
    </div>
  );
  // })
  // }

  // );
};

export default TripComponent;
