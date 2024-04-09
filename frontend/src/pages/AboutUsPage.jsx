
import React from 'react'
import { getUser } from '../config/helper';

const AboutUsPage = () => {
  const user = getUser();
  return (
    <div>
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}

export default AboutUsPage;
