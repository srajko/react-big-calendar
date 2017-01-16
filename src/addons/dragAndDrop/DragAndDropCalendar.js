import React from 'react';

import DraggableEventWrapper from './DraggableEventWrapper'
import { DayWrapper, DateCellWrapper } from './backgroundWrapper'
import cn from 'classnames';

export default class DragAndDropCalendar extends React.Component {
  static propTypes = {
    Calendar: React.PropTypes.func.isRequired,
    components: React.PropTypes.object,
    onEventDrop: React.PropTypes.func.isRequired,
    selectable: React.PropTypes.oneOf([true, false, 'ignoreEvents']).isRequired
  }

  static contextTypes = {
    dragDropManager: React.PropTypes.object
  }

  static childContextTypes = {
    onEventDrop: React.PropTypes.func
  }

  getChildContext () {
    return { onEventDrop: this.props.onEventDrop }
  }

  constructor(...args) {
    super(...args);
    this.state = { isDragging: false };
  }

  componentWillMount() {
    let monitor = this.context.dragDropManager.getMonitor()
    this.monitor = monitor
    this.unsubscribeToStateChange = monitor
      .subscribeToStateChange(this.handleStateChange)
  }

  componentWillUnmount() {
    this.monitor = null
    this.unsubscribeToStateChange()
  }

  handleStateChange = () => {
    const isDragging = !!this.monitor.getItem();

    if (isDragging !== this.state.isDragging) {
      setTimeout(() => this.setState({ isDragging }));
    }
  }

  render() {
    const { Calendar, selectable, components, ...props } = this.props;

    delete props.onEventDrop;

    props.selectable = selectable
      ? 'ignoreEvents' : false;

    props.className = cn(
      props.className,
      'rbc-addons-dnd',
      this.state.isDragging && 'rbc-addons-dnd-is-dragging'
    )

    props.components = {
      ...components,
      eventWrapper: DraggableEventWrapper,
      dateCellWrapper: DateCellWrapper,
      dayWrapper: DayWrapper
    }

    return <Calendar {...props} />
  }
}
