
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6273e15e345e1821b22351ff.mockapi.io/' }),
  tagTypes: ['Contact'],
    endpoints: (builder) => ({
      
    getAllContacts: builder.query({
        query: () => `contacts/`,
        providesTags: ['Contact'] //тут мы создаем провайдер с ключем за которым необходимо следить
    }),
      
    deletedContact: builder.mutation({
        query: (id) => ({
            url: `contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contact'], // тут мы следим за ключем (эти ключи к кешу где нужно перефечивать данные)
    }),

    addContact: builder.mutation({
        query: (newContact) => ({
            url: `contacts`,
            method: 'POST',
            body: newContact,
        }),
        invalidatesTags: ['Contact'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllContactsQuery, useDeletedContactMutation, useAddContactMutation } = contactApi