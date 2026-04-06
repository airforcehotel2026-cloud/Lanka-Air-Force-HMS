<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
    <div class="print-hide">
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
      <div class="row items-center justify-between q-mb-sm">
        <div class="text-h6 text-slaf-primary text-weight-bold flex items-center">
          <q-icon name="notifications_active" class="q-mr-sm" /> Automated Event Alerts
        </div>
        <div class="q-gutter-sm">
          <q-btn
            unelevated
            rounded
            size="sm"
            :color="activeAlertFilter === 'All' ? 'slaf-primary' : 'grey-3'"
            :text-color="activeAlertFilter === 'All' ? 'white' : 'grey-8'"
            @click="activeAlertFilter = 'All'"
            label="All"
            class="action-btn"
          >
            <q-badge color="negative" floating rounded v-if="upcomingReminders.length">{{ upcomingReminders.length }}</q-badge>
          </q-btn>
          <q-btn
            unelevated
            rounded
            size="sm"
            :color="activeAlertFilter === 'T-14' ? 'negative' : 'grey-3'"
            :text-color="activeAlertFilter === 'T-14' ? 'white' : 'grey-8'"
            @click="activeAlertFilter = 'T-14'"
            label="T-14 Days"
            class="action-btn"
          >
            <q-badge color="white" text-color="black" floating rounded v-if="t14Count">{{ t14Count }}</q-badge>
          </q-btn>
          <q-btn
            unelevated
            rounded
            size="sm"
            :color="activeAlertFilter === 'T-45' ? 'warning' : 'grey-3'"
            :text-color="activeAlertFilter === 'T-45' ? 'white' : 'grey-8'"
            @click="activeAlertFilter = 'T-45'"
            label="T-45 Days"
            class="action-btn"
          >
            <q-badge color="white" text-color="black" floating rounded v-if="t45Count">{{ t45Count }}</q-badge>
          </q-btn>
        </div>
      </div>

      <div class="scroll custom-scrollbar" style="max-height: 280px; padding-right: 4px;">
        <div v-for="(reminder, index) in filteredReminders" :key="index" class="q-mb-sm">
          <q-banner
            v-if="reminder.type === 'T-14'"
            class="bg-red-1 text-red-9 border-negative shadow-1 q-py-xs cursor-pointer transition-scale"
            rounded
            dense
            @click="openOrderDetails(reminder)"
          >
            <template v-slot:avatar>
              <q-icon name="error" color="negative" size="sm" />
            </template>
            <div class="text-weight-bold text-subtitle2" style="line-height: 1.2;">
              T-14: {{ reminder.event }} ({{ reminder.date }})
            </div>
            <div class="text-caption" style="line-height: 1.2;">
              Finalize menu & collect balance. Client: {{ reminder.client }}
            </div>
            <template v-slot:action>
              <q-btn
                flat
                dense
                size="sm"
                color="negative"
                icon="phone"
                label="Call"
                @click.stop="callCustomer(reminder.phone)"
              />
            </template>
          </q-banner>

          <q-banner
            v-if="reminder.type === 'T-45'"
            class="bg-orange-1 text-orange-9 border-warning shadow-1 q-py-xs cursor-pointer transition-scale"
            rounded
            dense
            @click="openOrderDetails(reminder)"
          >
            <template v-slot:avatar>
              <q-icon name="warning" color="warning" size="sm" />
            </template>
            <div class="text-weight-bold text-subtitle2" style="line-height: 1.2;">
              T-45: {{ reminder.event }} ({{ reminder.date }})
            </div>
            <div class="text-caption" style="line-height: 1.2;">
              Collect 50% package payment. Client: {{ reminder.client }}
            </div>
            <template v-slot:action>
              <q-btn
                flat
                dense
                size="sm"
                color="warning"
                icon="phone"
                label="Call"
                @click.stop="callCustomer(reminder.phone)"
                text-color="orange-10"
              />
            </template>
          </q-banner>
        </div>
      </div>

      <!-- Invoice Modal -->
      <q-dialog v-model="orderModalOpen">
        <q-card style="min-width: 450px; max-width: 800px; border-radius: 12px;">
          <q-card-section class="bg-slaf-primary text-white row items-center justify-between">
            <div class="text-h6 flex items-center"><q-icon name="receipt_long" class="q-mr-sm" /> Order Details / Bill</div>
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section class="q-pt-md" v-if="selectedOrder">
            <!-- Bill Header -->
            <div class="row q-col-gutter-md q-mb-md">
              <div class="col-8">
                <div class="text-h6 text-weight-bold text-slaf-primary">{{ selectedOrder.client }}</div>
                <div class="text-caption text-grey-8"><q-icon name="phone" /> Phone: {{ selectedOrder.phone }}</div>
                <div class="text-caption text-grey-8"><q-icon name="event" /> Event: {{ selectedOrder.event }}</div>
              </div>
              <div class="col-4 text-right">
                <div class="text-weight-bold">Date: {{ selectedOrder.dateStr }}</div>
                <q-badge :color="selectedOrder.type === 'T-14' ? 'negative' : 'warning'" class="q-mt-xs">{{ selectedOrder.type }} Alert</q-badge>
              </div>
            </div>
            
            <q-separator class="q-my-sm" />

            <!-- Order Specs -->
            <div class="row q-mb-md">
              <div class="col-6">
                <div class="text-caption text-grey-6">Reserved Venue</div>
                <div class="text-body2 text-weight-bold">{{ selectedOrder.venue }}</div>
              </div>
              <div class="col-6 text-right">
                <div class="text-caption text-grey-6">Expected Pax</div>
                <div class="text-body2 text-weight-bold">{{ selectedOrder.pax }} Guests</div>
              </div>
            </div>

            <q-separator class="q-mb-md" />

            <!-- Financial Breakdown -->
            <div class="text-subtitle2 text-weight-bold q-mb-sm text-slaf-primary">Financial Summary</div>
            
            <div class="row justify-between q-mb-xs">
              <span class="text-grey-9">{{ selectedOrder.menu }} Package</span>
              <span class="text-weight-medium">Rs. {{ selectedOrder.totalAmount.toLocaleString() }}.00</span>
            </div>
            <div class="row justify-between q-mb-xs text-slaf-success">
              <span>Advance Paid</span>
              <span class="text-weight-bold">- Rs. {{ selectedOrder.paidAmount.toLocaleString() }}.00</span>
            </div>
            
            <q-separator class="q-my-sm" />
            
            <div class="row justify-between text-h6 text-weight-bold text-negative">
              <span>Balance Due</span>
              <span>Rs. {{ (selectedOrder.totalAmount - selectedOrder.paidAmount).toLocaleString() }}.00</span>
            </div>
            <div class="text-right text-caption text-grey-6 q-mt-sm">
              Action Required: {{ selectedOrder.type === 'T-14' ? 'Collect full balance before event.' : 'Collect 50% package payment.' }}
            </div>
          </q-card-section>

          <q-card-actions align="right" class="bg-grey-1 q-pa-md">
            <q-btn flat label="Close" color="grey-8" v-close-popup />
            <q-btn icon="print" outline label="Print Bill" color="slaf-primary" @click="printBill" />
            <q-btn icon="payment" unelevated label="Collect Payment" color="slaf-success" @click="collectPayment" />
          </q-card-actions>
        </q-card>
      </q-dialog>
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
    </div>

    <!-- Hidden Print Section (Invoice/BEO Style) -->
    <div class="invoice-section bg-white text-black" v-if="selectedOrder">
      <div
        class="row items-center justify-between q-mb-lg pb-4"
        style="border-bottom: 2px solid #00308f; padding-bottom: 20px;"
      >
        <div class="row items-center">
          <img
            :src="logoUrl"
            alt="Eagles' Lagoon View"
            class="q-mr-md"
            style="height: 65px; width: auto; object-fit: contain"
          />
          <div>
            <h1 class="text-h4 text-weight-bold q-my-none" style="color: #00308f">
              Eagles' Lagoon View
            </h1>
            <div class="text-subtitle1 text-grey-8">Dashboard Collection Bill</div>
          </div>
        </div>
        <div class="text-right">
          <div class="text-weight-bold" style="color: #00308f">Print Date</div>
          <div>{{ new Date().toLocaleDateString('en-GB') }}</div>
        </div>
      </div>

      <div class="row q-col-gutter-lg q-mb-lg">
        <div class="col-6">
          <div class="text-weight-bold text-uppercase q-mb-sm" style="color: #00308f">
            Client Details
          </div>
          <div><strong>Name:</strong> {{ selectedOrder.client }}</div>
          <div><strong>Phone:</strong> {{ selectedOrder.phone }}</div>
        </div>
        <div class="col-6">
          <div class="text-weight-bold text-uppercase q-mb-sm" style="color: #00308f">
            Event Info
          </div>
          <div><strong>Event:</strong> {{ selectedOrder.event }}</div>
          <div><strong>Date:</strong> {{ selectedOrder.dateStr }}</div>
          <div><strong>Venue:</strong> {{ selectedOrder.venue }}</div>
          <div><strong>Expected Pax:</strong> {{ selectedOrder.pax }}</div>
        </div>
      </div>

      <div class="text-weight-bold text-uppercase q-mb-sm q-mt-lg" style="color: #00308f">
        Financial Summary
      </div>
      <table class="full-width invoice-table text-right">
        <thead>
          <tr style="background-color: #f5f5f5">
            <th class="text-left">Description</th>
            <th>Amount (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-left">{{ selectedOrder.menu }} Package ({{ selectedOrder.pax }} Pax)</td>
            <td>{{ selectedOrder.totalAmount.toLocaleString() }}.00</td>
          </tr>
          <tr>
            <td class="text-left">- Advance Paid</td>
            <td style="color: #c10015">- {{ selectedOrder.paidAmount.toLocaleString() }}.00</td>
          </tr>
          <tr
            style="
              font-size: 1.2em;
              border-top: 2px solid #00308f;
              border-bottom: 2px solid #00308f;
              background-color: #e3f2fd;
              color: #00308f;
            "
          >
            <td class="text-left text-weight-bold">Final Balance Pending</td>
            <td class="text-weight-bold">{{ (selectedOrder.totalAmount - selectedOrder.paidAmount).toLocaleString() }}.00</td>
          </tr>
        </tbody>
      </table>

      <div class="row justify-between q-mt-xl pt-xl" style="padding-top: 80px">
        <div class="text-center" style="width: 200px; border-top: 1px solid #000; padding-top: 5px">
          Client Signature
        </div>
        <div class="text-center" style="width: 200px; border-top: 1px solid #000; padding-top: 5px">
          Authorized Officer
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

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
const activeAlertFilter = ref('All')

const orderModalOpen = ref(false)
const selectedOrder = ref(null)

const openOrderDetails = (order) => {
  selectedOrder.value = order
  orderModalOpen.value = true
}

const printBill = () => {
  window.print()
  $q.notify({
    type: 'positive',
    message: `Printing bill for ${selectedOrder.value.client}...`,
    icon: 'print',
    position: 'top-right'
  })
}

const collectPayment = () => {
  const amountToCollect = selectedOrder.value.totalAmount - selectedOrder.value.paidAmount
  
  $q.notify({
    type: 'positive',
    message: `Payment of Rs. ${amountToCollect.toLocaleString()} collected from ${selectedOrder.value.client}!`,
    icon: 'check_circle',
    position: 'top-right'
  })
  
  // Update mock DB (remove this order from notifications)
  upcomingReminders.value = upcomingReminders.value.filter(r => r !== selectedOrder.value)
  
  // Close the modal
  orderModalOpen.value = false
}

const t14Count = computed(() => upcomingReminders.value.filter((r) => r.type === 'T-14').length)
const t45Count = computed(() => upcomingReminders.value.filter((r) => r.type === 'T-45').length)

const filteredReminders = computed(() => {
  if (activeAlertFilter.value === 'All') {
    return upcomingReminders.value
  }
  return upcomingReminders.value.filter((r) => r.type === activeAlertFilter.value)
})

// In a real application, this would be an API call to your database (e.g. Supabase)
const checkUpcomingEvents = () => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Mocking database records for upcoming events
  const dbEvents = []
  
  // Add 20 T-14 events
  for(let i = 1; i <= 20; i++) {
    dbEvents.push({
      client: `Sqn Ldr Perera ${i}`,
      event: `Wedding Reception ${i}`,
      dateStr: new Date(today.getTime() + 12 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      phone: `07712345${i.toString().padStart(2, '0')}`,
      venue: 'Main Banquet Hall',
      pax: 350 + i * 5,
      menu: 'SLAF Platinum Package',
      totalAmount: 1100000,
      paidAmount: 550000
    })
  }

  // Add 20 T-45 events
  for(let i = 1; i <= 20; i++) {
    dbEvents.push({
      client: `Mr. Nimal Fernando ${i}`,
      event: `Corporate Dinner ${i}`,
      dateStr: new Date(today.getTime() + 40 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      phone: `07198765${i.toString().padStart(2, '0')}`,
      venue: 'Lagoon Garden',
      pax: 150 + i * 2,
      menu: 'Standard Buffet Package',
      totalAmount: 450000,
      paidAmount: 50000
    })
  }

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

.invoice-section {
  display: none;
}

@media print {
  @page {
    margin: 1cm;
    size: auto;
  }

  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background-color: white !important;
  }

  .print-hide,
  .q-drawer-container,
  .q-header,
  .q-footer,
  aside.q-drawer,
  .q-layout__shadow,
  .q-dialog,
  .q-dialog__backdrop {
    display: none !important;
  }

  .q-page-container {
    padding: 0 !important;
  }

  .invoice-section {
    display: block !important;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    margin: 0;
    padding: 20px;
  }

  .invoice-table {
    border-collapse: collapse;
  }
  
  .invoice-table td,
  .invoice-table th {
    border: 1px solid #ccc;
    padding: 10px;
  }
}
</style>
