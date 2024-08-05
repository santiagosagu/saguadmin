import { HttpResponse } from 'msw';

export const countriesMock = () => {
  return HttpResponse.json({
    countries: {
      countries: [
        {
          id: 'ca6b225c-182d-45fd-bfdf-535bb6663e7f',
          name: 'Perú',
          code: 'PE',
          created_at: '2024-02-20T01:27:10Z',
          updated_at: '2024-02-20T01:27:10Z',
        },
        {
          id: 'd5bc6926-ab52-4b4e-9d2a-2c8d224dff78',
          name: 'Colombia',
          code: 'CO',
          created_at: '2024-02-20T01:27:10Z',
          updated_at: '2024-02-20T01:27:10Z',
        },
      ],
      records_count: 2,
      limit: 20,
      next_page: 2,
      previous_page: null,
    },
  });
};
