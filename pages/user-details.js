import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getUserDetails } from "../redux/usersList/actions";

const home = () => {
  const router = useRouter();
  const disptach = useDispatch();
  const { loginData } = useSelector((state) => state.login);
  const parsedData = loginData && JSON.parse(loginData)
  const { singleUser } = useSelector((state) => state.users);

  const handleClick = () => {
    router.push({
      pathname: "/",
    });
  };
  useEffect(() => {
    if (router && router.query) {
      router.query.id && disptach(getUserDetails(router.query.id));
    }
  }, [router]);
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
        <h3 className="text-center"> User Details</h3>
      </div>

      {singleUser && (
        <div className="row text-center mt-5">
          <div
            key={singleUser.id}
            className="col-sm-3 single-details-card mb-4 cursor-pointer m-auto"
          >
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
            </div>
            <p>{singleUser?.id}</p>
            <p>{singleUser?.email}</p>
            <p>{singleUser?.name}</p>
            <p>{singleUser?.phone}</p>
            <p>{singleUser?.website}</p>
          </div>
        </div>
      )}
      <style>
        {`
        .users-list-container{
          border: 1px solid #000;
          padding: 30px;
          border-radius: 10px;
          margin:32px;
          height:100%;
        }
        .cursor-pointer{
          cursor: pointer;
        }
        .single-details-card{
            border: 1px solid #000;
            padding: 30px;
            border-radius: 10px;
        }
        `}
      </style>
    </div>
  );
};

export default home;
