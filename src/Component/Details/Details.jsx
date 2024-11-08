import React from "react";
import useCharacterDetails from "../../graphql/useCharacterDetails";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const { data, error, loading } = useCharacterDetails(id);
  let _data = data?.character;

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>error...</h3>;

  return (
    <>
      <div className="container my-5">
        <div className=" d-flex line-height">
          <div className="photo w-50 me-5">
            {" "}
            <img className="w-100" src={_data.image} alt="" />
          </div>

          <div className="content-details">
            <h1>{_data.name}</h1>
            <h3>{_data.gender}</h3>
            <div className="episode-content">
              {data.character.episode.map((episode) => {
                return (
                  <>
                    <div key={episode.id}>
                      <p>
                        {episode.name}-<b>{episode.episode}</b>
                      </p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
