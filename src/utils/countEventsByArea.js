const countEventsByArea = (input) => {
  return Object.keys(input).reduce((result, area) => {
    const validEvents = input[area].filter((event) => event.affected_type)

    if (!validEvents) {
      return
    }

    result[area] = validEvents.reduce((eventCounts, eventItem) => {
      const event = eventItem.affected_type

      if (!eventCounts[event]) {
        eventCounts[event] = {
          type: event,
          number: 0,
          lon: eventItem.lon,
          lat: eventItem.lat,
        }
      }

      eventCounts[event].number += 1
      return eventCounts
    }, {})
    return result
  }, {})
}

export default countEventsByArea
