import React from 'react';
import {
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  TextField as Input,
  Box,
} from '@mui/material';
import {
  KeyboardArrowLeft as LeftArrowIcon,
  KeyboardArrowRight as RightArrowIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';

import s from './Calendar.module.scss';

import dayjs from 'utils/dayjs';
import cn from 'classnames';

// components
import Widget from '../../components/Widget';
import Dot from '../../components/Sidebar/components/Dot';
import { Button, Typography } from '../../components/Wrappers';

function createCalendarOptions() {
  const date = new Date();
  const d = date.getDate();
  const m = date.getMonth();
  const y = date.getFullYear();

  return {
    headerToolbar: {
      left: '',
      center: 'title',
      right: '',
    },
    events: [
      {
        title: 'All Day Event',
        start: new Date(y, m, 1),
        backgroundColor: '#79A5F0',
        textColor: '#fff',
        description: 'Will be busy throughout the whole day',
      },
      {
        title: 'Long Event',
        start: new Date(y, m, d + 5),
        end: new Date(y, m, d + 7),
        textColor: '#fff',
        description: 'This conference should be worse visiting',
      },
      {
        id: 999,
        title: 'Blah Blah Car',
        start: new Date(y, m, d - 3, 16, 0),
        allDay: false,
        textColor: '#333',
        description: 'Agree with this guy on arrival time',
      },
      {
        id: 1000,
        title: 'Buy this template',
        start: new Date(y, m, d + 3, 12, 0),
        allDay: false,
        backgroundColor: '#555',
        textColor: '#fff',
        description: 'Make sure everything is consistent first',
      },
      {
        title: 'Got to school',
        start: new Date(y, m, d + 16, 12, 0),
        end: new Date(y, m, d + 16, 13, 0),
        backgroundColor: '#64bd63',
        textColor: '#fff',
        description: 'Time to go back',
      },
      {
        title: 'Study some Node',
        start: new Date(y, m, d + 18, 12, 0),
        end: new Date(y, m, d + 18, 13, 0),
        backgroundColor: '#79A5F0',
        textColor: '#fff',
        description:
          "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.",
      },
      {
        title: 'Click for Flatlogic',
        start: new Date(y, m, 28),
        end: new Date(y, m, 29),
        url: 'http://flatlogic.com/',
        backgroundColor: '#e5603b',
        textColor: '#fff',
        description: 'Creative solutions',
      },
    ],
    selectable: true,
    selectHelper: true,
    editable: true,
    droppable: true,
  };
}

function Calendar() {
  const [event, setEvent] = React.useState({});
  const [modal, setModal] = React.useState(false);
  const [modalEvent, setModalEvent] = React.useState(false);
  const [calendarView, setCalendarView] = React.useState('dayGridMonth');

  const calendarOptions = React.useMemo(() => createCalendarOptions(), []);
  const calendarPlugins = React.useMemo(
    () => [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
    [],
  );

  const externalEventsRef = React.useRef(null);
  const fullCalendarRef = React.useRef(null);

  React.useEffect(() => {
    if (!externalEventsRef.current) {
      return undefined;
    }

    const draggable = new Draggable(externalEventsRef.current, {
      itemSelector: '.external-event',
    });

    return () => {
      draggable.destroy();
    };
  }, []);

  const getCalendarApi = () => fullCalendarRef.current?.getApi();

  const drop = (info) => {
    if (info.draggedEl?.parentNode) {
      info.draggedEl.parentNode.removeChild(info.draggedEl);
    }
  };

  const handleChange = (e) => {
    setEvent((prev) => ({ ...prev, title: e.target.value }));
  };

  const toggleModal = () => {
    setModal((prev) => !prev);
  };

  const toggleModalEvent = () => {
    setModalEvent((prev) => !prev);
  };

  const createEvent = () => {
    const api = getCalendarApi();
    if (!api) {
      return;
    }

    api.addEvent(event);
    api.unselect();
    toggleModal();
  };

  const select = ({ start, end, allDay }) => {
    setEvent({
      start,
      end,
      allDay,
      backgroundColor: '#64bd63',
      textColor: '#fff',
      editable: true,
    });
    toggleModal();
  };

  const eventClick = (e) => {
    setEvent(e.event);
    toggleModalEvent();
  };

  const prev = () => {
    getCalendarApi()?.prev();
  };

  const next = () => {
    getCalendarApi()?.next();
  };

  const today = () => {
    getCalendarApi()?.today();
  };

  const changeView = (view) => {
    setCalendarView(view);
    getCalendarApi()?.changeView(view);
  };

  const getFormattedDate = (date) => dayjs(date).format('YYYY-MM-DD');

  return (
    <>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant='h3' style={{ marginBottom: 8 }}>
            Draggable Events
          </Typography>
          <Typography variant='body2'>
            Just drap and drop events from there directly into the calendar.
          </Typography>
          <div ref={externalEventsRef}>
            <div
              data-event='{ "classNames": ["bg-success", "text-white"], "title": "Make a tea" }'
              className={cn(
                'd-flex',
                'align-items-center',
                'draggable',
                'external-event',
                s.widget,
              )}
            >
              <Box display={'flex'}>
                <Dot color='success' size='large' />
                <Typography variant='body2' style={{ marginLeft: 8, color: '#000' }}>
                  Make a tea
                </Typography>
              </Box>
            </div>
            <div
              data-event='{ "classNames": ["bg-warning", "text-white"], "title": "Open windows" }'
              className={cn(
                'd-flex',
                'align-items-center',
                'draggable',
                'external-event',
                s.widget,
              )}
            >
              <Box display={'flex'}>
                <Dot color='warning' size='large' />
                <Typography variant='body2' style={{ marginLeft: 8, color: '#000' }}>
                  Open windows
                </Typography>
              </Box>
            </div>
            <div
              data-event='{ "classNames": ["bg-purple", "text-white"], "title": "Some stuff" }'
              className={cn(
                'd-flex',
                'align-items-center',
                'draggable',
                'external-event',
                s.widget,
              )}
            >
              <Box display={'flex'}>
                <Dot color='info' size='large' />
                <Typography variant='body2' style={{ marginLeft: 8, color: '#000' }}>
                  Some stuff
                </Typography>
              </Box>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Widget disableWidgetMenu>
            <Grid container direction='row' justify='space-between' alignItems='center'>
              <Grid>
                <IconButton onClick={prev} aria-label='previous page'>
                  <LeftArrowIcon />
                </IconButton>
                <IconButton onClick={next} aria-label='next page'>
                  <RightArrowIcon />
                </IconButton>
                <Button onClick={today}>Today</Button>
              </Grid>
              <Grid>
                <Button
                  onClick={() => changeView('dayGridMonth')}
                  color={calendarView === 'dayGridMonth' ? 'primary' : 'none'}
                  variant={calendarView === 'dayGridMonth' ? 'contained' : 'text'}
                >
                  Month
                </Button>
                <Button
                  onClick={() => changeView('timeGridWeek')}
                  color={calendarView === 'timeGridWeek' ? 'primary' : 'none'}
                  variant={calendarView === 'timeGridWeek' ? 'contained' : 'text'}
                  style={{ marginLeft: 8 }}
                >
                  Week
                </Button>
                <Button
                  onClick={() => changeView('timeGridDay')}
                  color={calendarView === 'timeGridDay' ? 'primary' : 'none'}
                  variant={calendarView === 'timeGridDay' ? 'contained' : 'text'}
                  style={{ marginLeft: 8 }}
                >
                  Day
                </Button>
                <Button
                  onClick={() => changeView('list')}
                  color={calendarView === 'list' ? 'primary' : 'none'}
                  variant={calendarView === 'list' ? 'contained' : 'text'}
                  style={{ marginLeft: 8 }}
                >
                  List
                </Button>
              </Grid>
            </Grid>
            <FullCalendar
              ref={fullCalendarRef}
              initialView='dayGridMonth'
              plugins={calendarPlugins}
              select={select}
              eventClick={eventClick}
              drop={drop}
              {...calendarOptions}
            />
          </Widget>
        </Grid>
      </Grid>

      <Dialog open={modal} onClose={toggleModal} id='news-close-modal'>
        <DialogTitle id='news-close-modal-label'>Create New Event</DialogTitle>
        <Box m={3} flexDirection='column'>
          <Typography variant='body2' style={{ marginBottom: 16 }}>
            Just enter event name to create a new one
          </Typography>
          <Input
            onChange={handleChange}
            className={s.calendarModalInput}
            value={event.title || ''}
            name='title'
            placeholder='Title'
          />

          <Box mt={2}>
            <Button onClick={toggleModal} data-dismiss='modal' style={{ marginRight: 8 }}>
              Close
            </Button>{' '}
            <Button
              color='success'
              variant='contained'
              onClick={createEvent}
              id='news-widget-remove'
            >
              Create
            </Button>
          </Box>
        </Box>
      </Dialog>

      <Dialog open={modalEvent} onClose={toggleModalEvent} id='news-close-modal'>
        <DialogTitle id='news-close-modal-label'>{event.title}</DialogTitle>
        <Box m={3}>
          <Typography style={{ marginBottom: 16 }}>
            <CalendarIcon style={{ marginRight: 8 }} />
            {getFormattedDate(event.start)}
          </Typography>
          <Typography variant='body2' style={{ marginBottom: 16 }}>
            {event.extendedProps && event.extendedProps.description}
          </Typography>
          <Button
            color='primary'
            variant='contained'
            onClick={toggleModalEvent}
            data-dismiss='modal'
          >
            OK
          </Button>
        </Box>
      </Dialog>
    </>
  );
}

export default Calendar;
