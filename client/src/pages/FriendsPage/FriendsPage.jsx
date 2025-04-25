import { UserMinus } from "lucide-react";
import "./friends.css";
import { SideNavBar } from "../../components/SideNavBar/SideNavBar";
import { useSelector } from "react-redux";
import { fetchRemoveFriend } from "../../redux/Api/requests";
import { removeFriend } from "../../redux/slices/authSlice";
import { useRemoveItem } from "../../hooks/useRemoveItem";

export const FriendsPage = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const removeFriendHandler = useRemoveItem(fetchRemoveFriend, removeFriend);

    return (
        <>
            <SideNavBar />
            <div className="page_container">
                <div className="users_box">
                    <div className="all_users_container">
                        <div className="users_head">
                            <h1>
                            My friends</h1>
                        </div>
                        {userInfo?.friends.length > 0 ? (
                            userInfo.friends.map((el) => (
                                <div key={el?._id} className="user_card">
                                    <div className="user_img_box">
                                        <img src={el?.avatar || el?.image} alt={el?.fullname} />
                                        <div className="user_email_name">
                                            <p>{el?.fullname}</p>
                                            <p>{el?.email}</p>
                                        </div>
                                    </div>
                                    <button className="remove_friend" onClick={() => removeFriendHandler(el._id)}>
                                        <UserMinus /> Удалить друга
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>You have no friends. Add friends to start chatting! 😶‍🌫️ 😶‍🌫️ 😶‍🌫️</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};
