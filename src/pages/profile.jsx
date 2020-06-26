import React, { useEffect, useState } from 'react';
import ProfileEdit from 'components/profileEdit';
import ProfileShow from 'components/profileShow';
import * as userAPI from 'services/userAPI'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Profile = () => {

  const [profile, setProfile] = useState('')
  const userId = useSelector(state => state.userReducer.id);

  let { clubId, teamId, playerId } = useParams();


  useEffect(() => {
    setupElements()
  }, []);

  const setupElements = async () => {
    const response = await userAPI.getPlayer(clubId, teamId, playerId);
    if (userId === response.id.toString()) {
      setProfile(<ProfileEdit player={response} />);
    } else {
    }
  }
  return (
    <div className='text-center mt-5'>
      {profile}
    </div>
  );
};

export default Profile;
