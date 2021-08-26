import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-areas:
    "menu header header header header header header header"
    "menu feed carousel carousel reel reel resources resources"
    "menu feed tools tools reel reel resources resources"
    "menu feed team  team team team other other";
  grid-template-columns: 150px 2fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export const HeaderSection = styled.div`
  grid-area: header;
`;

export const MenuSection = styled.div`
  grid-area: menu;
`;

export const FeedSection = styled.div`
  grid-area: feed;
`;

export const ToolsSection = styled.div`
  grid-area: tools;
`;

export const CarouselSection = styled.div`
  grid-area: carousel;
`;

export const ReelSection = styled.div`
  grid-area: reel;
`;

export const ResourcesSection = styled.div`
  grid-area: resources;
`;

export const TeamSection = styled.div`
  grid-area: team;
`;

export const OtherSection = styled.div`
  grid-area: other;
`;
