import { gql } from "@apollo/client";

export const GET_DASHBOARD = gql`
  query GetDashboard($city: String!, $limit: Int!) {
    weather(city: $city) {
      city
      temperature
      windSpeed
      weatherCode
    }

    latestNews(limit: $limit) {
      title
      by
      url
    }
  }
`;