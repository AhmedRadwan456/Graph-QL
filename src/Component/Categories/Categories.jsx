import React from "react";
import useCharacter from "../../graphql/useCharacter";
import { Link } from "react-router-dom";

export default function Category() {
  const { data, loading, error } = useCharacter();

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>error...</h3>;

  return (
    <>
      <div className="container my-4">
        <div className="row">
          {data.characters.results.map((character) => {
            return (
              <>
                <div key={character.id} className="col-md-3">
                  <Link
                    className="text-decoration-none"
                    to={`details/${character.id}`}
                  >
                    <img src={character.image} alt="" />
                    <h2 className="fs-4 text-center text-black ">
                      {character.name}
                    </h2>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
