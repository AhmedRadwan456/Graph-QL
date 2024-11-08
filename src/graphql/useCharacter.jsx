import { gql, useQuery } from "@apollo/client";

const GET_Ctagories = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
export default function useCharacter() {
  let { data, loading, error } = useQuery(GET_Ctagories);
  return {
    data,
    loading,
    error,
  };
}
