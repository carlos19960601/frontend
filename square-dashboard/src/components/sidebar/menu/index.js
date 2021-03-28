import IconActivity from "../../icons/menu/activity";
import IconDashboard from "../../icons/menu/dashboard";
import IconMessages from "../../icons/menu/messages";
import IconSchedule from "../../icons/menu/schedule";
import IconSettings from "../../icons/menu/settings";
import IconTasks from "../../icons/menu/tasks";
import Item from "./item";
import { Wrapper } from "./style";

const itemsData = [
  {
    name: "Dashboard",
    icon: IconDashboard(),
    link: "/",
  },
  {
    name: "Messages",
    icon: IconMessages(),
    link: "/messages",
  },
  {
    name: "Tasks",
    icon: IconTasks(),
    link: "/tasks",
  },
  {
    name: "Schedule",
    icon: IconSchedule(),
    link: "/schedule",
  },
  {
    name: "Activity",
    icon: IconActivity(),
    link: "/activity",
  },
  {
    name: "Settings",
    icon: IconSettings(),
    link: "/settings",
  },
];

function Menu() {
  return (
    <Wrapper>
      {itemsData.map((item, idx) => (
        <Item key={idx} {...item} />
      ))}
    </Wrapper>
  );
}

export default Menu;
