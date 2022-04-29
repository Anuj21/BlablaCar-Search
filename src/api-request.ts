import { DateTime } from 'luxon';
import { ITrip } from './ITrip';

export async function searchForTrips(nextPage: number): Promise<ITrip> {
  const queryParam = new URLSearchParams({
    key: 'YzbiA8L6DcqxTvSna1lOFQQU66FosDVs',
    from_coordinate: `48.8566,2.3522`,
    to_coordinate: `45.764043,4.835659`,
    start_date_local: `${DateTime.now()}`,
    page: `${nextPage}`,
  }).toString();

  const result = await fetch(
    `https://public-api.blablacar.com/api/v3/trips?${queryParam}`
  );
  if (!result.ok) {
    throw new Error('Network response was not ok');
  }
  return await result.json();
}

export async function tripDetails(tripLink: string): Promise<any> {
  const queryLink = new URLSearchParams(tripLink);
  const paramId = queryLink.get('id');
  const queryParams = new URLSearchParams({
    locale: `fr_FR`,
    _format: `json`,
    key: 'YzbiA8L6DcqxTvSna1lOFQQU66FosDVs',
  }).toString();

  const result = await fetch(
    `https://public-api.blablacar.com/api/v2/trips/${paramId}?${queryParams}`
  );

  return await result.json();
}
