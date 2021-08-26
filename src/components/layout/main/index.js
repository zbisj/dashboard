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

export const MainLayout = ({ feed, sidebar, header, children }) => {
  return (
    <LayoutContainer className="">
      <MenuSection>{sidebar}</MenuSection>
      <HeaderSection className="">{header}</HeaderSection>
      <FeedSection>{feed}</FeedSection>
      <CarouselSection></CarouselSection>
      <ToolsSection></ToolsSection>
      <ReelSection></ReelSection>
      <TeamSection></TeamSection>
      <OtherSection></OtherSection>
      <ResourcesSection></ResourcesSection>
    </LayoutContainer>
  );
};

export default MainLayout;
