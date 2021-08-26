import React from "react";

import {
  FeedSection,
  MenuSection,
  ReelSection,
  TeamSection,
  OtherSection,
  ToolsSection,
  HeaderSection,
  CarouselSection,
  LayoutContainer,
  ResourcesSection,
} from "./index.styles";

export const MainLayout = ({
  reel,
  team,
  feed,
  tools,
  other,
  header,
  sidebar,
  carousel,
  resources,
}) => {
  return (
    <LayoutContainer className="">
      <MenuSection>{sidebar}</MenuSection>
      <HeaderSection className="">{header}</HeaderSection>
      <FeedSection>{feed}</FeedSection>
      <CarouselSection>{carousel}</CarouselSection>
      <ToolsSection>{tools}</ToolsSection>
      <ReelSection>{reel}</ReelSection>
      <TeamSection>{team}</TeamSection>
      <OtherSection>{other}</OtherSection>
      <ResourcesSection>{resources}</ResourcesSection>
    </LayoutContainer>
  );
};

export default MainLayout;
