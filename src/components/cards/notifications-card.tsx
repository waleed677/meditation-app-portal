import { FaHandPointRight } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";

const NotificationsCard = () => {
  const notificationsList = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard",
    "It has survived not only five centuries",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard",
    "It has survived not only five centuries",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard",
    "It has survived not only five centuries",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum has been the industry's standard",
    "It has survived not only five centuries",
  ];
  const renderNotifications = () => {
    return notificationsList?.map((item) => {
      return (
        <div className="flex  gap-2 mt-4">
          <div>
            <FaHandPointRight size={16} />
          </div>
          <p className="text-xs">{item}</p>
        </div>
      );
    });
  };
  return (
    <div
      style={{ height: 500 }}
      className="bg-white drop-shadow rounded-lg ps-3 gap-5 border overflow-y-auto"
    >
      <div className="border-b py-3 flex items-center text-lg font-semibold gap-2">
        Notifications <FcAdvertising size={24} />
      </div>
      <div className="flex flex-col gap-2 pr-2 pb-10">
        {renderNotifications()}
      </div>
    </div>
  );
};

export default NotificationsCard;
