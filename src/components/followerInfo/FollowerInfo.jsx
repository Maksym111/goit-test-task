import { useState } from "react";
import { Numeral } from "react-numeral";

import {
  FollowBtn,
  FollowersCount,
  ListInfo,
  TweetsCount,
  WrapBtn,
} from "./FollowerInfo.styled";
import { putUserFollowers } from "../../services/axios";

export const FollowerInfo = ({ info, updFollowers }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const onFollowingClick = () => {
    setIsFollowing(!isFollowing);

    async function handleFollowingBtn() {
      const res = await putUserFollowers({
        id: info.id,
        followers: info.followers,
      });

      updFollowers(res);
    }
    handleFollowingBtn();
  };

  return (
    <ListInfo>
      <TweetsCount>
        <Numeral value={info.tweets} format={"0,0"} /> tweets
      </TweetsCount>
      <FollowersCount>
        <Numeral value={info.followers} format={"0,0"} /> followers
      </FollowersCount>
      <WrapBtn>
        <FollowBtn
          type="button"
          onClick={onFollowingClick}
          isChecked={isFollowing}
        >
          {isFollowing ? "Following " : "Follow"}
        </FollowBtn>
      </WrapBtn>
    </ListInfo>
  );
};
