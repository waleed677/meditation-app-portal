import { Modal } from "antd";

const ViewVideoPlayer = ({ showVideoPlayer, setShowVideoPlayerData }) => {
  return (
    <Modal
      open={showVideoPlayer.open}
      onCancel={() => setShowVideoPlayerData({ open: false, videoLink: null })}
      onClose={() => setShowVideoPlayerData({ open: false, videoLink: null })}
      footer={null}
      title="View Video"
    >
      <div className="flex justify-center items-center">
        <video
          controls
          className="max-w-[500px] min-h-[300px] rounded overflow-hidden"
        >
          <source src={showVideoPlayer.videoLink} type="video/mp4" />
        </video>
      </div>
    </Modal>
  );
};

export default ViewVideoPlayer;
