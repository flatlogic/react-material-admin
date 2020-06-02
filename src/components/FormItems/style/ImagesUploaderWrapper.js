import styled from 'styled-components';

const ImagesUploaderWrapper = styled.div`
  .img-card:hover .img-buttons {
    display: block;
  }

  .img-buttons {
    display: none;
    position: relative;
    bottom: 2.4rem;
    width: calc(100px);
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .img-buttons * {
    color: white;
  }
`;

export default ImagesUploaderWrapper;
