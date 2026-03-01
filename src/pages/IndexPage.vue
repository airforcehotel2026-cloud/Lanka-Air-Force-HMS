<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
    <!-- Top Navigation Custom Header -->
    <header
      class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
    >
      <div class="row items-center q-gutter-md">
        <!-- Hotel Logo -->
        <img
          :src="logoUrl"
          alt="Eagles' Lagoon View"
          style="height: 55px; width: auto; object-fit: contain; mix-blend-mode: multiply"
        />
        <div>
          <h1 class="text-h5 text-weight-bold q-my-none text-slaf-primary">Eagles' Lagoon View</h1>
          <div class="text-caption text-grey-7">Receptionist Dashboard</div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="col-grow q-px-xl" style="max-width: 500px">
        <q-input
          v-model="searchQuery"
          dense
          outlined
          rounded
          placeholder="Search by Name, Service No., or Event..."
          class="bg-grey-1"
        >
          <template v-slot:prepend>
            <q-icon name="search" color="slaf-primary" />
          </template>
        </q-input>
      </div>

      <!-- Date/Time & Profile -->
      <div class="row items-center q-gutter-lg">
        <div class="text-right">
          <div class="text-subtitle2 text-weight-bold">{{ currentDate }}</div>
          <div class="text-caption text-grey-8">{{ currentTime }}</div>
        </div>
        <q-btn flat round dense>
          <q-avatar size="40px" color="grey-3">
            <q-icon name="person" color="slaf-primary" />
          </q-avatar>
        </q-btn>
      </div>
    </header>

    <!-- Global Reminders & Alerts automations -->
    <div class="q-mb-lg" v-if="upcomingReminders.length > 0">
      <div class="text-h6 text-slaf-primary text-weight-bold q-mb-sm">
        <q-icon name="notifications_active" class="q-mr-sm" /> Automated Event Alerts
      </div>

      <div v-for="(reminder, index) in upcomingReminders" :key="index" class="q-mb-sm">
        <q-banner
          v-if="reminder.type === 'T-14'"
          class="bg-red-1 text-red-9 border-negative shadow-1"
          rounded
        >
          <template v-slot:avatar>
            <q-icon name="error" color="negative" />
          </template>
          <div class="text-weight-bold text-subtitle1">
            T-14 Days: {{ reminder.event }} ({{ reminder.date }})
          </div>
          <div class="text-caption">
            Finalize the menu and collect the full remaining balance immediately. Client:
            {{ reminder.client }}
          </div>
          <template v-slot:action>
            <q-btn
              flat
              color="negative"
              icon="phone"
              label="Call Customer"
              @click="callCustomer(reminder.phone)"
            />
          </template>
        </q-banner>

        <q-banner
          v-if="reminder.type === 'T-45'"
          class="bg-orange-1 text-orange-9 border-warning shadow-1"
          rounded
        >
          <template v-slot:avatar>
            <q-icon name="warning" color="warning" />
          </template>
          <div class="text-weight-bold text-subtitle1">
            T-45 Days: {{ reminder.event }} ({{ reminder.date }})
          </div>
          <div class="text-caption">
            Client should pay 50% of the calculated total package by now. Client:
            {{ reminder.client }}
          </div>
          <template v-slot:action>
            <q-btn
              flat
              color="warning"
              icon="phone"
              label="Call Customer"
              @click="callCustomer(reminder.phone)"
              text-color="orange-10"
            />
          </template>
        </q-banner>
      </div>
    </div>

    <!-- Quick Stats Cards -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div v-for="(stat, index) in quickStats" :key="index" class="col-12 col-sm-6 col-md-3">
        <q-card class="slaf-stat-card shadow-1">
          <q-card-section class="row items-center justify-between">
            <div>
              <div class="text-overline text-grey-7">{{ stat.label }}</div>
              <div class="text-h4 text-weight-bold" :class="stat.colorClass">{{ stat.value }}</div>
            </div>
            <q-icon :name="stat.icon" size="40px" :class="stat.colorClass" class="opacity-80" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-lg">
      <!-- Live Venue Status Grid -->
      <div class="col-12 col-md-8">
        <q-card class="shadow-1 full-height">
          <q-card-section class="row items-center justify-between border-bottom">
            <div class="text-h6 text-slaf-primary text-weight-bold">
              <q-icon name="storefront" class="q-mr-sm" /> Live Venue Status
            </div>
            <div class="row q-gutter-sm text-caption text-weight-medium">
              <div class="row items-center">
                <span class="status-dot bg-slaf-success q-mr-xs"></span>Available
              </div>
              <div class="row items-center q-ml-md">
                <span class="status-dot bg-slaf-warning q-mr-xs"></span>Booked
              </div>
              <div class="row items-center q-ml-md">
                <span class="status-dot bg-slaf-maintenance q-mr-xs"></span>Maintenance
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <div class="row q-col-gutter-sm">
              <div v-for="venue in venueGrid" :key="venue.id" class="col-12 col-sm-6 col-md-4">
                <q-card
                  flat
                  bordered
                  class="room-card text-center cursor-pointer transition-scale"
                  :class="getVenueStatusClass(venue.status)"
                >
                  <q-card-section class="q-pa-sm">
                    <div class="text-h6 text-weight-bold">{{ venue.name }}</div>
                    <div class="text-caption text-uppercase text-weight-medium slaf-truncate">
                      {{ venue.type }}
                    </div>
                  </q-card-section>
                </q-card>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Recent Activity Table -->
      <div class="col-12 col-md-4">
        <q-card class="shadow-1 full-height">
          <q-card-section class="border-bottom row items-center">
            <div class="text-h6 text-slaf-primary text-weight-bold">
              <q-icon name="history" class="q-mr-sm" /> Recent Activity
            </div>
          </q-card-section>

          <q-list separator>
            <q-item v-for="(activity, index) in recentActivities" :key="index" class="q-py-md">
              <q-item-section avatar>
                <q-avatar
                  :color="getActivityColor(activity.type)"
                  text-color="white"
                  :icon="getActivityIcon(activity.type)"
                  size="md"
                />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">{{ activity.guestName }}</q-item-label>
                <q-item-label caption lines="1">
                  SVC: {{ activity.serviceNo }} • {{ activity.event }}
                </q-item-label>
              </q-item-section>
              <q-item-section side top>
                <q-item-label caption class="text-weight-medium">{{ activity.time }}</q-item-label>
                <q-badge
                  :color="getActivityColor(activity.type)"
                  :label="activity.type"
                  class="q-mt-xs"
                />
              </q-item-section>
            </q-item>
          </q-list>
          <q-card-actions align="center" class="q-pb-md text-slaf-primary">
            <q-btn flat label="View All History" class="full-width" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Logo URL using BASE_URL for correct path on GitHub Pages
