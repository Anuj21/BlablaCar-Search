import { useRef } from 'react';
import './SearchTrips.css';
import { ISearchTrips } from './ITrip';
import TripComponent from './TripComponent';
import { useInfiniteQuery } from 'react-query';
import { searchForTrips } from './api-request';

function SearchTrips() {
  const listInnerRef = useRef<HTMLDivElement | null>(null);

  const { data, hasNextPage, fetchNextPage, isLoading, isError } =
    useInfiniteQuery(
      'search-trips',
      ({ pageParam = 1 }) => searchForTrips(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => lastPage.next_cursor,
      }
    );

  const onScroll = async () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (parseInt(scrollTop.toFixed(), 10) + clientHeight === scrollHeight) {
        if (hasNextPage) await fetchNextPage();
      }
    }
  };

  if (isLoading) {
    return (
      <div className='flex justify-center align-center'>
        <h2>Loading ....</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className='flex justify-center align-center'>
        <h2>Error Fetching data from api !</h2>
      </div>
    );
  }

  return (
    <div className='search-trips'>
      <h1 className='search-trips__header'>
        Trips from Paris to Lyon for current date & time
      </h1>
      <div
        className='search-trips__trips'
        onScroll={onScroll}
        ref={listInnerRef}
      >
        {data?.pages.map((page) =>
          page.trips.map((trip: ISearchTrips) => {
            return <TripComponent key={trip.link} trip={trip}></TripComponent>;
          })
        )}
      </div>
    </div>
  );
}

export default SearchTrips;
