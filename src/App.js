import Feed from "./components/layout/feed";
import { MainLayout } from "./components/layout/main";
import { Topbar } from "./components/layout/topbar";
import { Sidebar } from "./components/navigation";
import actions from "./data/actions.json";
import articles from "./data/articles.json";
import notifications from "./data/notifications.json";
import carouselItems from "./data/carousel-items.json";
import Articles from "./components/media/article";
import Carousel from "./components/media/carousel";

import { ReactComponent as SunIcon } from "./assets/icons/lnr-sun.svg";
import { ReactComponent as FlagIcon } from "./assets/icons/lnr-flag.svg";
import { ReactComponent as MoveIcon } from "./assets/icons/lnr-move.svg";
import { ReactComponent as StarIcon } from "./assets/icons/lnr-star.svg";
import { ReactComponent as UsersIcon } from "./assets/icons/lnr-home.svg";
import { ReactComponent as BicycleIcon } from "./assets/icons/lnr-bicycle.svg";
import { ReactComponent as HeartPulseIcon } from "./assets/icons/lnr-heart-pulse.svg";
import { ReactComponent as CoachIcon } from "./assets/icons/lnr-graduation-hat.svg";

function App() {
  return (
    <MainLayout
      feed={<Feed actions={actions} notifications={notifications} />}
      header={
        <Topbar name="Myra Sekgororoane" title="Chief Executive Officer" />
      }
      sidebar={
        <Sidebar
          items={[
            { label: "home", icon: <UsersIcon />, active: true },
            {
              label: "perform",
              icon: <FlagIcon />,
              active: false,
            },
            {
              label: "grow",
              icon: <SunIcon />,
            },
            {
              label: "live",
              icon: <HeartPulseIcon />,
            },
            {
              label: "choose",
              icon: <MoveIcon />,
            },
            {
              label: "aspire",
              icon: <StarIcon />,
            },
            {
              label: "coach",
              icon: <CoachIcon />,
            },
            {
              label: "talent",
              icon: <BicycleIcon />,
            },
          ]}
        />
      }
      tools={<Articles articles={articles} heading="Development Tools" />}
      carousel={<Carousel items={carouselItems} />}
    ></MainLayout>
  );
}

export default App;
