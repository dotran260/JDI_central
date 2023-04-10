import styled from "styled-components";

const PaymentRequestDrawerWrapper = styled.div`
  .small-avatar {
    width: 30px;
    height: 30px;
  }
`;

const Separator = styled.div`
  width: 100%;
  border-bottom: 2px dashed #e8e8ea;
`;

const SolidSeparator = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8e8ea;
`;

const ProcessPaymentModalWrapper = styled.div`
  .title,
  .pay-amount {
    font-weight: 800;
    font-size: 24px;
  }

  .detail-box {
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e8e8ea;
    border-radius: 12px;
  }
`;

export {
  PaymentRequestDrawerWrapper,
  Separator,
  SolidSeparator,
  ProcessPaymentModalWrapper,
};
