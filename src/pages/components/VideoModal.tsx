import styled from "styled-components";

const VideoModel= styled.iframe`
  border: 1px solid transparent;
  border-radius: 20px;
  background: linear-gradient(to right, white, white),
    linear-gradient(to right, #a0fc6a, #47702f);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  @media (max-width: 320px) {
    width: 30rem;
  }
`;

export default VideoModel;
