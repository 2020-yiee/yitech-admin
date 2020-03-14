import { Layout, Menu, Card, Popover, Button, Select, Divider } from 'antd';
import { useRouter } from 'next/router';
import {
  DesktopOutlined,
  AppstoreOutlined,
  DoubleRightOutlined,
  PlusOutlined,
} from '@ant-design/icons';

export const SideBarDefault = {
  DASH_BOARD: 'DASH_BOARD',
  HEATMAPS: 'HEATMAPS',
  CONVERSION_RATE: 'CONVERSION_RATE',
  INCOMING_FEEDBACK: 'INCOMING_FEEDBACK',
};

const menus = [
  {
    key: SideBarDefault.HEATMAPS,
    icon: <DesktopOutlined />,
    name: 'Heatmaps',
  },
  {
    key: SideBarDefault.CONVERSION_RATE,
    icon: <DesktopOutlined />,
    name: 'Funnels',
  },
  {
    key: SideBarDefault.INCOMING_FEEDBACK,
    icon: <DesktopOutlined />,
    name: 'Incoming Feedback',
  },
];

export const SideBar = ({ id, sideBarActive }) => {
  const router = useRouter();

  return (
    <Layout.Sider width={200} theme="dark" breakpoint="md">
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[sideBarActive]}
        className="h-full border-r-0"
        style={{
          background: 'rgb(38,29,23)',
          background:
            'linear-gradient(180deg, rgba(38,29,23,1) 0%, rgba(34,17,41,1) 100%)',
        }}
      >
        <div
          style={{ height: 150 }}
          className="flex justify-center items-center"
        >
          <img src="/icon.png" width="40%" />
        </div>

        <Menu.Item key={SideBarDefault.DASH_BOARD}>
          <div className="flex items-center">
            <AppstoreOutlined />
            <span>Dashboard</span>
          </div>
        </Menu.Item>

        <Menu.ItemGroup title="Analytics">
          {menus.map(({ key, icon, name }) => (
            <Menu.Item key={key}>
              <div className="flex items-center">
                {icon}
                <span>{name}</span>
              </div>
            </Menu.Item>
          ))}
        </Menu.ItemGroup>
      </Menu>
    </Layout.Sider>
  );
};
