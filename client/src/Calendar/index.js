import React, { Component } from 'react';
import dateFns from "date-fns";
import './styles.css'

class Calendar extends Component{

        state={
            monthNow: new Date (),
            selectedDate: new Date()
        }

    renderHeader() {
        const dateFormat = "MMMM YYYY";
        return (
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={this.prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>
                {dateFns.format(this.state.monthNow, dateFormat)}
              </span>
            </div>
            <div className="col col-end" onClick={this.nextMonth}>
              <div className="icon">chevron_right</div>
            </div>
          </div>
        );
    };
    renderDays() {
        const dateFormat = "dddd";
        const days = [];
        let startDate = dateFns.startOfWeek(this.state.monthNow);
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
            </div>
          );
        }
        return <div className="days row">{days}</div>;
      
    };
    renderCells() {
        const { monthNow, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(monthNow);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);
        const dateFormat = "D";
        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = "";
        while (day <= endDate) {
          for (let i = 0; i < 7; i++) {
            formattedDate = dateFns.format(day, dateFormat);
            const cloneDay = day;
            days.push(
              <div
                className={`col cell ${
                  !dateFns.isSameMonth(day, monthStart)
                    ? "disabled"
                    : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() => this.onclick(dateFns.parse(cloneDay))}
              >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
              </div>
            );
            day = dateFns.addDays(day, 1);
          }
          rows.push(
            <div className="row" key={day}>
              {days}
            </div>
          );
          days = [];
        }
          return <div className="body">{rows}</div>;
    };
    onclick = e => {
        this.setState({
            selectedDate: e
          });
    };
    nextMonth = () => {
        this.setState({
            monthNow: dateFns.addMonths(this.state.monthNow, 1)
          });
    };
    lastMonth = () => {
        this.setState({
            monthNow: dateFns.subMonths(this.state.monthNow, 1)
          });
    };

    render(){
        return(
            <div className="calendar">
                    {this.renderHeader()}
                    {this.renderDays()}
                    {this.renderCells()}
          </div>  
        );
    }
}

export default Calendar