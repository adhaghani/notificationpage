import "./Styles/App.css";
import { Box } from "./components/Box";
import data from "./assets/data.json";
import Notification from "./components/Notification";
import { useEffect, useState } from "react";
function App() {
  const datas = data;
  const [NotificationData, setNotificationData] = useState(data);

  const [newNotificationCount, setNewNotificationCount] = useState(0);

  const countNewNotifications = () => {
    let count = 0;
    NotificationData.forEach((notification) => {
      if (notification.new) {
        count++;
      }
    });
    setNewNotificationCount(count);
  };

  useEffect(() => {
    countNewNotifications();
  }, [NotificationData]);

  const markAsRead = (e) => {
    const updatedNotifications = NotificationData.map((notification) => ({
      ...notification,
      new: false
    }));
    setNotificationData(updatedNotifications);
    countNewNotifications();
  };

  return (
    <div className="App">
      <div className="Container">
        <div className="Header">
          <section className="Header__Title">
            <h2>Notifications</h2>
            {newNotificationCount > 0 && (
              <h2 className="Unread__Notifications">{newNotificationCount}</h2>
            )}
          </section>
          <section className="Header__Actions">
            <button onClick={markAsRead}>Mark all as read</button>
          </section>
        </div>
        <div className="Content">
          {NotificationData.map((notification) => (
            <Notification notification={notification} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
