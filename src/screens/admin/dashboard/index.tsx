import { Col, Row } from "antd";
import SmallCard from "../../../components/cards/small-card";
import NotificationsCard from "../../../components/cards/notifications-card";
import AreaGraph from "../../../components/cards/area-graph";
const Index = () => {
  return (
    <div>
      <Row gutter={[20, 20]}>
        <Col xl={16} lg={16} md={24} sm={24} xs={24}>
          <Row gutter={20}>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SmallCard title="Total Users" count={100} fill="#2762A6" />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SmallCard title="Active Users" count={90} fill="#45A529" />
            </Col>
          </Row>
          <Row gutter={20} className="mt-5">
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SmallCard title="Total Videos" count={100} fill="#655BBA" />
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <SmallCard title="Total Audios" count={200} fill="#FF913C" />
            </Col>
          </Row>
          <Row className="mt-5">
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <AreaGraph fill="#FF913C" />
            </Col>
          </Row>
        </Col>
        <Col xl={8} lg={8} md={24} sm={24} xs={24}>
          <NotificationsCard />
        </Col>
      </Row>
    </div>
  );
};

export default Index;
