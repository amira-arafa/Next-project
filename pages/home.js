import Button from "../components/Button";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUserList } from "../redux/usersList/actions";
import { useDispatch } from "react-redux";

const home = () => {
  const router = useRouter();
  const disptach = useDispatch();
  const { loginData } = useSelector((state) => state.login);
  const { usersList } = useSelector((state) => state.users);
  const parsedData = loginData && JSON.parse(loginData)
  const handleClick = () => {
    router.push({
      pathname: "/",
    });
  };
  const handleUserClick = (id) => {
    router.push({
      pathname: `/user-details`,
      query: { id }
    });
  }
  useEffect(() => {
    disptach(getUserList());
  }, [getUserList]);
  return (
    <div className="users-list-container">
      <div className=" row align-items-baseline">
        <div className="col-sm-2">
          <img src="/static/logo.png" alt="logo" height="90px"></img>
        </div>
        <div className="col-sm-2 offset-sm-8 ">
          {parsedData ? (
            <p>{parsedData?.email}</p>
          ) : (
            <Button
              text="login"
              onClick={handleClick}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      <div>
        <h3 className="text-center"> Users List</h3>
      </div>
      <div className="row text-center mt-5">
        {usersList &&
          usersList.map((user) => {
            return (
              <div key={user.id} className="col-sm-3 users-list-card mb-4 cursor-pointer" onClick={()=> handleUserClick(user.id)}>
                <p>{user?.name}</p>
                <p>{user?.phone}</p>
              </div>
            );
          })}
      </div>
      <style>
        {`
        .users-list-container{
          border: 1px solid #000;
          padding: 30px;
          border-radius: 10px;
          margin:32px;
          height:100%;
        }
        .users-list-card{
          border: 1px solid #000;
          padding: 30px;
          border-radius: 10px;
          margin:48px;
        }
        .cursor-pointer{
          cursor: pointer;
        }
        `}
      </style>
    </div>
  );
};

export default home;
