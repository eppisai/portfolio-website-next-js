import {
  StyledBottomNavigationWrapper,
  StyledActiveNavigationComponent,
  StyledNavigationComponent,
  StyledNavigationButton,
} from "./index.style";

const BottomNavigation = () => {
  return (
    <StyledBottomNavigationWrapper>
      <StyledActiveNavigationComponent>
        <span>blog.</span>articles
      </StyledActiveNavigationComponent>
      <StyledNavigationComponent>
        <StyledNavigationButton>Filters</StyledNavigationButton>
        <StyledNavigationButton>Categories</StyledNavigationButton>
        <StyledNavigationButton>Tags</StyledNavigationButton>
      </StyledNavigationComponent>
    </StyledBottomNavigationWrapper>
  );
};

export default BottomNavigation;
