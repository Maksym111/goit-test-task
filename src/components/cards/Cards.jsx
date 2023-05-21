import { useEffect, useState } from "react";

import { getUsersData } from "../../services/axios";
import { CardItem } from "../cardItem/CardItem";
import { CardsList } from "./Cards.styled";

export const Cards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await getUsersData();
      if (res === undefined) {
        return;
      }
      setUsers(res);
    }
    getUsers();
  }, []);

  const updFollowers = (data) => {
    setUsers((prevState) => {
      prevState.splice(data.id - 1, 1, data);
      return prevState;
    });
  };

  return (
    <>
      {users.length > 0 && (
        <CardsList>
          {users.map((elem) => {
            return (
              <li key={elem.id}>
                <CardItem info={elem} updFollowers={updFollowers}></CardItem>
              </li>
            );
          })}
        </CardsList>
      )}
    </>
  );
};
