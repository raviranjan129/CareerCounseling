
import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AppRoutes from './Routes';

const App = () => {
  const queryClient=new QueryClient();
  return (
    <div className='h-screen overflow-y-hidden w-full '>
      <QueryClientProvider client={queryClient} >
        <AppRoutes/>
      </QueryClientProvider>
    </div>
  )
}

export default App
