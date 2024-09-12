import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

//import images
import { LoginContext } from "../Context/loginContext/LoginContext";


  
const ProfileDropdown = () => {
    const { logoutUser, User, getAllUsers } = useContext(LoginContext);
  const { user } = useSelector((state) => ({
    user: state.Profile.user,
  }));

  useEffect(() => {
    getAllUsers();
  }, []);
  // console.log(User?.user.fullName);

  const [userName, setUserName] = useState("Admin");
  const myItemString = localStorage.getItem('user');
  const user1 = JSON.parse(myItemString);
  const district = user1?.data.districtId;
  const userId = user1?.data._id;
  useEffect(() => {
    if (sessionStorage.getItem("authUser")) {
      const obj = JSON.parse(sessionStorage.getItem("authUser"));
      setUserName(user.first_name || obj.data.first_name || "Admin");
    }
  }, [userName, user]);
  // console.log(User.data);

  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  // console.log(User);
  // console.log(User?.user?.username);
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item topbar-user bg-white"
      >
        <DropdownToggle tag="button" type="button" className="btn">
          <span className="d-flex align-items-center">
             <img
              className="rounded-circle header-profile-user"
              src={user1?.data?.image}
              alt="Header Avatar"
            /> 

            <span className="text-start ms-xl-2">
              <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text h5 font-weight-bold" style={{fontWeight:"bolder" }}>
                {User?.user?.username || User?.data?.user?.username  }
              </span>
              <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text"></span>
            </span>
          </span>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end">
          <h6 className="dropdown-header">Welcome {user1?.data?.username}!</h6> 
         {/* <DropdownItem href="/#">
            <i className="mdi mdi-account-circle text-muted fs-16 align-middle me-1"></i>
            <span className="align-middle">Profile</span>
          </DropdownItem> 
           <DropdownItem href="#"><i
                        className="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"></i> <span
                            className="align-middle">Messages</span></DropdownItem> 
           <DropdownItem href="#">
            <i className="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Taskboard</span>
          </DropdownItem>
          <DropdownItem href="#">
            <i className="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Help</span>
          </DropdownItem>
          <div className="dropdown-divider"></div>
          <DropdownItem href="#">
            <i className="mdi mdi-wallet text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">
              Balance : <b>$5971.67</b>
            </span>
          </DropdownItem> 
           <DropdownItem href="#"> 
            <span className="badge bg-soft-success text-success mt-1 float-end">
              New
            </span> 
            <i className="mdi mdi-cog-outline text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Settings</span> 
          </DropdownItem> 
          <DropdownItem href="#">
            <i className="mdi mdi-lock text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle">Lock screen</span>
          </DropdownItem>  */}
          <DropdownItem href="/logout" onClick={logoutUser}>
            <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>{" "}
            <span className="align-middle h6 text-danger" data-key="t-logout">
              Logout
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;