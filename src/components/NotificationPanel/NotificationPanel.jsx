/* eslint-disable react/prop-types */
import { FaArrowLeft } from "react-icons/fa";
import girl from "../../assets/girl.jpg";

const NotificationPanel = (props) => {
  const { setShowNotificationPanel } = props;

  const mockNotifications = [
    {
      notificationId: 1,
      heading: "Group Invite",
      content:
        "You have been invited to the Bikers group by cosmeticdiesel2112.",
      userName: "John",
      userImage: girl,
      typeOfNotification: "CTA",
    },
    {
      notificationId: 2,
      heading: "App Updates",
      content:
        "Neighborly will have a new look in the coming weeks. Stay Tuned!",
      userName: "Tina",
      userImage: girl,
      typeOfNotification: "CTA",
    },
  ];

  return (
    <div>
      <div className="bg-appTheme p-4 rounded-b-lg">
        <button onClick={() => setShowNotificationPanel(false)}>
          <FaArrowLeft color="white" size={40} />
        </button>
        <h1 className="text-cblue text-3xl pt-2">Notifications</h1>
      </div>
      <ul className="notifications-container">
        {mockNotifications.map((notification) => {
          const { notificationId, heading, content, userImage } = notification;
          return (
            <li key={notificationId}>
              <div className="notification-card flex border-b-2 p-2 items-center">
                <div className="notification-image rounded-full w-1/6">
                  <img
                    src={userImage}
                    className="h-8 w-8 rounded-full"
                    alt=""
                  />
                </div>
                <div className="notification-content w-5/6 h-20">
                  <h1 className="notification-heading">{heading}</h1>
                  <p className="notification-content-text text-gray-400 text-overflow-ellipses-2 ">
                    {content}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotificationPanel;
