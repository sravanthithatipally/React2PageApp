import React from 'react'
import {Link} from 'react-router-dom'



const Home = () => {
  return (
    <div>
        <h1>
            Baweja Media 
        </h1>
        <p>Looking For A
      Digital Marketing Consultant?</p>
      <b>I have been into digital marketing industry for more than
         5 years and have helped small businesses scale their revenu
         7 times by consulting and strategizing for them.</b>
         <br/>
 <Link to="/about">Know More</Link>
    </div>
  )
}

export default Home