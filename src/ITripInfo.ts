export interface ITripInfo {
  driver: {
    display_name: string;
    gender: string;
    id: string;
    id_checked: boolean;
    rating: { overall: number; total_number: number };
    thumbnail: string;
    verification_status: { code: string };
  };
}
