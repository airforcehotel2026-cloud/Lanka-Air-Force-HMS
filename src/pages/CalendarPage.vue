<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
    <!-- Header -->
    <header
      class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
    >
      <div class="row items-center q-gutter-md">
        <q-btn
          flat
          dense
          icon="chevron_left"
          class="bg-blue-1 text-slaf-primary rounded-borders q-px-sm"
          @click="prevMonth"
        />
        <div
          class="text-h4 text-slaf-primary text-weight-bold"
          style="width: 280px; text-align: center; letter-spacing: -0.5px"
        >
          {{ currentMonthName }} <span class="text-grey-5">{{ currentYear }}</span>
        </div>
        <q-btn
          flat
          dense
          icon="chevron_right"
          class="bg-blue-1 text-slaf-primary rounded-borders q-px-sm"
          @click="nextMonth"
        />
        <q-btn
          outline
          color="slaf-primary"
          label="Today"
          class="q-ml-lg bg-blue-1 border-slaf-primary text-weight-bold transition-bg"
          @click="goToToday"
        />
      </div>

      <div class="row q-gutter-sm">
        <q-btn
          unelevated
          color="slaf-accent"
          text-color="black"
          icon="add"
          label="New Event"
          class="text-weight-bold"
          to="/banquet"
        />
      </div>
    </header>

    <!-- Calendar Grid -->
    <q-card class="shadow-1 rounded-borders q-pa-sm bg-white overflow-hidden">
      <!-- Days of week header -->
      <div
        class="row text-center text-weight-bold text-slaf-primary q-py-sm bg-blue-1 rounded-borders q-mb-sm text-subtitle2"
      >
        <div class="col" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
      </div>

      <!-- Calendar Dates -->
      <div class="calendar-grid">
        <div
          v-for="(dateObj, index) in calendarDays"
          :key="index"
          class="calendar-day bg-white"
          :class="{
            'text-grey-5 bg-grey-1': !dateObj.isCurrentMonth,
            'is-today': dateObj.isToday,
          }"
          @click="openDayModal(dateObj.fullDate)"
        >
          <div
            class="day-number text-weight-bold q-pa-xs text-right text-subtitle1"
            :class="dateObj.isCurrentMonth ? 'text-grey-9' : 'text-grey-4'"
          >
            {{ dateObj.date }}
          </div>

          <div class="q-px-xs q-pb-xs event-container">
            <div
              v-for="evt in eventStore.getEventsByDate(dateObj.fullDate)"
              :key="evt.id"
              class="event-pill text-white q-px-xs q-py-xs q-mb-xs rounded-borders row items-center no-wrap"
              :class="`bg-${evt.color}`"
              @click.stop="openEventDetails(evt)"
            >
              <q-icon name="circle" size="6px" class="q-mr-xs text-white" style="opacity: 0.8" />
              <div class="text-caption ellipsis text-weight-medium" style="font-size: 11px">
                {{ evt.timeFrom }} {{ evt.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-card>

    <!-- Day Events Modal -->
    <q-dialog v-model="isDayModalOpen">
      <q-card style="width: 500px; max-width: 80vw">
        <q-card-section class="bg-slaf-primary text-white row items-center justify-between">
          <div class="text-h6 text-weight-bold">Events on {{ selectedDateFormatted }}</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div v-if="selectedDayEvents.length === 0" class="text-center text-grey-6 q-py-lg">
            <q-icon name="event_busy" size="48px" class="q-mb-sm" />
            <div class="text-subtitle1">No events scheduled for this day.</div>
          </div>

          <q-list v-else bordered separator class="rounded-borders">
            <q-item
              v-for="evt in selectedDayEvents"
              :key="evt.id"
              clickable
              v-ripple
              @click="openEventDetails(evt)"
            >
              <q-item-section avatar>
                <q-avatar :color="evt.color" text-color="white" icon="event" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold text-slaf-primary">{{
                  evt.title
                }}</q-item-label>
                <q-item-label caption
                  >{{ evt.timeFrom }} - {{ evt.timeTo }} | {{ evt.venue }}</q-item-label
                >
              </q-item-section>
              <q-item-section side>
                <q-badge :color="evt.status === 'Confirmed' ? 'green' : 'orange'">{{
                  evt.status
                }}</q-badge>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="right" class="bg-grey-2 text-slaf-primary">
          <q-btn flat label="Close" v-close-popup />
          <q-btn color="slaf-primary" label="Add Event Here" to="/banquet" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Single Event Details Modal -->
    <q-dialog v-model="isEventModalOpen">
      <q-card style="width: 600px; max-width: 90vw">
        <q-card-section
          class="text-white row items-center justify-between"
          :class="`bg-${selectedEvent?.color || 'slaf-primary'}`"
        >
          <div class="text-h6 text-weight-bold">{{ selectedEvent?.title }}</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div class="row q-col-gutter-md">
            <div class="col-6">
              <div class="text-caption text-grey-7">Client</div>
              <div class="text-subtitle1 text-weight-bold">{{ selectedEvent?.client }}</div>
            </div>
            <div class="col-6 text-right">
              <div class="text-caption text-grey-7">Status</div>
              <q-badge
                :color="selectedEvent?.status === 'Confirmed' ? 'green' : 'orange'"
                class="text-subtitle2 q-px-sm"
                >{{ selectedEvent?.status }}</q-badge
              >
            </div>

            <div class="col-12"><q-separator /></div>

            <div class="col-6">
              <div class="text-caption text-grey-7"><q-icon name="calendar_today" /> Date</div>
              <div class="text-subtitle2">{{ selectedEvent?.date }}</div>
            </div>
            <div class="col-6">
              <div class="text-caption text-grey-7"><q-icon name="schedule" /> Time</div>
              <div class="text-subtitle2">
                {{ selectedEvent?.timeFrom }} to {{ selectedEvent?.timeTo }}
              </div>
            </div>

            <div class="col-6">
              <div class="text-caption text-grey-7"><q-icon name="place" /> Venue</div>
              <div class="text-subtitle2">{{ selectedEvent?.venue }}</div>
            </div>
            <div class="col-6">
              <div class="text-caption text-grey-7"><q-icon name="people" /> Guest Count</div>
              <div class="text-subtitle2">{{ selectedEvent?.pax }} Pax</div>
            </div>

            <div class="col-12"><q-separator /></div>

            <div class="col-12">
              <div class="text-caption text-grey-7">
                <q-icon name="restaurant_menu" /> Package Selected
              </div>
              <div class="text-subtitle2 text-slaf-primary text-weight-bold">
                {{ selectedEvent?.package }}
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-grey-2 text-slaf-primary">
          <q-btn flat label="Close" v-close-popup />
          <q-btn outline color="slaf-primary" icon="edit" label="Edit Booking" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useEventStore } from 'src/stores/eventStore'
