<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
    <!-- Header -->
    <header
      class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
    >
      <div class="row items-center q-gutter-md">
        <div class="text-h4 text-slaf-primary text-weight-bold" style="letter-spacing: -0.5px">
          Business Analytics <span class="text-grey-5">(Demo)</span>
        </div>
      </div>
      <div class="row q-gutter-sm">
        <q-btn
          outline
          color="slaf-primary"
          icon="file_download"
          label="Export Report"
          class="bg-blue-1 border-slaf-primary text-weight-bold transition-bg"
        />
      </div>
    </header>

    <!-- Key Performance Indicators (KPIs) -->
    <div class="row q-col-gutter-md q-mb-lg">
      <div class="col-12 col-md-3">
        <q-card
          class="kpi-card bg-white shadow-1 rounded-borders text-center q-pa-md border-top-primary"
        >
          <q-icon name="payments" size="40px" class="text-slaf-primary q-mb-sm" />
          <div class="text-h4 text-weight-bold text-grey-9">
            {{ formatCurrency(totalRevenue) }}
          </div>
          <div class="text-subtitle2 text-grey-7 text-uppercase">Est. Revenue (30 Days)</div>
        </q-card>
      </div>
      <div class="col-12 col-md-3">
        <q-card
          class="kpi-card bg-white shadow-1 rounded-borders text-center q-pa-md border-top-accent"
        >
          <q-icon name="event_available" size="40px" class="text-slaf-accent q-mb-sm" />
          <div class="text-h4 text-weight-bold text-grey-9">{{ totalEvents }}</div>
          <div class="text-subtitle2 text-grey-7 text-uppercase">Total Bookings</div>
        </q-card>
      </div>
      <div class="col-12 col-md-3">
        <q-card
          class="kpi-card bg-white shadow-1 rounded-borders text-center q-pa-md border-top-blue"
        >
          <q-icon name="groups" size="40px" class="text-light-blue-9 q-mb-sm" />
          <div class="text-h4 text-weight-bold text-grey-9">{{ totalPax }}</div>
          <div class="text-subtitle2 text-grey-7 text-uppercase">Total Guests Hosted</div>
        </q-card>
      </div>
      <div class="col-12 col-md-3">
        <q-card
          class="kpi-card bg-white shadow-1 rounded-borders text-center q-pa-md border-top-green"
        >
          <q-icon name="trending_up" size="40px" class="text-green-8 q-mb-sm" />
          <div class="text-h4 text-weight-bold text-grey-9">+15%</div>
          <div class="text-subtitle2 text-grey-7 text-uppercase">MoM Growth</div>
        </q-card>
      </div>
    </div>

    <!-- Quick Insights Panel -->
    <div class="row q-col-gutter-lg q-mb-lg">
      <!-- Package Popularity -->
      <div class="col-12 col-md-4">
        <q-card class="shadow-1 rounded-borders bg-white h-100 column">
          <q-card-section class="q-pb-none">
            <div class="text-h6 text-slaf-primary text-weight-bold">Top Packages</div>
          </q-card-section>
          <q-card-section class="col q-pt-md">
            <q-list separator>
              <q-item v-for="(pkg, idx) in packageStats.slice(0, 4)" :key="idx" class="q-px-none">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">{{ pkg.name }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-badge color="slaf-primary" class="text-weight-bold"
                    >{{ pkg.count }} Bookings</q-badge
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <!-- Upcoming Events -->
      <div class="col-12 col-md-4">
        <q-card class="shadow-1 rounded-borders bg-white h-100 column">
          <q-card-section class="q-pb-none">
            <div class="text-h6 text-slaf-primary text-weight-bold">Upcoming (Next 7 Days)</div>
          </q-card-section>
          <q-card-section class="col q-pt-md">
            <div v-if="upcomingEvents.length === 0" class="text-grey-6 text-center q-mt-md">
              <q-icon name="event_available" size="32px" class="q-mb-sm" />
              <div>No events in the next 7 days</div>
            </div>
            <q-list v-else separator>
              <q-item v-for="evt in upcomingEvents.slice(0, 3)" :key="evt.id" class="q-px-none">
                <q-item-section>
                  <q-item-label class="text-weight-bold text-grey-9">{{ evt.title }}</q-item-label>
                  <q-item-label caption>{{ evt.date }} &bull; {{ evt.timeFrom }}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-badge
                    :color="
                      evt.status === 'Confirmed'
                        ? 'green'
                        : evt.status === 'Completed'
                          ? 'blue'
                          : 'orange'
                    "
                    >{{ evt.status }}</q-badge
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <!-- Payment Status Overview -->
      <div class="col-12 col-md-4">
        <q-card class="shadow-1 rounded-borders bg-white h-100 column">
          <q-card-section class="q-pb-none">
            <div class="text-h6 text-slaf-primary text-weight-bold">Payment Overview</div>
          </q-card-section>
          <q-card-section class="col q-pt-lg column justify-center">
            <div class="row justify-between q-mb-sm">
              <div class="text-grey-8">Collected</div>
              <div class="text-weight-bold text-green-8">{{ formatCurrency(paidRevenue) }}</div>
            </div>
            <q-linear-progress
              :value="revenueProgress"
              color="green-6"
              track-color="orange-4"
              size="20px"
              class="rounded-borders q-mb-md"
            />
            <div class="row justify-between q-mb-sm">
              <div class="text-grey-8">Pending / Deposits</div>
              <div class="text-weight-bold text-orange-8">
                {{ formatCurrency(pendingRevenue) }}
              </div>
            </div>
            <div class="text-caption text-center text-grey-6 q-mt-sm">
              Total Expected: {{ formatCurrency(totalRevenue) }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Charts Section -->
    <div class="row q-col-gutter-lg q-mb-lg">
      <!-- Revenue Trend Chart -->
      <div class="col-12 col-md-8">
        <q-card class="shadow-1 rounded-borders bg-white h-100 column">
          <q-card-section class="q-pb-none">
            <div class="text-h6 text-slaf-primary text-weight-bold">
              Revenue Trend (Last 6 Months)
            </div>
          </q-card-section>
          <q-card-section class="col flex flex-center q-pa-lg">
            <!-- Pure CSS Bar Chart Representation -->
            <div class="trend-chart-container full-width">
              <div v-for="(stat, idx) in revenueTrend" :key="idx" class="trend-bar-group">
                <div class="trend-value text-caption text-grey-8 q-mb-xs">
                  LKR {{ (stat.value / 1000).toFixed(0) }}k
                </div>
                <div class="trend-track rounded-borders">
                  <div
                    class="trend-fill bg-slaf-primary rounded-borders"
                    :style="{ height: `${stat.percent}%` }"
                  ></div>
                </div>
                <div class="trend-label text-weight-bold text-grey-9 q-mt-sm">
                  {{ stat.month }}
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Venue Popularity Chart -->
      <div class="col-12 col-md-4">
        <q-card class="shadow-1 rounded-borders bg-white h-100 column">
          <q-card-section class="q-pb-none">
            <div class="text-h6 text-slaf-primary text-weight-bold">Venue Popularity</div>
          </q-card-section>
          <q-card-section class="col q-pt-lg">
            <div v-for="(venue, idx) in venueStats" :key="idx" class="q-mb-md">
              <div class="row justify-between q-mb-xs">
                <span class="text-weight-medium text-grey-9">{{ venue.name }}</span>
                <span class="text-weight-bold text-slaf-primary">{{ venue.count }} Bookings</span>
              </div>
              <q-linear-progress
                :value="venue.count / maxVenueCount"
                :color="venue.color"
                size="12px"
                class="rounded-borders"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Recent Transactions / Events Data Table -->
    <q-card class="shadow-1 rounded-borders bg-white">
      <q-card-section class="row items-center justify-between q-pb-none">
        <div class="text-h6 text-slaf-primary text-weight-bold">Recent Bookings Details</div>
        <q-input
          dense
          outlined
          v-model="filter"
          placeholder="Search..."
          class="bg-grey-1"
          style="width: 250px"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-card-section>

      <q-card-section>
        <q-table
          flat
          :rows="recentTransactions"
          :columns="columns"
          row-key="id"
          :filter="filter"
          :pagination="{ rowsPerPage: 5 }"
          table-header-class="bg-blue-1 text-slaf-primary text-weight-bold"
        >
          <template v-slot:body-cell-status="props">
            <q-td :props="props">
              <q-badge
                :color="
                  props.row.status === 'Confirmed'
                    ? 'green'
                    : props.row.status === 'Completed'
                      ? 'blue'
                      : 'orange'
                "
              >
                {{ props.row.status }}
              </q-badge>
            </q-td>
          </template>
          <template v-slot:body-cell-estRev="props">
            <q-td :props="props" class="text-weight-bold text-green-8">
              {{ formatCurrency(props.row.estRev) }}
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useEventStore } from 'src/stores/eventStore'
import { useMenuStore } from 'src/stores/menuStore'

