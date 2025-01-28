import { Modal } from "antd";

// Define the correct type for the modal's state (video link and open state)
interface ViewVideoPlayerProps {
  showVideoPlayer: {
    open: boolean;
    videoLink: string | null;
  };
  setShowVideoPlayerData: React.Dispatch<
    React.SetStateAction<{
      open: boolean;
      videoLink: string | null;
    }>
  >;
}

const ViewVideoPlayer: React.FC<ViewVideoPlayerProps> = ({
  showVideoPlayer,
  setShowVideoPlayerData,
}) => {
  return (
    <Modal
      open={showVideoPlayer.open}
      onCancel={() => setShowVideoPlayerData({ open: false, videoLink: null })}
      onClose={() => setShowVideoPlayerData({ open: false, videoLink: null })}
      footer={null}
      title="View Video"
    >
      <div className="flex justify-center items-center">
        {/* If videoLink exists, show the video */}
        {showVideoPlayer.videoLink && (
          <video
            controls
            className="max-w-[500px] min-h-[300px] rounded overflow-hidden"
          >
            <source src={showVideoPlayer.videoLink} type="video/mp4" />
          </video>
        )}
      </div>
    </Modal>
  );
};

export default ViewVideoPlayer;
