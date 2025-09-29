export type CategoryType = {
  id: number;
  header: string;
  type: string;
  status: 'Done' | 'In Process' | 'Pending'; // adapte selon tes cas
  target: number;
  limit: number;
  reviewer: string;
};