import { date } from 'quasar'

const eventStore = useEventStore()

onMounted(() => {
  eventStore.initializeStore()
})

// Current viewing date context
const viewingDate = ref(new Date())

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const currentMonthName = computed(() => date.formatDate(viewingDate.value, 'MMMM'))
const currentYear = computed(() => date.formatDate(viewingDate.value, 'YYYY'))

const prevMonth = () => {
  viewingDate.value = date.subtractFromDate(viewingDate.value, { months: 1 })
}

const nextMonth = () => {
  viewingDate.value = date.addToDate(viewingDate.value, { months: 1 })
}

const goToToday = () => {
  viewingDate.value = new Date()
}

// Generate the 42 cells (6 weeks) for the calendar grid
const calendarDays = computed(() => {
  const year = viewingDate.value.getFullYear()
  const month = viewingDate.value.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)

  const daysInMonth = lastDayOfMonth.getDate()
  const startingDayOfWeek = firstDayOfMonth.getDay() // 0 = Sunday

  const days = []

  // Previous month padding
  const prevMonthLastDay = new Date(year, month, 0).getDate()
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const d = prevMonthLastDay - i
    const fullDateStr = `${month === 0 ? year - 1 : year}-${String(month === 0 ? 12 : month).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    days.push({ date: d, isCurrentMonth: false, fullDate: fullDateStr, isToday: false })
  }

  const todayStr = date.formatDate(new Date(), 'YYYY-MM-DD')

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const fullDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    days.push({
      date: d,
      isCurrentMonth: true,
      fullDate: fullDateStr,
      isToday: fullDateStr === todayStr,
    })
  }

  // Next month padding to fill exactly 42 slots (6 weeks)
  const remainingSlots = 42 - days.length
  for (let d = 1; d <= remainingSlots; d++) {
    const nextMonthVal = month === 11 ? 1 : month + 2
    const nextYearVal = month === 11 ? year + 1 : year
    const fullDateStr = `${nextYearVal}-${String(nextMonthVal).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    days.push({ date: d, isCurrentMonth: false, fullDate: fullDateStr, isToday: false })
  }

  return days
})

// Modal States
const isDayModalOpen = ref(false)
const selectedDateStr = ref('')

const selectedDateFormatted = computed(() => {
  if (!selectedDateStr.value) return ''
  return date.formatDate(new Date(selectedDateStr.value), 'dddd, MMMM Do YYYY')
})

const selectedDayEvents = computed(() => {
  if (!selectedDateStr.value) return []
  return eventStore.getEventsByDate(selectedDateStr.value)
})

const openDayModal = (dateStr) => {
  selectedDateStr.value = dateStr
  isDayModalOpen.value = true
}

// Single Event Detail Modal
const isEventModalOpen = ref(false)
const selectedEvent = ref(null)

const openEventDetails = (evt) => {
  selectedEvent.value = evt
  isEventModalOpen.value = true
}
</script>

<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(130px, auto); /* Taller cells for better look */
  gap: 1px;
  background-color: #e8eaf6; /* Soft blue-grey border color */
  border: 1px solid #e8eaf6;
  border-radius: 8px;
  overflow: hidden;
}

.calendar-day {
  min-height: 130px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
}

.calendar-day:hover {
  background-color: #f0f4fa !important;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.02);
}

.is-today {
  background-color: #f7faff;
}

.is-today .day-number {
  background: linear-gradient(135deg, #00308f, #0050d0);
  color: white !important;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  margin-left: auto;
  margin-right: 4px;
  box-shadow: 0 4px 8px rgba(0, 48, 143, 0.3);
}

.event-container {
  flex-grow: 1;
  overflow-y: auto;
  max-height: 95px;
}

/* Hide scrollbar for cleaner look */
.event-container::-webkit-scrollbar {
  width: 4px;
}
.event-container::-webkit-scrollbar-thumb {
  background-color: #b0bec5;
  border-radius: 4px;
}

.event-pill {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  border-left: 3px solid rgba(255, 255, 255, 0.4);
}
.event-pill:hover {
  transform: translateY(-1px) scale(1.02);
  filter: brightness(1.1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.transition-bg:hover {
  background-color: #e3f2fd !important;
}
</style>
