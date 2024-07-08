import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ProjectData = createApi({
  reducerPath: 'ProjectData',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://tanvirapi.pythonanywhere.com/api/' }),
  
  endpoints: (builder) => ({
    getAllProjectData: builder.query({
      query: () => {
        return{
            url: 'projects/',
            method: 'GET',
        }
      }
    }),
    getSingleProjecBySlug: builder.query({
      query: (slug) => {
        return{
            url: `projects/${slug}`,
            method: 'GET',
        }
      }
    }),


  }),
})

export const { useGetAllProjectDataQuery, useGetSingleProjecBySlugQuery } = ProjectData