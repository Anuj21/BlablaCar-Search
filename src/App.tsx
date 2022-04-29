import { QueryClient, QueryClientProvider } from 'react-query';
import SearchTrips from './SearchTrips';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchTrips />
    </QueryClientProvider>
  );
}
