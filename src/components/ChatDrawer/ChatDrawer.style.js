import styled from "styled-components";

const ChatDrawerWrapper = styled.div`
  height: 100%;

  .chat-list {
    border-right: 1px solid #e8e8ea;
    padding 28px 12px 0 12px;
    height: 100%;
    
    .chat-item {
      padding: 12px;
      transition: all 0.3s ease;

      &.active {
        background-color: #f4fffc;
        border-radius: 6px;
      }
    }   
  }

  .chat-active-header {
    padding: 20px 30px;
  }

  .chat-active-body {
    padding: 20px;
    border-top: 1px solid #E8E8EA;
    border-bottom: 1px solid #E8E8EA;
    height: 55vh;
    overflow: auto;
  }

  .send-icon {
    flex: none;
    margin: 10px 20px;
    width: 28px;
    height: 28px;
    background-color: #1BD2A4;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chat-input {
    margin-top: 10px;
    height: 100%;
    border: none;
    outline:none;
    resize: none;
    box-shadow: none;

    &:focus-within {
      border: none;
      outline:none;
      box-shadow: none;
    }
  }
}
`;

export { ChatDrawerWrapper };
