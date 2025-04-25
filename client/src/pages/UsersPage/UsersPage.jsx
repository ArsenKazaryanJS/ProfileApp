import { UserPlus } from "lucide-react";
import "./users.css";
import { SideNavBar } from "../../components/SideNavBar/SideNavBar";
import { useSelector } from "react-redux";
import { useAddFriend } from "../../hooks/useAddFriend"; 

export const UsersPage = () => {
  const { users } = useSelector((state) => state.users);
  const { userInfo } = useSelector((state) => state.auth);
  const { addFriend } = useAddFriend(); 

  return (
    <>
      <SideNavBar />
      <div className="page_container">
        <div className="users_box">
          <div className="all_users_container">
            <div className="users_head">
              <h1>Users</h1>
            </div>
            {users.map((el) => (
              <div key={el.id} className="user_card">
                <div className="user_img_box">
                  <img src={el?.image} alt={`${el?.fullname}'s avatar`} />
                  <div className="user_email_name">
                    <p>{el?.fullname}</p>
                    <p>{el?.email}</p>
                  </div>
                </div>
                {userInfo && !userInfo?.friends.some((friend) => friend._id === el._id) ? (
                  <button onClick={() => addFriend(el._id)}>
                    <UserPlus /> Add Friend
                  </button>
                ) : (
                  <button>
                    ✅ Friend
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
