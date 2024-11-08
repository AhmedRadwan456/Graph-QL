import { gql, useQuery } from "@apollo/client";

const GET_Ctagories_Details = gql`
  query getDetails($id: ID!) {
    character(id: $id) {
      id
      name
      gender
      image
      episode {
        id
        name
        episode
      }
    }
  }
`;
export default function useCharacterDetails(id) {
  let { data, loading, error } = useQuery(GET_Ctagories_Details, {
    variables: { id },
  });
  return {
    data,
    loading,
    error,
  };
}
