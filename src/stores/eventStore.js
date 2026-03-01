import { defineStore } from 'pinia'

// Helper to get formatted date string relative to today
const getRelativeDateStr = (daysOffset) => {
  const d = new Date()
  d.setDate(d.getDate() + daysOffset)
  return d.toISOString().split('T')[0]
}

export const useEventStore = defineStore('events', {
  state: () => ({
    events: [
      {
        id: 'evt-1',
        title: 'Perera Wedding',
        client: 'Mr. Nimal Perera',
        date: getRelativeDateStr(2),
        timeFrom: '08:30',
        timeTo: '16:00',
        venue: 'Main Banquet Hall',
        package: 'Golden Eagle Menu',
        pax: 150,
        status: 'Confirmed',
        color: 'slaf-primary',
      },
      {
        id: 'evt-2',
        title: 'Dialog Corporate Meeting',
        client: 'Dialog Axiata',
        date: getRelativeDateStr(5),
        timeFrom: '09:00',
        timeTo: '17:00',
        venue: 'Conference Room',
        package: 'Corporate Menu',
        pax: 50,
        status: 'Confirmed',
        color: 'orange-9',
      },
      {
        id: 'evt-3',
        title: 'Silva Family Get-together',
        client: 'Mrs. Silva',
        date: getRelativeDateStr(-3),
        timeFrom: '19:00',
        timeTo: '23:30',
        venue: 'Garden Area',
        package: 'BBQ Menu - Outdoor',
        pax: 80,
        status: 'Completed',
        color: 'slaf-accent',
      },
      {
        id: 'evt-4',
        title: 'Air Force Annual Dinner',
        client: 'SLAF Base Commander',
        date: getRelativeDateStr(15),
        timeFrom: '19:30',
        timeTo: '23:59',
        venue: 'Main Banquet Hall',
        package: 'Platinum Eagle Menu',
        pax: 200,
        status: 'Tentative',
        color: 'grey-7',
      },
      {
        id: 'evt-5',
        title: 'Birthday Party - Kavindu',
        client: 'Kavindu Fernando',
        date: getRelativeDateStr(2),
        timeFrom: '19:00',
        timeTo: '23:00',
        venue: 'Outdoor',
        package: 'Regular Menu - Outdoor',
        pax: 60,
        status: 'Confirmed',
        color: 'light-blue-9',
      },
    ],
  }),
  getters: {
    // Get events for a specific YYYY-MM-DD
    getEventsByDate: (state) => (dateStr) => {
      return state.events
        .filter((event) => event.date === dateStr)
        .sort((a, b) => a.timeFrom.localeCompare(b.timeFrom))
    },
  },
  actions: {
    initializeStore() {
      const savedEvents = localStorage.getItem('slaf-events')
      if (savedEvents) {
        try {
          this.events = JSON.parse(savedEvents)
        } catch (error) {
          console.error('Failed to parse saved events', error)
        }
      } else {
        // Save defaults if empty
        this.saveToStorage()
      }
    },
    saveToStorage() {
      localStorage.setItem('slaf-events', JSON.stringify(this.events))
    },
    addEvent(event) {
      this.events.push({
        ...event,
        id: 'evt-' + Date.now().toString(),
      })
      this.saveToStorage()
    },
    updateEvent(id, updatedEvent) {
      const index = this.events.findIndex((e) => e.id === id)
      if (index !== -1) {
        this.events[index] = { ...this.events[index], ...updatedEvent }
        this.saveToStorage()
      }
    },
    deleteEvent(id) {
      this.events = this.events.filter((e) => e.id !== id)
      this.saveToStorage()
    },
  },
})
