import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PlayerEditForm from 'components/PlayerEditForm';
import ProfileShow from 'components/profileShow';

import * as userAPI from 'services/userAPI';

const Profile = () => {
  const currentUser = useSelector((state) => state.userReducer);
  const [profile, setProfile] = useState();
  const { clubId, teamId, playerId } = useParams();

  const setupElements = () => {
    let elements;
    if (profile.player.id == currentUser.id) {
      elements = (
        <>
          <div>
            Hey Mate what is up ? Welcome on your Profile Edit
          </div>
          <PlayerEditForm player={profile.player} team={profile.team} />
        </>
      );
    } else {
      elements = (
        <>
          <h1>ProfileShow Component</h1>
        </>
      );
    }
    return elements;
  };

  const setupPage = () => {
    let content;
    if (profile !== undefined) {
      content = (
        <>
          { setupElements() }
        </>
      );
    } else {
      content = (
        <>
          <div>
            <p>Loading.....</p>
          </div>
        </>
      );
    }
    return content;
  };

  useEffect(() => {
    const loadData = async () => {
      const playerData = await userAPI.getPlayer(clubId, teamId, playerId);
      setProfile(playerData);
    };
    loadData();
  }, []);

  return (
    <div className="text-center mt-5">
      { setupPage() }
    </div>
  );
};

export default Profile;
