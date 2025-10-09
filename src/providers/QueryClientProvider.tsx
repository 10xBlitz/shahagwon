"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache data for shorter time to ensure fresh data
      staleTime: 2 * 60 * 1000, // 2 minutes instead of 10
      gcTime: 5 * 60 * 1000,    // 5 minutes instead of 30
      // Retry failed requests
      retry: 2,
      // Enable refetch on window focus to get fresh data when returning to tab
      refetchOnWindowFocus: true,
      // Refetch on mount if data exists and is fresh
      refetchOnMount: true,
      // Refetch on reconnect if data is stale
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
