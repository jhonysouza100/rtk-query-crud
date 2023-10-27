import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5174'
  }),
  endpoints: (builder) => ({ // READ
    getTasks: builder.query({
      query: () => '/tasks',
      providesTags: ["read-tasks"],
      transformResponse: response => response.sort((a,b) => b.id - a.id) // ordena de mayor a menor
    }),
    createTask: builder.mutation({ // CREATE
      query: (newTask) => ({
        url: '/tasks',
        method: 'POST',
        body: newTask
      }),
      invalidatesTags: ["read-tasks"] // ejecuta "getTasks" => READ
    }),
    deleteTask: builder.mutation({ // DELETE
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ["read-tasks"] // vuelve a llamar "getTasks"
    }),
    updateTask: builder.mutation({ // UPDATE
      query: (newTask) => ({
        url: `/tasks/${newTask.id}`,
        method: 'PATCH',
        body: newTask
      }),
      invalidatesTags: ["read-tasks"] // vuelve a llamar "getTasks"
    })
  })
});

export const {useGetTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation} = apiSlice;