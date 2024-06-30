
import React from 'react'
import { getUser } from '../config/helper';

const AboutUsPage = () => {
  const user = getUser();
  return (
    <div style={{paddingTop:'200px'}}>
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}

export default AboutUsPage;
