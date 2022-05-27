import React from "react";
import {
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  TextField as Input,
  Box
} from "@mui/material";
import {
  KeyboardArrowLeft as LeftArrowIcon,
  KeyboardArrowRight as RightArrowIcon,
  CalendarToday as CalendarIcon
} from "@mui/icons-material";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

import s from "./Calendar.module.scss";

import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

import moment from "moment/moment";
import cn from "classnames";

//components
import Widget from "../../components/Widget";
import Dot from "../../components/Sidebar/components/Dot";
import { Button, Typography } from "../../components/Wrappers";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    const d = date.getDate();
    const m = date.getMonth();
    const y = date.getFullYear();
    this.state = {
      event: {},
      modal: false,
      modalEvent: false,
      calendarView: "dayGridMonth",
      currentMonth: moment().format("MMM YYYY"),
      currentDay: moment().format("dddd"),
      calendarOptions: {
        headerToolbar: {
          left: '',
          center: 'title',
          right: ''
        },
        events: [
          {
            title: "All Day Event",
            start: new Date(y, m, 1),
            backgroundColor: "#79A5F0",
            textColor: "#fff",
            description: "Will be busy throughout the whole day"
          },
          {
            title: "Long Event",
            start: new Date(y, m, d + 5),
            end: new Date(y, m, d + 7),
            textColor: '#fff',
            description: "This conference should be worse visiting"
          },
          {
            id: 999,
            title: "Blah Blah Car",
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            textColor: "#333",
            description: "Agree with this guy on arrival time"
          },
          {
            id: 1000,
            title: "Buy this template",
            start: new Date(y, m, d + 3, 12, 0),
            allDay: false,
            backgroundColor: "#555",
            textColor: "#fff",
            description: "Make sure everything is consistent first"
          },
          {
            title: "Got to school",
            start: new Date(y, m, d + 16, 12, 0),
            end: new Date(y, m, d + 16, 13, 0),
            backgroundColor: "#64bd63",
            textColor: "#fff",
            description: "Time to go back"
          },
          {
            title: "Study some Node",
            start: new Date(y, m, d + 18, 12, 0),
            end: new Date(y, m, d + 18, 13, 0),
            backgroundColor: "#79A5F0",
            textColor: "#fff",
            description:
              "Node.js is a platform built " +
              "on Chrome's JavaScript runtime for easily" +
              " building fast, scalable network applications." +
              " Node.js uses an event-driven, non-blocking" +
              " I/O model that makes it lightweight and" +
              " efficient, perfect for data-intensive real-time" +
              " applications that run across distributed devices."
          },
          {
            title: "Click for Flatlogic",
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: "http://flatlogic.com/",
            backgroundColor: "#e5603b",
            textColor: "#fff",
            description: "Creative solutions"
          }
        ],
        selectable: true,
        selectHelper: true,
        editable: true,
        droppable: true
      },
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
      dragOptions: { zIndex: 999, revert: true, revertDuration: 0 }
    };
  }

  componentDidMount() {
    new Draggable(this.externalEvents, {
      itemSelector: ".external-event"
    });
  }

  drop = info => {
    info.draggedEl.parentNode.removeChild(info.draggedEl);
  };

  handleChange = e => {
    this.setState({ event: { ...this.state.event, title: e.target.value } });
  };
  createEvent = () => {
    this.fullCalendar.getApi().addEvent(this.state.event);
    this.fullCalendar.getApi().unselect();
    this.toggleModal();
  };
  select = ({ start, end, allDay }) => {
    this.setState({
      event: {
        start,
        end,
        allDay,
        backgroundColor: "#64bd63",
        textColor: "#fff",
        editable: true
      }
    });
    this.toggleModal();
  };
  eventClick = e => {
    this.setState({ event: e.event });
    this.toggleModalEvent();
  };
  prev = () => {
    this.fullCalendar.getApi().prev();
  };
  next = () => {
    this.fullCalendar.getApi().next();
  };
  today = () => {
    this.fullCalendar.getApi().today();
  };
  changeView = (view) => {
    this.setState({ calendarView: view });
    this.fullCalendar.getApi().changeView(view);
  }
  getFormattedDate = date => {
    return moment(date).format("YYYY-MM-DD");
  };
  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };
  toggleModalEvent = () => {
    this.setState({ modalEvent: !this.state.modalEvent });
  };

  render() {
    const { event, calendarOptions, modal, modalEvent } = this.state;
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" style={{ marginBottom: 8 }}>
              Draggable Events
            </Typography>
            <Typography variant="body2">
              Just drap and drop events from there directly into the calendar.
            </Typography>
            <div
              ref={node => {
                this.externalEvents = node;
              }}
            >
              <div
                data-event='{ "classNames": ["bg-success", "text-white"], "title": "Make a tea" }'
                className={cn(
                  "d-flex",
                  "align-items-center",
                  "draggable",
                  "external-event",
                  s.widget
                )}
              >
                <Box display={"flex"}>
                  <Dot color="success" size="large" />
                  <Typography
                    variant="body2"
                    style={{ marginLeft: 8, color: "#000" }}
                  >
                    Make a tea
                  </Typography>
                </Box>
              </div>
              <div
                data-event='{ "classNames": ["bg-warning", "text-white"], "title": "Open windows" }'
                className={cn(
                  "d-flex",
                  "align-items-center",
                  "draggable",
                  "external-event",
                  s.widget
                )}
              >
                <Box display={"flex"}>
                  <Dot color="warning" size="large" />
                  <Typography
                    variant="body2"
                    style={{ marginLeft: 8, color: "#000" }}
                  >
                    Open windows
                  </Typography>
                </Box>
              </div>
              <div
                data-event='{ "classNames": ["bg-purple", "text-white"], "title": "Some stuff" }'
                className={cn(
                  "d-flex",
                  "align-items-center",
                  "draggable",
                  "external-event",
                  s.widget
                )}
              >
                <Box display={"flex"}>
                  <Dot color="info" size="large" />
                  <Typography
                    variant="body2"
                    style={{ marginLeft: 8, color: "#000" }}
                  >
                    Some stuff
                  </Typography>
                </Box>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <Widget disableWidgetMenu>
              <Grid
                container
                item
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                <Grid item>
                  <IconButton onClick={this.prev} aria-label="previous page">
                    <LeftArrowIcon />
                  </IconButton>
                  <IconButton onClick={this.next} aria-label="next page">
                    <RightArrowIcon />
                  </IconButton>
                  <Button onClick={this.today}>Today</Button>
                </Grid>
                <Grid item>
                  <Button
                    onClick={() => this.changeView("dayGridMonth")}
                    color={
                      this.state.calendarView === "dayGridMonth"
                        ? "primary"
                        : "none"
                    }
                    variant={
                      this.state.calendarView === "dayGridMonth"
                        ? "contained"
                        : "text"
                    }
                  >
                    Month
                  </Button>
                  <Button
                    onClick={() => this.changeView("timeGridWeek")}
                    color={
                      this.state.calendarView === "timeGridWeek"
                        ? "primary"
                        : "none"
                    }
                    variant={
                      this.state.calendarView === "timeGridWeek"
                        ? "contained"
                        : "text"
                    }
                    style={{ marginLeft: 8 }}
                  >
                    Week
                  </Button>
                  <Button
                    onClick={() => this.changeView("timeGridDay")}
                    color={
                      this.state.calendarView === "timeGridDay"
                        ? "primary"
                        : "none"
                    }
                    variant={
                      this.state.calendarView === "timeGridDay"
                        ? "contained"
                        : "text"
                    }
                    style={{ marginLeft: 8 }}
                  >
                    Day
                  </Button>
                  <Button
                    onClick={() => this.changeView("list")}
                    color={
                      this.state.calendarView === "list"
                        ? "primary"
                        : "none"
                    }
                    variant={
                      this.state.calendarView === "list"
                        ? "contained"
                        : "text"
                    }
                    style={{ marginLeft: 8 }}
                  >
                    List
                  </Button>
                </Grid>
              </Grid>
              <FullCalendar
                ref={node => {
                  this.fullCalendar = node;
                }}
                defaultView="dayGridMonth"
                plugins={this.state.calendarPlugins}
                select={this.select}
                eventClick={this.eventClick}
                drop={this.drop}
                {...calendarOptions}
              />
            </Widget>
          </Grid>
        </Grid>

        <Dialog open={modal} onClose={this.toggleModal} id="news-close-modal">
          <DialogTitle id="news-close-modal-label">
            Create New Event
          </DialogTitle>
          <Box m={3} flexDirection="column">
            <Typography variant="body2" style={{ marginBottom: 16 }}>
              Just enter event name to create a new one
            </Typography>
            <Input
              onChange={this.handleChange}
              className={s.calendarModalInput}
              value={event.title}
              name="title"
              placeholder="Title"
            />
            <Box mt={2}>
              <Button
                onClick={this.toggleModal}
                data-dismiss="modal"
                style={{ marginRight: 8 }}
              >
                Close
              </Button>{" "}
              <Button
                color="success"
                variant="contained"
                onClick={this.createEvent}
                id="news-widget-remove"
              >
                Create
              </Button>
            </Box>
          </Box>
        </Dialog>

        <Dialog
          open={modalEvent}
          onClose={this.toggleModalEvent}
          id="news-close-modal"
        >
          <DialogTitle id="news-close-modal-label">{event.title}</DialogTitle>
          <Box m={3}>
            <Typography style={{ marginBottom: 16 }}>
              <CalendarIcon style={{ marginRight: 8 }} />
              {this.getFormattedDate(event.start)}
            </Typography>
            <Typography variant="body2" style={{ marginBottom: 16 }}>
              {event.extendedProps && event.extendedProps.description}
            </Typography>
            <Button
              color="primary"
              variant="contained"
              onClick={this.toggleModalEvent}
              data-dismiss="modal"
            >
              OK
            </Button>
          </Box>
        </Dialog>
      </>
    );
  }
}

export default Calendar;
