import React from 'react'
import { DragDropContext } from 'react-dnd'

import DragAndDropCalendar from './DragAndDropCalendar';

let html5Backend;

try {
  html5Backend = require('react-dnd-html5-backend')
} catch (err) { /* optional dep missing */}


export default function withDragAndDrop(Calendar, {
  backend = html5Backend
} = {}) {

  class DragAndDropCalendarWrapper extends React.Component {
    render() {
      return <DragAndDropCalendar {...this.props} Calendar={Calendar} />;
    }
  }

  return DragDropContext(backend)(DragAndDropCalendarWrapper);
}