const eventStore = useEventStore()
const menuStore = useMenuStore()
const filter = ref('')

onMounted(() => {
  eventStore.initializeStore()
  menuStore.initializeStore()
})

// Formatting helper
const formatCurrency = (val) => {
  return (
    'LKR ' +
    Number(val).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  )
}

// Analytics Computations based on event store
const allEvents = computed(() => eventStore.events)

const totalEvents = computed(() => allEvents.value.length)
const totalPax = computed(() =>
  allEvents.value.reduce((sum, evt) => sum + (Number(evt.pax) || 0), 0),
)

// Estimate Revenue based on Base Menu Price * Pax. Default if menu not found is 5500.
const recentTransactions = computed(() => {
  return allEvents.value
    .map((evt) => {
      const menu = menuStore.menus.find((m) => m.name === evt.package)
      const basePrice = menu ? menu.price : 5500
      const estRev = basePrice * evt.pax
      return {
        ...evt,
        estRev,
      }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
})

const totalRevenue = computed(() =>
  recentTransactions.value.reduce((sum, evt) => sum + evt.estRev, 0),
)

// Dynamic Venue stats
const venueStats = computed(() => {
  const counts = {}
  allEvents.value.forEach((evt) => {
    counts[evt.venue] = (counts[evt.venue] || 0) + 1
  })

  const colors = ['slaf-primary', 'slaf-accent', 'light-blue-9', 'green-7', 'deep-purple-7']

  return Object.keys(counts)
    .map((name, i) => ({
      name,
      count: counts[name],
      color: colors[i % colors.length],
    }))
    .sort((a, b) => b.count - a.count)
})

const maxVenueCount = computed(() => {
  if (venueStats.value.length === 0) return 1
  return Math.max(...venueStats.value.map((v) => v.count))
})

// Package Popularity
const packageStats = computed(() => {
  const counts = {}
  allEvents.value.forEach((evt) => {
    counts[evt.package] = (counts[evt.package] || 0) + 1
  })
  return Object.keys(counts)
    .map((name) => ({
      name,
      count: counts[name],
    }))
    .sort((a, b) => b.count - a.count)
})

// Upcoming Events (Next 7 days)
const upcomingEvents = computed(() => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const nextWeek = new Date(today)
  nextWeek.setDate(today.getDate() + 7)

  return allEvents.value
    .filter((evt) => {
      const evtDate = new Date(evt.date)
      return evtDate >= today && evtDate <= nextWeek
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
})

// Payment Status Overview
// Confirmed/Completed = fully paid, Tentative = 20% deposit
const paidRevenue = computed(() => {
  return recentTransactions.value.reduce((sum, evt) => {
    if (evt.status === 'Confirmed' || evt.status === 'Completed') return sum + evt.estRev
    if (evt.status === 'Tentative') return sum + evt.estRev * 0.2
    return sum
  }, 0)
})

const pendingRevenue = computed(() => {
  return totalRevenue.value - paidRevenue.value
})

const revenueProgress = computed(() => {
  if (totalRevenue.value === 0) return 0
  return paidRevenue.value / totalRevenue.value
})

// MOCK Data for Revenue Trend (6 months)
const revenueTrend = ref([
  { month: 'Sep', value: 850000, percent: 50 },
  { month: 'Oct', value: 1020000, percent: 65 },
  { month: 'Nov', value: 920000, percent: 55 },
  { month: 'Dec', value: 2100000, percent: 100 },
  { month: 'Jan', value: 1400000, percent: 75 },
  { month: 'Feb', value: 1850000, percent: 85 },
])

// Table Columns
const columns = [
  { name: 'date', label: 'Date', field: 'date', sortable: true, align: 'left' },
  { name: 'client', label: 'Client Name', field: 'client', sortable: true, align: 'left' },
  { name: 'package', label: 'Package', field: 'package', sortable: true, align: 'left' },
  { name: 'pax', label: 'Pax', field: 'pax', sortable: true, align: 'center' },
  { name: 'venue', label: 'Venue', field: 'venue', sortable: true, align: 'left' },
  { name: 'status', label: 'Status', field: 'status', sortable: true, align: 'center' },
  { name: 'estRev', label: 'Est. Revenue', field: 'estRev', sortable: true, align: 'right' },
]
</script>

<style scoped>
.kpi-card {
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.kpi-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.border-top-primary {
  border-top: 4px solid #00308f;
}
.border-top-accent {
  border-top: 4px solid #ffd700;
}
.border-top-blue {
  border-top: 4px solid #027be3;
}
.border-top-green {
  border-top: 4px solid #43a047;
}

.h-100 {
  height: 100%;
  min-height: 380px;
}

.trend-chart-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
  height: 250px;
  border-bottom: 2px solid #e0e0e0;
  padding-bottom: 10px;
  align-items: end;
}
.trend-bar-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.trend-track {
  width: 100%;
  max-width: 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.trend-fill {
  width: 100%;
  min-height: 5%;
  background: linear-gradient(180deg, #00308f 0%, #0050d0 100%);
  transition: height 1s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 8px rgba(0, 48, 143, 0.2);
}
.trend-fill:hover {
  filter: brightness(1.2);
  cursor: pointer;
}
</style>
