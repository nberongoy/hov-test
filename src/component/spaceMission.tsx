import React, { useEffect, useState } from "react";
import { List, Button } from "antd";
import { useQuery } from "@apollo/client";
import { FETH_SPACE_MISSION } from "../graphql/queries";
import { SpaceMissionLaunch } from "../interface/space";
import moment from "moment";

const SpaceMission: React.FC<any> = () => {
  const { loading, data } = useQuery(FETH_SPACE_MISSION);
  const [launchMission, setLaunchMission] = useState<SpaceMissionLaunch[]>([]);

  useEffect(() => {
    if (data) {
      const { launchesPast } = data;
      setLaunchMission(launchesPast);
    }
  }, [data]);

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={launchMission}
        loading={loading}
        renderItem={(launch: SpaceMissionLaunch, index: number) => (
          <List.Item
            key={`${launch.mission_name}-${index}`}
            extra={
              <img
                width={272}
                alt="logo"
                src={`https://source.unsplash.com/200x200?spaceship&sig=${index}`}
              />
            }
            style={{ padding: 20 }}
          >
            <List.Item.Meta
              title={<span>{launch.mission_name}</span>}
              description={launch.launch_site.site_name_long}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default SpaceMission;
