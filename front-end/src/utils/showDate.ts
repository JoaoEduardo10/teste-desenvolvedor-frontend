import { ApiResponse } from './api';

export const showDate = (
  medicines: ApiResponse['data'],
  ascending: boolean
): ApiResponse['data'] => {
  return [...medicines].sort((a, b) => {
    const dateA = new Date(a.published_at).getTime();
    const dateB = new Date(b.published_at).getTime();
    return ascending ? dateA - dateB : dateB + dateA;
  });
};
