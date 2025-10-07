"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache data for longer to reduce API calls
      // 10 minutes
      staleTime: 10 * 60 * 1000,
      gcTime: 30 * 60 * 1000, // 30 minutes (increased from 10)
      // Retry failed requests
      retry: 2,
      // Don't refetch on window focus in admin panels
      refetchOnWindowFocus: false,
      // Don't refetch on mount if data exists and is fresh
      refetchOnMount: true,
      // Don't refetch on reconnect unless data is stale
      refetchOnReconnect: "always",
      // Network mode for offline support
      networkMode: "online",
    },
    mutations: {
      retry: 1,
      networkMode: "online",
    },
  },
});

export default function CustomQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