const logoUrl = computed(() => import.meta.env.BASE_URL + 'images/logo.png')

// Reactive state
const searchQuery = ref('')
const currentDate = ref('')
const currentTime = ref('')
let timeInterval = null

// Mock Data
const quickStats = ref([
  { label: 'Upcoming Events', value: '12', icon: 'event', colorClass: 'text-slaf-primary' },
  { label: 'Events Today', value: '1', icon: 'celebration', colorClass: 'text-slaf-success' },
  { label: 'Pending Payments', value: '5', icon: 'payments', colorClass: 'text-slaf-accent' },
  {
    label: 'Cancellations',
    value: '0',
    icon: 'cancel',
    colorClass: 'text-slaf-warning',
  },
])

const venueGrid = ref([
  { id: '1', name: 'Main Banquet Hall', type: 'Indoor Venue', status: 'available' },
  { id: '2', name: 'Lagoon Garden', type: 'Outdoor Venue', status: 'booked' },
  { id: '3', name: 'Mini Hall', type: 'Indoor Venue', status: 'maintenance' },
])

const recentActivities = ref([
  {
    guestName: 'Wg Cdr Perera',
    serviceNo: '12345',
    event: 'Wedding Reception',
    type: 'Booking',
    time: '10 mins ago',
  },
  {
    guestName: 'Sqn Ldr Silva',
    serviceNo: '11223',
    event: 'Birthday Party',
    type: 'Payment',
    time: '25 mins ago',
  },
  {
    guestName: 'Flt Lt Fernando',
    serviceNo: '13579',
    event: 'Corporate Training',
    type: 'Inquiry',
    time: '1 hour ago',
  },
])

