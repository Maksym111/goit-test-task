import { useEffect, useState } from "react";
import { Numeral } from "react-numeral";

import {
  FollowBtn,
  FollowersCount,
  ListInfo,
  TweetsCount,
  WrapBtn,
} from "./FollowerInfo.styled";
import { putUserFollowers } from "../../services/axios";
import { getDataLocStor } from "../../services/localStorage";

export const FollowerInfo = ({ info, updFollowers }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(info.followers);

  useEffect(() => {
    const localData = getDataLocStor();

    if (localData && localData.length > 0) {
      const isFollowed = localData.includes(Number(info.id));
      if (isFollowed) {
        setIsFollowing(true);
      }
    }
  }, [info.id]);

  const onFollowingClick = () => {
    async function handleFollowingBtn(value = 1) {
      const res = await putUserFollowers({
        id: info.id,
        followers: followersCount + value,
      });
      if (value === 1) {
        updFollowers(res, true);
      } else {
        updFollowers(res, false);
      }
    }

    if (!isFollowing) {
      setFollowersCount(followersCount + 1);
      handleFollowingBtn();
    } else {
      setFollowersCount(followersCount - 1);
      handleFollowingBtn(-1);
    }

    setIsFollowing(!isFollowing);
  };

  return (
    <ListInfo>
      <TweetsCount>
        <Numeral value={info.tweets} format={"0,0"} /> tweets
      </TweetsCount>
      <FollowersCount>
        <Numeral value={followersCount} format={"0,0"} /> followers
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
