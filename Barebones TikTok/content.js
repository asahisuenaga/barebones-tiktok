const style = document.createElement('style');
style.textContent = `
  #app .ege8lhx2 .css-1czmy9n-DivVideoList, .ege8lhx2 .css-vcqawy-DivRelatedMask .css-xcst97-DivRecommendListContainer, .ege8lhx2 .css-vcqawy-DivRelatedMask .css-1uazfdv-DivArrow, .ege8lhx2 .css-vcqawy-DivRelatedMask .css-107hjm0-DivArrow, .ege8lhx2 div .TUXMenuItem:nth-child(4) {
    display: none !important;
  }
  #app .ege8lhx2 .css-1senhbu-DivLeftContainer {
    width: 100%;
    margin-right: 0px;
  }

  #main-content-video_detail {
    padding-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }

  #main-content-video_detail{
      background-color: #000000;
  }

  #app .css-flkb7b-DivSideNavPlaceholderContainer,
  .ege8lhx2 .eqrezik17,
  .ege8lhx2 .css-x4xlc7-DivCommentContainer,
  .css-1elr43g-DivActionBarWrapper .css-1npmxy5-DivActionItemContainer > .css-nmbm7z-ButtonActionItem,
  .ege8lhx2 .css-1elr43g-DivActionBarWrapper {
    display: none !important;
  }

  #column-list-container article, #column-list-container {
    padding-right: 0px;
  }

  .css-dzyz4w-DivVideoContainer {
    top: 5vh;
    bottom: 5vh;
    left: 72.5vh;
    right: 72.5vh;
    width: 55vh;
    height: 90vh;
    border-radius: 16px;
    border: 1px solid #404040;
  }
`;
document.head.appendChild(style);