// Time management
const updateDateTime = () => {
  const now = new Date()
  currentDate.value = now.toLocaleDateString('en-GB', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
  currentTime.value = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
}

// Automated Global Reminders Logic
const upcomingReminders = ref([])

// In a real application, this would be an API call to your database (e.g. Supabase)
const checkUpcomingEvents = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Mocking database records for upcoming events
  const dbEvents = [
    {
      client: 'Sqn Ldr A.B. Perera',
      event: 'Wedding Reception',
      dateStr: new Date(today.getTime() + 12 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      phone: '0771234567',
    },
    {
      client: 'Mr. Nimal Fernando',
      event: 'Corporate Dinner',
      dateStr: new Date(today.getTime() + 40 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      phone: '0719876543',
    },
  ]

  const reminders = []

  dbEvents.forEach((evt) => {
    const eventDate = new Date(evt.dateStr)
    const diffTime = eventDate - today
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays <= 14 && diffDays >= 0) {
      reminders.push({ type: 'T-14', ...evt, date: evt.dateStr })
    } else if (diffDays <= 45 && diffDays > 14) {
      reminders.push({ type: 'T-45', ...evt, date: evt.dateStr })
    }
  })

  // Sort by urgency (T-14 first)
  upcomingReminders.value = reminders.sort((a) => (a.type === 'T-14' ? -1 : 1))
}

const callCustomer = (phone) => {
  window.location.href = `tel:${phone}`
}

// Helpers
const getVenueStatusClass = (status) => {
  switch (status) {
    case 'available':
      return 'bg-soft-green text-slaf-success border-success'
    case 'booked':
      return 'bg-soft-red text-slaf-warning border-warning'
    case 'maintenance':
      return 'bg-soft-orange text-slaf-maintenance border-maintenance'
    default:
      return 'bg-grey-2'
  }
}

const getActivityColor = (type) => {
  switch (type) {
    case 'Payment':
      return 'slaf-success'
    case 'Inquiry':
      return 'slaf-warning'
    case 'Booking':
      return 'slaf-accent'
    case 'Modification':
      return 'slaf-maintenance'
    default:
      return 'grey'
  }
}

const getActivityIcon = (type) => {
  switch (type) {
    case 'Payment':
      return 'payments'
    case 'Inquiry':
      return 'support_agent'
    case 'Booking':
      return 'event_available'
    case 'Modification':
      return 'edit'
    default:
      return 'info'
  }
}

// Lifecycle
onMounted(() => {
  updateDateTime()
  checkUpcomingEvents() // Run automated check when dashboard loads
  timeInterval = setInterval(updateDateTime, 1000)
})

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval)
})
</script>

<style lang="scss">
/* SLAF Branding Variables */
$slaf-primary: #00308f; /* Air Force Blue */
$slaf-accent: #ffd700; /* Gold */
$slaf-success: #4caf50; /* Green - Available */
$slaf-warning: #f44336; /* Red - Occupied */
$slaf-maintenance: #ff9800; /* Orange - Dirty/Maint */

/* Custom utility classes mimicking Quasar's style for our brand colors */
.border-warning {
  border: 1px solid #f2c037 !important;
}
.border-negative {
  border: 1px solid #c10015 !important;
}

.text-slaf-primary {
  color: $slaf-primary !important;
}
.bg-slaf-primary {
  background-color: $slaf-primary !important;
}

.text-slaf-accent {
  color: $slaf-accent !important;
}
.bg-slaf-accent {
  background-color: $slaf-accent !important;
}

.text-slaf-success {
  color: $slaf-success !important;
}
.bg-slaf-success {
  background-color: $slaf-success !important;
}

.text-slaf-warning {
  color: $slaf-warning !important;
}
.bg-slaf-warning {
  background-color: $slaf-warning !important;
}

.text-slaf-maintenance {
  color: $slaf-maintenance !important;
}
.bg-slaf-maintenance {
  background-color: $slaf-maintenance !important;
}

/* Soft background colors for room cards */
.bg-soft-green {
  background-color: rgba(76, 175, 80, 0.1) !important;
}
.bg-soft-red {
  background-color: rgba(244, 67, 54, 0.1) !important;
}
.bg-soft-orange {
  background-color: rgba(255, 152, 0, 0.1) !important;
}

/* Borders for room cards */
.border-success {
  border: 1px solid rgba(76, 175, 80, 0.4) !important;
}
.border-warning {
  border: 1px solid rgba(244, 67, 54, 0.4) !important;
}
.border-maintenance {
  border: 1px solid rgba(255, 152, 0, 0.4) !important;
}
.border-slaf-primary {
  border: 1px solid $slaf-primary !important;
}

.border-bottom {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 12px;
  margin-bottom: 12px;
}

/* Components Customization */
.slaf-dashboard {
  font-family:
    'Roboto',
    -apple-system,
    sans-serif;
}

.slaf-stat-card {
  border-radius: 12px;
  transition: transform 0.2s;
  border-left: 4px solid transparent;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 15px rgba(0, 48, 143, 0.15);
  }

  /* Add colored borders based on the icon color inside */
  &:nth-child(1) {
    border-left-color: $slaf-primary;
  }
  &:nth-child(2) {
    border-left-color: $slaf-success;
  }
  &:nth-child(3) {
    border-left-color: $slaf-accent;
  }
  &:nth-child(4) {
    border-left-color: $slaf-warning;
  }
}

.action-btn {
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}

.room-card {
  border-radius: 10px;
  height: 100%;

  &:hover {
    border-color: currentColor !important;
    background-color: white !important;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.transition-scale {
  transition: all 0.2s ease-in-out;
}

.opacity-80 {
  opacity: 0.8;
}

.slaf-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
