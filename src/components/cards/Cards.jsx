import { useEffect, useState } from "react";
import { getDataLocStor, setDataLocStor } from "../../services/localStorage";

import { getUsersData } from "../../services/axios";
import { CardItem } from "../cardItem/CardItem";
import {
  CardsList,
  LoadingData,
  NoDataTitle,
  WrapFilter,
} from "./Cards.styled";
import { LoadMoreBtn } from "../loadMore/LoadMoreBtn";
import FilterFollowings from "../filterFollowings/FilterFollowings";

const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [usersPerPage, setUsersPerPage] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);

  const [filteredUsers, setfilteredUsers] = useState([]);

  useEffect(() => {
    const localData = getDataLocStor();
    if (localData) {
      setFollowedUsers(localData);
    }

    async function getUsers() {
      const res = await getUsersData();
      if (res === undefined) {
        return;
      }
      setUsers(res);
      setfilteredUsers(res);
      setUsersPerPage(sliceTweets(res));
    }
    getUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0 && usersPerPage.length > 0) {
      setIsLoading(false);
    }
  }, [users.length, usersPerPage.length]);

  const sliceTweets = (arr) => {
    return arr.slice(0, 3);
  };

  const updFollowers = (data, isClicked) => {
    setUsers((prevState) => {
      const prevUpdElem = prevState.find((elem) => elem.id === data.id);
      const indexElem = prevState.indexOf(prevUpdElem);
      prevState.splice(indexElem, 1, data);
      return prevState;
    });

    if (isClicked) {
      setFollowedUsers((prevState) => {
        const newArr = [...prevState, Number(data.id)];
        setDataLocStor(newArr);
        return newArr;
      });
    } else {
      const localStatgeData = getDataLocStor();
      setFollowedUsers(() => {
        const prevUpdElem = localStatgeData.find(
          (elem) => elem === Number(data.id)
        );
        const indexElem = localStatgeData.indexOf(prevUpdElem);
        localStatgeData.splice(indexElem, 1);
        setDataLocStor(localStatgeData);
        return localStatgeData;
      });
    }
  };

  const onLoadMoreClick = () => {
    setUsersPerPage((prevState) => {
      const prevArrLength = prevState.length;
      const newArr = filteredUsers.slice(prevArrLength, prevArrLength + 3);

      return [...prevState, ...newArr];
    });
  };

  const handleFilterValue = (value) => {
    const localData = getDataLocStor();
    switch (value) {
      case "all":
        {
          setfilteredUsers(users);
          setUsersPerPage(sliceTweets(users));
        }
        break;

      case "follow":
        {
          setfilteredUsers(() => {
            const filtUsers = users.reduce((counter, elem) => {
              const unFollow = localData.includes(Number(elem.id));
              if (!unFollow) {
                counter.push(elem);
              }
              return counter;
            }, []);

            setUsersPerPage(sliceTweets(filtUsers));
            return filtUsers;
          });
        }
        break;

      case "following":
        setfilteredUsers(() => {
          const filtUsers = users.filter(({ id }) =>
            localData.includes(Number(id))
          );
          setUsersPerPage(sliceTweets(filtUsers));
          return filtUsers;
        });
        break;
    }
  };

  return (
    <>
      {!isLoading ? (
        <>
          <WrapFilter>
            <FilterFollowings handleValue={handleFilterValue} />
          </WrapFilter>

          {usersPerPage.length > 0 ? (
            <CardsList>
              {usersPerPage.map((elem) => {
                return (
                  <li key={elem.id}>
                    <CardItem
                      info={elem}
                      updFollowers={updFollowers}
                    ></CardItem>
                  </li>
                );
              })}
            </CardsList>
          ) : (
            <NoDataTitle>No tweeters is here :(</NoDataTitle>
          )}

          {filteredUsers.length > usersPerPage.length && (
            <LoadMoreBtn users={users} onBtnClick={onLoadMoreClick} />
          )}
        </>
      ) : (
        <LoadingData>Data is loading...</LoadingData>
      )}
    </>
  );
};

export default Cards;
