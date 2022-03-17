import React from 'react';
import './Profile.scss';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import {SiLeetcode,SiHackerrank,SiCodechef,SiCodeforces} from 'react-icons/si';

const Profile = () => {
  const platforms = [
    {
      name : 'Hackerrank',
      img : <SiHackerrank className="profile__images" />,
      link : 'https://www.hackerrank.com/akshay4570'
    },
    {
      name : 'Leetcode',
      img : <SiLeetcode className="profile__images" />,
      link : 'https://leetcode.com/Akshay4570/'
    },
    {
      name : 'Codechef',
      img : <SiCodechef className="profile__images" />,
      link : 'https://www.codechef.com/users/ash23091999'
    },
    {
      name : 'Codeforces',
      img : <SiCodeforces className="profile__images" />,
      link : 'https://codeforces.com/profile/akshay45701'
    }
  ]
  return (
    <div className="profile">
        <h2 className="profile__heading">
          <span> Github Contribution</span>
        </h2>
        <div className="profile__github-calendar">
          <GitHubCalendar username="akshay4570" blockSize={15} fontSize={15} style={{margin : '2%', padding : '2%', color : 'white'}} blockMargin={5} blockRadius={3}>
              <ReactTooltip delayShow={5} html />
          </GitHubCalendar>
        </div>
        <h2 className="profile__heading">
          <span> Coding Platforms Handles</span>
        </h2>
        <div className="profile__coding-platforms">
          <div className="profile__cards">
              {
                platforms.map((item) => {
                  return (
                  <div className="profile__element" key={item.name}
                  onClick={() => window.open(item.link)}>
                    <div className="profile__img">
                      {item.img}
                    </div>
                    
                    <p className="p-text">{item.name}</p>
                  </div>
                  )
                })
              }
          </div>
        </div>
    </div>
  );
}

export default Profile;