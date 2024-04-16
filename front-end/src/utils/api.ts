import { axiosBase } from '@/lib/axios';

interface Document {
  id: string;
  expedient: string;
  type: string;
  url: string;
}

interface ActivePrinciple {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  published_at: string;
  company: string;
  documents: Document[];
  active_principles: ActivePrinciple[];
}

export interface ApiResponse {
  data: Product[];
}

const getAllMedicines = async () => {
  try {
    const response = await axiosBase.get('/data');

    return response.data as ApiResponse['data'];
  } catch (error: any) {
    return null;
  }
};

export { getAllMedicines };
