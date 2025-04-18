import { useSelector } from "react-redux";
import "./profile_page.css";

export const ProfilePage = () => {
  const {userInfo} = useSelector((state)=> state.auth)

  return (
    <div className="page_container">
      <div className="profile_box">
        <h2>Profile Settings</h2>
        <div className="profile">
          <div className="profile_img_box">
            <div className="profile_title">
            <h2>Profile Picture</h2>
            <p>Update your profile picture</p>
            <img src={userInfo.avatar} alt="" />
            </div>
            <p>For this demo, you can enter a URL for your avatar</p>
            <input type="text" value={userInfo.avatar} />
          </div>
          <div className="profile_information_box">
          <div className="profile_title">
            <h2>Personal Information</h2>
            <p>Update your personal details</p>
            </div>
            <div className="inp_box">
            <label htmlFor="Name">{userInfo.name}</label>
            <input type="text" name="name" value={'Arsen'} />
          </div>

          <div className="inp_box">
            <label htmlFor="Email">Email</label>
            <input type="text" name="email" value={userInfo.email} />
          </div>

          <p>This is the email used for login and notifications</p>

            <button>Save Change</button>
          </div>
        </div>
      </div>
    </div>
  );
};
