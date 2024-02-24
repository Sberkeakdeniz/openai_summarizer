import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

// using .env file to store and hide our api key from the public
// then we can access it using import.meta.env.VITE_RAPID_API_ARTICLE_KEY
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) =>({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}$length=`
        }),
    })
});

export const { useLazyGetSummaryQuery } = articleApi; // using lazy word we make this work when the user presses the submit button