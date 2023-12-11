
import List from './list';
import Layout from '../components/layout';
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <List/>
      </Layout>
    </QueryClientProvider>
  )
}
