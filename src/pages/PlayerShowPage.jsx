import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileEdit from 'components/profileEdit';
import ProfileShow from 'components/profileShow';

import * as userAPI from 'services/userAPI';

const Profile = () => {
  const currentUser = useSelector((state) => state.userReducer);
  const [profile, setProfile] = useState();
  const { clubId, teamId, playerId } = useParams();

  const setupElements = () => {
    let elements;
    if (profile.player.id === currentUser.id) {
      elements = (
        <>
          <ProfileEdit player={profile.player} />
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
          <div>
            {profile.player.first_name}
            {profile.player.last_name}
          </div>
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
