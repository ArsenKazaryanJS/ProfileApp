import { useSelector } from "react-redux";
import "./profile_page.css";
import { SideNavBar } from "../../components/SideNavBar/SideNavBar";
import { useProfileUpdate } from "../../hooks/useProfileUpdate";

export const ProfilePage = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const { handleUpdateProfile, isLoading } = useProfileUpdate(); 

 

  return (
    <>
      <SideNavBar />
      <div className="page_container">
        <div className="profile_box">
          <div className="profile">
            <div className="profile_img_box">
              <div className="profile_title">
                <h2>Profile Picture</h2>
                <p>Update your profile picture</p>
                <img src={userInfo?.avatar} alt="" />
              </div>
              <p>For this demo, you can enter a URL for your avatar</p>
            </div>
            <form onSubmit={handleUpdateProfile} className="profile_information_box">
              {isLoading ? (
                <div className="load_box">
                  <svg viewBox="25 25 50 50">
                    <circle r="20" cy="50" cx="50"></circle>
                  </svg>
                </div>
              ) : (
                <>
                  <div className="profile_title">
                    <h2>Personal Information</h2>
                    <p>Update your personal details</p>
                  </div>
                  <div className="inp_box">
                    <label htmlFor="username">User Name</label>
                    <input
                      type="text"
                      name="username"
                      defaultValue={userInfo?.username}
                    />
                  </div>
                  <div className="inp_box">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      defaultValue={userInfo?.fullname}
                    />
                  </div>
                  <div className="inp_box">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      defaultValue={userInfo?.email}
                    />
                  </div>
                  <div className="inp_box_const">
                    <div className="inp_box">
                      <label htmlFor="gender">Gender</label>
                      <select
                        name="gender"
                        defaultValue={userInfo?.gender || ""}
                      >
                        <option value="male">male</option>
                        <option value="female">female</option>
                      </select>
                    </div>
                    <div className="inp_box">
                      <label htmlFor="age">Age</label>
                      <input
                        type="number"
                        name="age"
                        placeholder="your age"
                        defaultValue={userInfo?.age}
                      />
                    </div>
                  </div>
                  <div className="inp_box">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      name="address"
                      placeholder="add your address"
                      defaultValue={userInfo?.address}
                    />
                  </div>
                  <p>This is the email used for login and notifications</p>
                  <button>Save Change</button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
