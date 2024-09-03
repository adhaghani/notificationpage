import React from "react";
import { motion } from "framer-motion";
import { Box } from "./Box";
const Notification = ({ notification }) => {
  return (
    <motion.div
      className={
        notification.new ? "Notification__Card New" : "Notification__Card"
      }
      whileHover={{
        scale: 1.03
      }}
      initial={{
        scale: 0,
        opacity: 0
      }}
      animate={{
        scale: 1,
        rotate: 0,
        opacity: 1,
        backgroundColor: notification.new
          ? "var(--bg_colour_lblue)"
          : "var(--bg_colour_white)"
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 35
      }}
    >
      <div className="Notification">
        <div className="Profile__Picture">
          <img
            src={notification.avatar}
            alt={notification.username + " Profile Picture"}
          />
        </div>
        <div className="Notification__Content">
          <div
            className={
              notification.type === "image" ? "Actions Image" : "Actions"
            }
          >
            <div>
              <span className="UserName">{notification.username}</span>{" "}
              {notification.action}{" "}
              {notification.type !== "image" &&
                notification.type !== "message" && (
                  <b
                    className={
                      notification.type === "group"
                        ? "Content blue"
                        : "Content gray"
                    }
                  >
                    {notification.content}
                  </b>
                )}
              <motion.span
                className="New"
                initial={{
                  opacity: notification.new ? 1 : 0
                }}
                animate={{
                  opacity: notification.new ? 1 : 0,
                  display: notification.new ? "" : "none"
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35
                }}
              ></motion.span>
              <p className="Time">{notification.time}</p>
            </div>
            {notification.type === "image" && (
              <img src={notification.content} alt={notification.content} />
            )}
            {notification.type === "message" && (
              <p className="Message">{notification.content}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Notification;
