export interface ISearchInfo {
  count: number;
  full_trip_count: number;
}

export interface ISearchTrips {
  distance_in_meters: number;
  duration_in_seconds: number;
  link: string;
  price: { amount: string; currency: string };
  vehicle: { make: string; model: string };
  waypoints: Array<{
    date_time: string;
    place: {
      city: string;
      address: string;
      lattitude: number;
      longitude: number;
      country_code: string;
    };
  }>;
}

export interface ITrip {
  link: string;
  search_info: ISearchInfo;
  trips: Array<ISearchTrips>;
  next_cursor: string;
}
