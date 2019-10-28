import React from "react";
import { Grid, Box, IconButton } from "@material-ui/core";
import {
  KeyboardArrowLeft as LeftArrowIcon,
  KeyboardArrowRight as RightArrowIcon,
} from "@material-ui/icons";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

import moment from "moment/moment";

//components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
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
        header: {
          left: "",
          center: "",
          right: "",
        },
        events: [
          {
            title: "All Day Event",
            start: new Date(y, m, 1),
            backgroundColor: "#79A5F0",
            textColor: "#fff",
            description: "Will be busy throughout the whole day",
          },
          {
            title: "Long Event",
            start: new Date(y, m, d + 5),
            end: new Date(y, m, d + 7),
            textColor: "#333",
            description: "This conference should be worse visiting",
          },
          {
            id: 999,
            title: "Blah Blah Car",
            start: new Date(y, m, d - 3, 16, 0),
            allDay: false,
            textColor: "#333",
            description: "Agree with this guy on arrival time",
          },
          {
            id: 1000,
            title: "Buy this template",
            start: new Date(y, m, d + 3, 12, 0),
            allDay: false,
            backgroundColor: "#555",
            textColor: "#fff",
            description: "Make sure everything is consistent first",
          },
          {
            title: "Got to school",
            start: new Date(y, m, d + 16, 12, 0),
            end: new Date(y, m, d + 16, 13, 0),
            backgroundColor: "#64bd63",
            textColor: "#fff",
            description: "Time to go back",
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
              " applications that run across distributed devices.",
          },
          {
            title: "Click for Flatlogic",
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            url: "http://flatlogic.com/",
            backgroundColor: "#e5603b",
            textColor: "#fff",
            description: "Creative solutions",
          },
        ],
        selectable: true,
        selectHelper: true,
        editable: true,
        droppable: true,
      },
      calendarPlugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      dragOptions: { zIndex: 999, revert: true, revertDuration: 0 },
    };
  }

  componentDidMount() {
    new Draggable(this.externalEvents, {
      itemSelector: ".external-event",
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
        editable: true,
      },
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
  changeView = view => {
    this.fullCalendar.getApi().changeView(view);
  };
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
    const {
      event,
      currentMonth,
      currentDay,
      calendarOptions,
      modal,
      modalEvent,
    } = this.state;
    return (
      <>
        <PageTitle title="Calendar" />
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h3">Draggable Events</Typography>
            <Typography variant="body2">
              Just drap and drop events from there directly into the calendar.
            </Typography>
            <div
              ref={node => {
                this.externalEvents = node;
              }}
              className="calendar-external-events mb-lg"
            >
              <Widget disableWidgetMenu>
                <div
                  data-event='{ "classNames": ["bg-success", "text-white"], "title": "Make a tea" }'
                  className="d-flex align-items-center external-event draggable"
                >
                  <Dot color="success" size="superlarge" />
                  <Typography variant="body2" style={{ marginLeft: 8 }}>
                    Make a tea
                  </Typography>
                </div>
              </Widget>
              <Widget disableWidgetMenu>
                <div
                  data-event='{ "classNames": ["bg-warning", "text-white"], "title": "Open windows" }'
                  className="d-flex align-items-center external-event draggable"
                >
                  <Dot color="warning" size="superlarge" />
                  <Typography variant="body2" style={{ marginLeft: 8 }}>
                    Open windows
                  </Typography>
                </div>
              </Widget>
              <Widget disableWidgetMenu>
                <div
                  data-event='{ "classNames": ["bg-purple", "text-white"], "title": "Some stuff" }'
                  className="d-flex align-items-center external-event draggable"
                >
                  <Dot color="info" size="superlarge" />
                  <Typography variant="body2" style={{ marginLeft: 8 }}>
                    Some stuff
                  </Typography>
                </div>
              </Widget>
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
                  >
                    Day
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

        {/* <Modal isOpen={modal} toggle={this.toggleModal} id="news-close-modal">
          <ModalHeader toggle={this.toggleModal} id="news-close-modal-label">
            Create New Event
          </ModalHeader>
          <ModalBody className="bg-white">
            Just enter event name to create a new one
            <Input
              onChange={this.handleChange}
              className={s.calendarModalInput}
              value={event.title}
              type="text"
              name="title"
              placeholder="Title"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="default"
              onClick={this.toggleModal}
              data-dismiss="modal"
            >
              Close
            </Button>{" "}
            <Button
              color="success"
              onClick={this.createEvent}
              id="news-widget-remove"
            >
              Create
            </Button>
          </ModalFooter>
        </Modal>

        <Modal
          isOpen={modalEvent}
          toggle={this.toggleModalEvent}
          id="news-close-modal"
        >
          <ModalHeader
            toggle={this.toggleModalEvent}
            id="news-close-modal-label"
          >
            {event.title}
          </ModalHeader>
          <ModalBody className="bg-white">
            <p class="text-muted">
              <i class="la la-calendar"></i>
              {this.getFormattedDate(event.start)}
            </p>
            <p>{event.extendedProps && event.extendedProps.description}</p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="default"
              onClick={this.toggleModalEvent}
              data-dismiss="modal"
            >
              OK
            </Button>
          </ModalFooter>
        </Modal> */}
      </>
    );
  }
}

export default Calendar;
