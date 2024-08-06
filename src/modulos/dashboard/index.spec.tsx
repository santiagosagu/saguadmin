/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, waitFor } from '@testing-library/react';
import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import Dashboard from '.';

const queryClient = new QueryClient();
// Función para simular el usuario en localStorage
const localStorageMock: any = (function () {
  let store: { [key: string]: string } = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem(key: string) {
      delete store[key];
    },
    clear() {
      store = {};
    },
  };
})();

const renderComponent = () => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>,
  );
};

describe('dashboard module tests', () => {
  beforeEach(() => {
    global.localStorage = localStorageMock;
    localStorage.setItem('user', JSON.stringify({ user: 'admin' }));
  });

  test('should render title', () => {
    renderComponent();

    expect(screen.getByText('Monthly Revenue')).toBeInTheDocument();
  });

  test('should name', () => {
    renderComponent();

    waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });
  });
});
