import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PostsGrid from "./Posts";
import StoriesGrid from "./Stories";
import EventsGrid from "./Events";
import NoMediaFound from "./NoMediaFound";


// Mapping tab index to component functions with media prop fallback
const tabComponents = {
  0: (media = []) => media.length ? <PostsGrid media={media} /> : <NoMediaFound />,
  1: (media = []) => media.length ? <StoriesGrid media={media} /> : <NoMediaFound />,
  2: (media = []) => media.length ? <EventsGrid media={media} /> : <NoMediaFound />,
};

export default function IconLabelTabs() {
  const [activeTab, setActiveTab] = React.useState(0);
  const media = []; // Replace with actual media fetching logic

  return (
    <div className="p-4 bg-base-200 mx-auto rounded-lg flex flex-col items-center">
      {/* Tabs Navigation */}
      <Tabs 
        value={activeTab} 
        onChange={(e, newValue) => setActiveTab(newValue)} 
        aria-label="icon label tabs"
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab icon={<PhoneIcon />} label="Posts" />
        <Tab icon={<FavoriteIcon />} label="Stories" />
        <Tab icon={<PersonPinIcon />} label="Events" />
      </Tabs>

      {/* Render the selected component */}
      <div className="mt-4 p-4 bg-base-100 rounded-lg shadow">
        {tabComponents[activeTab](media)}
      </div>
    </div>
  );
}
