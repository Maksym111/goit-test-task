import { useEffect, useState } from "react";
import { getDataLocStor, setDataLocStor } from "../../services/localStorage";

import { getUsersData } from "../../services/axios";
import { CardItem } from "../cardItem/CardItem";
import { CardsList } from "./Cards.styled";
import { LoadMoreBtn } from "../loadMore/LoadMoreBtn";

const Cards = () => {
  const [users, setUsers] = useState([]);
  const [usersPerPage, setUsersPerPage] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);

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
      setUsersPerPage(res.slice(0, 3));
    }
    getUsers();
  }, []);

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
      const newArr = users.slice(prevArrLength, prevArrLength + 3);

      return [...prevState, ...newArr];
    });
  };

  return (
    <>
      {usersPerPage.length > 0 && (
        <CardsList>
          {usersPerPage.map((elem) => {
            return (
              <li key={elem.id}>
                <CardItem info={elem} updFollowers={updFollowers}></CardItem>
              </li>
            );
          })}
        </CardsList>
      )}
      {users.length > usersPerPage.length && (
        <LoadMoreBtn users={users} onBtnClick={onLoadMoreClick} />
      )}
    </>
  );
};

export default Cards;
