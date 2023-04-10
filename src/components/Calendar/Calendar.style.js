import styled from 'styled-components';
export const CalendarContainer = styled.div`
  height: 200px;
  overflow-x: auto;
  //css Calendar
  .calendarContainer {
    height: 250px;
    .calendarWeek {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      background: #e8e8ea;
      border-radius: 5px;
    }
    .calendarTextWeek {
      font-weight: 700;
      font-size: 12px;
      line-height: 130%;
      margin: 0 18px;
    }
    .btnWeek {
      background-color: Transparent;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      font-size: 15px;
    }
    .calendarTable {
      width: 100%;
      margin-top: 10px;
    }
    .calendarDaysOfMonth,
    .calendarDaysOfWeek {
      text-align: center;
      align-items: center;
    }
    .calendarDaysOfWeek.active {
      color: #18ba92;
    }

    // .calendarDaysOfWeek:nth-child(6),
    // .calendarDaysOfWeek:nth-child(7),
    // .calendarDaysOfMonth:nth-child(6),
    // .calendarDaysOfMonth:nth-child(7) {
    //   color: gray;
    // }
    .calendarDaysOfMonth.active {
      font-weight: 700;
      font-size: 11px;
      line-height: 130%;
      margin-bottom: 12px;
    }
    .calendarDaysOfMonth {
      font-weight: 500;
      font-size: 11px;
      line-height: 130%;
    }
    .wrapWorkingDay {
      text-align: center;
      padding: 0 -2px;
      margin: 0 2px;
    }
    .btnWorkingDay {
      width: 100%;
      height: 30px;
      border: 1px solid #e8e8ea;
      border-radius: 4px;
      margin-bottom: 10px;
      cursor: pointer;
      :hover {
        opacity: 0.7;
      }
      :nth-child(1) {
        margin-top: 12px;
      }
      :disabled {
        background-color: gray;
        color: white;
        cursor: not-allowed;
        :hover {
          opacity: 1;
        }
      }
    }

    .tdWorkingDay {
      width: 80px;
    }

    td {
      vertical-align: top;
    }
  }
`;
