import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useLaunch from "../useLaunches/useLaunches";
import Main from "../Main/Main";
import Youtube from "react-youtube";
import "./details.css";
import useLaunches from "../useLaunches/useLaunches";

const Details = (props) => {
  const [launch, setlaunch] = useState(null);
  const { getLaunch } = useLaunches();

  useEffect(() => {
    setlaunch(getLaunch(props.match.params.id));
  }, [getLaunch]);

  const history = useHistory();

  if (!launch) return null;

  return (
    <>
      <Main name={launch.name}/>
      <main class="details">
        <div class="container">
          <div class="details-row">
            <div class="details-image">
              <img
                src={launch.links.patch.small}
                alt={launch.name}
              />
            </div>
            <div class="details-content">
              <p class="details-description">
                {launch.details}
              </p>
            </div>
          </div>
          <Youtube className="details-youtube" videoId={launch.links.youtube_id} />
        </div>
        <a onClick={history.goBack} class="button button-back">
          go back
        </a>
      </main>
    </>
  );
};

export default Details;
