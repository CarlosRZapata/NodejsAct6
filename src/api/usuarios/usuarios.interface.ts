export interface User {
    id_user: number;
    name: string;
    last_name?: string | null;
    created_date: Date;
    created_by?: number | null;
    email?: string | null;
  }