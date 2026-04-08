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
        title: 'Wedding - Mr. Nimal Perera',
        client: 'Mr. Nimal Perera',
        date: getRelativeDateStr(2),
        timeFrom: '08:30',
        timeTo: '16:00',
        venue: 'Main Banquet Hall',
        package: 'Golden Eagle Menu',
        pax: 150,
        status: 'Confirmed',
        color: 'slaf-primary',
        clientDetails: {
          nic: '85234167V',
          mobile: '0771234567',
          address: 'No 45, Galle Road, Colombo',
          email: 'nimal@example.com'
        },
        beoDetails: {
          location: "Eagles' Lagoon View",
          poruwaTime: '09:30 AM',
          servingTime: '12:30 PM',
          menuSelection: '<ul><li>Selectable: 2 Items (Steamed Rice, Fried Rice)</li><li>Selectable: 2 Items (Chicken Curry, Pork Stew)</li></ul>',
          setup: 'Golden Theme, Traditional Poruwa',
          seatCovers: 'Gold & White',
          decorations: 'Fresh Orchid arrangements',
          multimedia: 'Screen + Mic setup',
          coordinator: 'Major Samantha',
          specialRemarks: 'Allergic to Sea Food (Some guests)'
        },
        billing: {
          mainPackageTotal: 150 * 4500,
          extraFoodTotal: 45000,
          otherChargesTotal: 25000,
          grandTotal: (150 * 4500) + 45000 + 25000,
          discount: 10000,
          deposit: 20000,
          advance: 50000,
          finalDue: ((150 * 4500) + 45000 + 25000) + 20000 - 10000 - 50000
        }
      },
      {
        id: 'evt-2',
        title: 'Meeting - Dialog Axiata',
        client: 'Dialog Axiata',
        date: getRelativeDateStr(5),
        timeFrom: '09:00',
        timeTo: '17:00',
        venue: 'Conference Room',
        package: 'Corporate Menu',
        pax: 50,
        status: 'Confirmed',
        color: 'orange-9',
        clientDetails: {
          nic: 'CORP-DIALOG-01',
          mobile: '0112445566',
          address: 'Union Place, Colombo 02',
          email: 'events@dialog.lk'
        },
        beoDetails: {
          location: 'Conference Room A',
          poruwaTime: 'N/A',
          servingTime: '12:00 PM',
          menuSelection: '<ul><li>Buffet Lunch</li><li>Coffee & Snacks</li></ul>',
          setup: 'U-shape seating',
          seatCovers: 'White',
          decorations: 'Company Banners',
          multimedia: 'Projector + Wireless Mic',
          coordinator: 'Capt. Silva',
          specialRemarks: 'Needs 5 extra power strips'
        },
        billing: {
          mainPackageTotal: 50 * 3500,
          extraFoodTotal: 15000,
          otherChargesTotal: 10000,
          grandTotal: (50 * 3500) + 15000 + 10000,
          discount: 0,
          deposit: 10000,
          advance: 25000,
          finalDue: ((50 * 3500) + 15000 + 10000) + 10000 - 0 - 25000
        }
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
