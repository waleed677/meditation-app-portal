import { Col, Row } from "antd";
import SmallCard from "../../../components/cards/small-card";
import { useGetUsersQuery } from "../../../services/users";
import { useGetVisualPracticeQuery } from "../../../services/visualPractice";
import { useGetAudioPracticeQuery } from "../../../services/audioPractice";
import { FaUsers, FaUserSecret, FaVideo, FaVolumeUp } from "react-icons/fa";

import ListTable from "../../../components/table";
import { checkRowData, dateFun, joinFileLink } from "../../../utils/commonFun";
import { useState } from "react";

import ViewVideoPlayer from "../visualPractice/components/ViewVideoPlayer";
import { Tag } from "antd";
const Index = () => {
  const { data } = useGetUsersQuery({});
  const { data: getTotalVideoCount } = useGetVisualPracticeQuery({});
  const { data: getTotalAudioCount } = useGetAudioPracticeQuery({});

  const { data: getTotalUserData, isLoading } = useGetVisualPracticeQuery({});

  const [showVideoPlayer, setShowVideoPlayerData] = useState<{
    open: boolean;
    videoLink: string | null; // Explicitly type videoLink
  }>({
    open: false,
    videoLink: null, // Default value is null
  });
  const columns = [
    {
      title: "Id",
      render: (record: { id: string }) => checkRowData(record.id),
      key: "id",
    },
    {
      title: "Title",
      render: (record: { title: string }) => checkRowData(record.title),
      key: "title",
    },
    {
      title: "Duration",
      render: (record: { duration: string }) => checkRowData(record.duration),
      key: "duration",
    },
    {
      title: "Video",
      render: (record: { file_url: string }) => (
        <Tag
          color="blue"
          className="cursor-pointer"
          onClick={() =>
            setShowVideoPlayerData({
              open: true,
              videoLink: joinFileLink(record.file_url),
            })
          }
        >
          View Video
        </Tag>
      ),
      key: "video",
    },
    {
      title: "Create At",
      render: (record: { created_at: string }) => dateFun(record.created_at),
      key: "create_at",
    },
  ];

  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Row gutter={20}>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <SmallCard
                title="Total Users"
                count={data?.total_users}
                icon={<FaUsers size={20} color={"#2762A6"} />}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <SmallCard
                title="Active Users"
                count={data?.active_users}
                icon={<FaUserSecret size={20} color={"#45A529"} />}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <SmallCard
                title="Total Videos"
                count={getTotalVideoCount?.total_videos}
                icon={<FaVideo size={20} color={"#655BBA"} />}
              />
            </Col>
            <Col xl={6} lg={6} md={12} sm={24} xs={24}>
              <SmallCard
                title="Total Audios"
                count={getTotalAudioCount?.total_audios}
                icon={<FaVolumeUp size={20} color={"#FF913C"} />}
              />
            </Col>
          </Row>
          <div className="mt-7">
            <h2 className="font-semibold text-[20px]">Lastest Videos</h2>
          </div>
          <Row className="mt-2">
            {/* <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <AreaGraph fill="#FF913C" />
            </Col> */}
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <ListTable
                data={getTotalUserData?.videos}
                loading={isLoading}
                columns={columns}
              />
              {showVideoPlayer.videoLink && (
                <ViewVideoPlayer
                  setShowVideoPlayerData={setShowVideoPlayerData}
                  showVideoPlayer={showVideoPlayer}
                />
              )}
            </Col>
            <Col xl={12} lg={12} md={24} sm={24} xs={24}></Col>
          </Row>
        </Col>
        {/* <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <NotificationsCard />
        </Col> */}
      </Row>
    </div>
  );
};

export default Index;
