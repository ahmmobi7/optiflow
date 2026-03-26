import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

// Client-side Supabase client (for use in Client Components)
export const createClient = () => createClientComponentClient();

// Server-side Supabase client (for use in Server Components)
export const createServerClient = () =>
  createServerComponentClient({ cookies });
