export interface User {
  id: number;
  email: string;
  name: string;
  provider: string;
  uid: string;
  image: string | null;
  google_id: string | null;
  email_verified: boolean;
  created_at: string;
  updated_at: string;
}
