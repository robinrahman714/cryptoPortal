import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "e1393f5622msh2e2d3e2d00306f7p1d5124jsn7161b5024c48",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/coins"),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;

// var options = {
//   method: "GET",
//   url: "https://coinranking1.p.rapidapi.com/coins",
//   //   params: {
//   //     referenceCurrencyUuid: "yhjMzLPhuIDl",
//   //     timePeriod: "24h",
//   //     tiers: "1",
//   //     orderBy: "marketCap",
//   //     orderDirection: "desc",
//   //     limit: "50",
//   //     offset: "0",
//   //   },
//   headers: {
//     "x-rapidapi-host": "coinranking1.p.rapidapi.com",
//     "x-rapidapi-key": "e1393f5622msh2e2d3e2d00306f7p1d5124jsn7161b5024c48",
//   },
// };
