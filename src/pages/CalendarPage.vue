<template>
  <q-page class="slaf-dashboard bg-transparent">
    <!-- Top Stats Bar -->
    <div class="stats-bar row q-gutter-md q-mb-md q-px-md q-pt-md">
      <div class="stat-card col-auto">
        <q-icon name="event" size="20px" class="stat-icon" />
        <div class="stat-value">{{ currentMonthEvents.length }}</div>
        <div class="stat-label">This Month</div>
      </div>
      <div class="stat-card col-auto">
        <q-icon name="check_circle" size="20px" class="stat-icon confirmed" />
        <div class="stat-value text-positive">{{ confirmedCount }}</div>
        <div class="stat-label">Confirmed</div>
      </div>
      <div class="stat-card col-auto">
        <q-icon name="schedule" size="20px" class="stat-icon tentative" />
        <div class="stat-value text-warning">{{ tentativeCount }}</div>
        <div class="stat-label">Tentative</div>
      </div>
      <div class="stat-card col-auto">
        <q-icon name="people" size="20px" class="stat-icon" />
        <div class="stat-value text-info">{{ totalPaxThisMonth }}</div>
        <div class="stat-label">Total Pax</div>
      </div>
      <q-space />
      <!-- View Toggle -->
      <div class="view-toggle row items-center">
        <q-btn-toggle
          v-model="viewMode"
          flat
          toggle-color="slaf-primary"
          color="grey-3"
          text-color="grey-7"
          toggle-text-color="white"
          :options="[
            { label: 'Month', value: 'month', icon: 'calendar_view_month' },
            { label: 'Week', value: 'week', icon: 'view_week' },
          ]"
          class="view-toggle-btn"
        />
      </div>
    </div>

    <div class="row q-px-md q-pb-md" style="gap: 16px">
      <!-- Main Calendar Section -->
      <div class="col">
        <!-- Calendar Header -->
        <header class="cal-header row items-center justify-between q-pa-md q-mb-sm">
          <div class="row items-center q-gutter-sm">
            <q-btn
              flat
              dense
              icon="chevron_left"
              class="nav-btn"
              @click="prevPeriod"
            />
            <div class="month-title">
              {{ currentMonthName }} <span class="year-label">{{ currentYear }}</span>
            </div>
            <q-btn
              flat
              dense
              icon="chevron_right"
              class="nav-btn"
              @click="nextPeriod"
            />
            <q-btn
              outline
              dense
              label="Today"
              class="today-btn q-ml-sm"
              @click="goToToday"
            />
          </div>

          <div class="row q-gutter-sm items-center">
            <!-- Search -->
            <q-input
              v-model="searchQuery"
              dense
              outlined
              placeholder="Search events..."
              style="width: 200px"
              class="search-input"
            >
              <template #prepend>
                <q-icon name="search" size="18px" color="grey-6" />
              </template>
              <template #append v-if="searchQuery">
                <q-icon name="close" size="16px" color="grey-5" class="cursor-pointer" @click="searchQuery = ''" />
              </template>
            </q-input>

            <!-- Filter by Status -->
            <q-btn-dropdown
              flat
              dense
              icon="filter_list"
              :label="filterStatus || 'Filter'"
              class="filter-btn"
              :class="{ 'filter-active': filterStatus }"
            >
              <q-list>
                <q-item clickable v-close-popup @click="filterStatus = ''">
                  <q-item-section>All Events</q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="filterStatus = 'Confirmed'">
                  <q-item-section>
                    <q-badge color="green" label="Confirmed" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="filterStatus = 'Tentative'">
                  <q-item-section>
                    <q-badge color="orange" label="Tentative" />
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup @click="filterStatus = 'Completed'">
                  <q-item-section>
                    <q-badge color="grey" label="Completed" />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>

            <q-btn
              unelevated
              icon="add"
              label="New Event"
              class="new-event-btn"
              to="/banquet"
            />
          </div>
        </header>

        <!-- MONTH VIEW -->
        <q-card v-if="viewMode === 'month'" class="cal-card shadow-2">
          <!-- Days of Week Header -->
          <div class="dow-header">
            <div v-for="day in daysOfWeek" :key="day" class="dow-cell">
              {{ day }}
            </div>
          </div>

          <!-- Calendar Grid -->
          <div class="calendar-grid">
            <div
              v-for="(dateObj, index) in calendarDays"
              :key="index"
              class="calendar-day"
              :class="{
                'other-month': !dateObj.isCurrentMonth,
                'is-today': dateObj.isToday,
                'has-events': getFilteredEvents(dateObj.fullDate).length > 0,
              }"
              @click="openDayModal(dateObj.fullDate)"
            >
              <!-- Day Number -->
              <div class="day-header">
                <span class="day-number" :class="{ 'today-badge': dateObj.isToday }">
                  {{ dateObj.date }}
                </span>
                <span
                  v-if="getFilteredEvents(dateObj.fullDate).length > 2"
                  class="event-count-badge"
                >
                  {{ getFilteredEvents(dateObj.fullDate).length }}
                </span>
              </div>

              <!-- Events in cell -->
              <div class="event-container">
                <div
                  v-for="evt in getFilteredEvents(dateObj.fullDate).slice(0, 2)"
                  :key="evt.id"
                  class="event-pill"
                  :class="`evt-${evt.color.replace('-', '_')}`"
                  :style="getEventStyle(evt)"
                  @click.stop="openEventDetails(evt)"
                >
                  <span class="event-dot"></span>
                  <span class="event-text">{{ evt.timeFrom }} {{ evt.title }}</span>
                </div>
                <div
                  v-if="getFilteredEvents(dateObj.fullDate).length > 2"
                  class="more-events"
                  @click.stop="openDayModal(dateObj.fullDate)"
                >
                  +{{ getFilteredEvents(dateObj.fullDate).length - 2 }} more
                </div>
              </div>
            </div>
          </div>
        </q-card>

        <!-- WEEK VIEW -->
        <q-card v-else class="cal-card shadow-2">
          <div class="week-view">
            <!-- Week header with dates -->
            <div class="week-header-row">
              <div class="time-col-header"></div>
              <div
                v-for="day in currentWeekDays"
                :key="day.fullDate"
                class="week-day-header"
                :class="{ 'week-today': day.isToday }"
              >
                <div class="week-dow">{{ day.dow }}</div>
                <div class="week-date-num" :class="{ 'week-today-badge': day.isToday }">
                  {{ day.date }}
                </div>
              </div>
            </div>

            <!-- Time slots -->
            <div class="week-body">
              <div
                v-for="hour in timeSlots"
                :key="hour"
                class="week-time-row"
              >
                <div class="time-label">{{ formatHour(hour) }}</div>
                <div
                  v-for="day in currentWeekDays"
                  :key="day.fullDate"
                  class="week-cell"
                  :class="{ 'week-cell-today': day.isToday }"
                  @click="openDayModal(day.fullDate)"
                >
                  <div
                    v-for="evt in getEventsForHour(day.fullDate, hour)"
                    :key="evt.id"
                    class="week-event-block"
                    :style="getEventStyle(evt)"
                    @click.stop="openEventDetails(evt)"
                  >
                    <div class="week-event-title">{{ evt.title }}</div>
                    <div class="week-event-time">{{ evt.timeFrom }} - {{ evt.timeTo }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card>
      </div>

      <!-- Upcoming Events Sidebar -->
      <div class="sidebar-col">
        <!-- Mini Month Picker -->
        <q-card class="sidebar-card q-mb-md shadow-1">
          <q-card-section class="q-pa-sm">
            <div class="text-weight-bold text-grey-7 text-caption q-mb-sm" style="letter-spacing: 1px; text-transform: uppercase;">
              Upcoming Events
            </div>
            <div
              v-for="evt in upcomingEvents"
              :key="evt.id"
              class="upcoming-event-item"
              @click="openEventDetails(evt)"
            >
              <div class="upcoming-color-bar" :style="getEventStyle(evt)"></div>
              <div class="upcoming-info">
                <div class="upcoming-title">{{ evt.title }}</div>
                <div class="upcoming-meta">
                  <q-icon name="calendar_today" size="10px" />
                  {{ formatUpcomingDate(evt.date) }}
                  &nbsp;·&nbsp;
                  <q-icon name="schedule" size="10px" />
                  {{ evt.timeFrom }}
                </div>
              </div>
              <q-badge
                :color="statusColor(evt.status)"
                class="upcoming-badge"
              >{{ evt.status }}</q-badge>
            </div>
            <div v-if="upcomingEvents.length === 0" class="text-center text-grey-5 q-py-md text-caption">
              No upcoming events
            </div>
          </q-card-section>
        </q-card>

        <!-- Legend -->
        <q-card class="sidebar-card shadow-1">
          <q-card-section class="q-pa-sm">
            <div class="text-weight-bold text-grey-7 text-caption q-mb-sm" style="letter-spacing: 1px; text-transform: uppercase;">
              Legend
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #00308f;"></span>
              <span class="text-caption">Banquet / Wedding</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #F59E0B;"></span>
              <span class="text-caption">Corporate Event</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #c0a800;"></span>
              <span class="text-caption">Outdoor / BBQ</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #0ea5e9;"></span>
              <span class="text-caption">Private Party</span>
            </div>
            <div class="legend-item">
              <span class="legend-dot" style="background: #6B7280;"></span>
              <span class="text-caption">Tentative</span>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- Day Events Modal -->
    <q-dialog v-model="isDayModalOpen" transition-show="scale" transition-hide="scale">
      <q-card class="day-modal-card">
        <q-card-section class="day-modal-header row items-center justify-between">
          <div>
            <div class="text-h6 text-weight-bold">{{ selectedDateFormatted }}</div>
            <div class="text-caption" style="opacity:0.8">
              {{ selectedDayEvents.length }} event{{ selectedDayEvents.length !== 1 ? 's' : '' }} scheduled
            </div>
          </div>
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div v-if="selectedDayEvents.length === 0" class="text-center text-grey-6 q-py-xl">
            <q-icon name="event_busy" size="56px" color="grey-4" class="q-mb-sm" />
            <div class="text-subtitle1 text-grey-5">No events scheduled for this day.</div>
          </div>

          <div v-else class="day-events-list">
            <div
              v-for="evt in selectedDayEvents"
              :key="evt.id"
              class="day-event-row"
              @click="openEventDetails(evt)"
            >
              <div class="day-event-bar" :style="getEventStyle(evt)"></div>
              <div class="day-event-time">
                <div class="text-weight-bold" style="font-size: 13px">{{ evt.timeFrom }}</div>
                <div class="text-grey-5" style="font-size: 11px">{{ evt.timeTo }}</div>
              </div>
              <div class="day-event-info">
                <div class="day-event-title">{{ evt.title }}</div>
                <div class="day-event-meta">
                  <q-icon name="place" size="12px" />{{ evt.venue }}
                  &nbsp;·&nbsp;
                  <q-icon name="people" size="12px" />{{ evt.pax }} pax
                </div>
              </div>
              <q-badge
                :color="statusColor(evt.status)"
                class="q-ml-auto"
              >{{ evt.status }}</q-badge>
              <q-icon name="chevron_right" color="grey-4" class="q-ml-sm" />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md" style="background: #f8fafc; border-top: 1px solid #e2e8f0">
          <q-btn flat label="Close" color="grey-6" v-close-popup />
          <q-btn unelevated color="slaf-primary" label="Add Event" icon="add" to="/banquet" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Single Event Details Modal -->
    <q-dialog v-model="isEventModalOpen" transition-show="scale" transition-hide="scale">
      <q-card class="event-detail-card">
        <!-- Colored header -->
        <div class="event-detail-header" :style="getEventStyle(selectedEvent)">
          <div class="event-detail-header-bg"></div>
          <div class="event-detail-header-content row justify-between items-start">
            <div>
              <div class="text-caption" style="opacity:0.75; letter-spacing:1px; text-transform:uppercase;">
                {{ selectedEvent?.package }}
              </div>
              <div class="text-h5 text-weight-bold q-mt-xs">{{ selectedEvent?.title }}</div>
            </div>
            <q-btn icon="close" flat round dense v-close-popup style="color:white; opacity:0.8" />
          </div>
          <q-badge
            :color="statusColor(selectedEvent?.status)"
            class="event-status-badge"
          >
            <q-icon :name="statusIcon(selectedEvent?.status)" size="12px" class="q-mr-xs" />
            {{ selectedEvent?.status }}
          </q-badge>
        </div>

        <!-- Details Grid -->
        <q-card-section class="q-pt-lg">
          <div class="event-detail-grid">
            <div class="detail-item">
              <q-icon name="person" size="18px" color="slaf-primary" />
              <div>
                <div class="detail-label">Client</div>
                <div class="detail-value">{{ selectedEvent?.client }}</div>
              </div>
            </div>
            <div class="detail-item">
              <q-icon name="place" size="18px" color="slaf-primary" />
              <div>
                <div class="detail-label">Venue</div>
                <div class="detail-value">{{ selectedEvent?.venue }}</div>
              </div>
            </div>
            <div class="detail-item">
              <q-icon name="calendar_today" size="18px" color="slaf-primary" />
              <div>
                <div class="detail-label">Date</div>
                <div class="detail-value">{{ formatEventDate(selectedEvent?.date) }}</div>
              </div>
            </div>
            <div class="detail-item">
              <q-icon name="schedule" size="18px" color="slaf-primary" />
              <div>
                <div class="detail-label">Time</div>
                <div class="detail-value">{{ selectedEvent?.timeFrom }} — {{ selectedEvent?.timeTo }}</div>
              </div>
            </div>
            <div class="detail-item">
              <q-icon name="people" size="18px" color="slaf-primary" />
              <div>
                <div class="detail-label">Guest Count</div>
                <div class="detail-value">{{ selectedEvent?.pax }} Pax</div>
              </div>
            </div>
            <div class="detail-item">
              <q-icon name="restaurant_menu" size="18px" color="slaf-primary" />
              <div>
                <div class="detail-label">Package</div>
                <div class="detail-value">{{ selectedEvent?.package }}</div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="q-pa-md" style="background: #f8fafc; border-top: 1px solid #e2e8f0">
          <q-btn flat label="Close" color="grey-6" v-close-popup />
          <q-btn
            v-if="selectedEvent?.billing"
            unelevated
            color="accent"
            text-color="black"
            icon="receipt_long"
            label="View Final Bill"
            class="text-weight-bold"
            @click="isBillModalOpen = true"
          />
          <q-btn outline color="slaf-primary" icon="edit" label="Edit Booking" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-dialog v-model="isBillModalOpen" persistent maximized transition-show="slide-up" transition-hide="slide-down">
      <div class="bg-blue-grey-1 full-width full-height scroll">
        <!-- Control Bar (Sticky) -->
        <div class="print-hide absolute-top full-width row items-center justify-between q-pa-md bg-white shadow-2 z-top">
          <div class="text-subtitle1 text-weight-bold text-primary px-lg">Official Bill Preview</div>
          <div class="row q-gutter-sm">
            <q-btn icon="print" color="primary" label="Print Invoice" @click="printBill" unelevated />
            <q-btn icon="close" flat round dense v-close-popup />
          </div>
        </div>

        <!-- The actual invoice area -->
        <div class="invoice-container q-py-xl q-px-md" style="margin-top: 80px; display: flex; justify-content: center;">
          <div v-if="selectedEvent" class="invoice-section bg-white text-black q-pa-xl shadow-10 rounded-borders overflow-hidden">
            <!-- Header -->
            <div class="row items-center justify-between q-mb-xl pb-md" style="border-bottom: 3px solid #00308f">
              <div class="row items-center">
                <img
                  :src="logoUrl"
                  alt="SLAF Logo"
                  class="q-mr-lg"
                  style="height: 85px; width: auto;"
                />
                <div>
                  <h1 class="text-h4 text-weight-bold q-my-none" style="color: #00308f; letter-spacing: 1px">
                    Eagles' Lagoon View
                  </h1>
                  <div class="text-subtitle1 text-grey-8 text-weight-bold">Banquet Event Order & Official Invoice</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-weight-bold text-h4" style="color: #00308f">INVOICE</div>
                <div class="text-caption text-grey-7 q-mt-xs">Date: {{ new Date().toLocaleDateString('en-GB') }}</div>
                <div class="text-weight-bold q-mt-sm">Order ID: {{ selectedEvent?.id || 'EVENT-ID' }}</div>
              </div>
            </div>

            <!-- Grid: Client & Event -->
            <div class="row q-col-gutter-xl q-mb-xl">
              <div class="col-12 col-md-6">
                <div class="text-weight-bold text-uppercase q-mb-md section-title">Client Information</div>
                <div class="data-row"><strong>Client Name:</strong> {{ selectedEvent?.clientDetails?.clientName || selectedEvent?.client }}</div>
                <div class="data-row"><strong>NIC / Registration:</strong> {{ selectedEvent?.clientDetails?.nic || 'N/A' }}</div>
                <div class="data-row"><strong>Telephone/Mobile:</strong> {{ selectedEvent?.clientDetails?.mobile || selectedEvent?.clientDetails?.telephone || 'N/A' }}</div>
                <div class="data-row"><strong>Billing Address:</strong> {{ selectedEvent?.clientDetails?.address || 'N/A' }}</div>
              </div>
              <div class="col-12 col-md-6">
                <div class="text-weight-bold text-uppercase q-mb-md section-title">Event Logistics</div>
                <div class="data-row"><strong>Event Nature:</strong> {{ selectedEvent?.title }}</div>
                <div class="data-row"><strong>Scheduled Date:</strong> {{ selectedEvent?.date }}</div>
                <div class="data-row"><strong>Duration Setup:</strong> {{ selectedEvent?.timeFrom }} to {{ selectedEvent?.timeTo }}</div>
                <div class="data-row"><strong>Guest Count:</strong> {{ selectedEvent?.pax }} Pax</div>
              </div>
            </div>

            <!-- Table: BEO Details -->
            <div class="text-weight-bold text-uppercase q-mb-sm q-mt-md section-title">Banquet Event Order (BEO)</div>
            <table class="full-width invoice-table q-mb-xl">
              <tbody>
                <tr>
                  <td width="35%"><strong>Location/Venue Assigned</strong></td>
                  <td>{{ selectedEvent?.beoDetails?.location || selectedEvent?.venue }}</td>
                </tr>
                <tr>
                  <td><strong>Poruwa / Serving Timing</strong></td>
                  <td>{{ selectedEvent?.beoDetails?.poruwaTime || 'N/A' }} / {{ selectedEvent?.beoDetails?.servingTime || 'N/A' }}</td>
                </tr>
                <tr>
                  <td><strong>Consolidated Menu Selection</strong></td>
                  <td v-html="selectedEvent?.beoDetails?.menuSelection || 'N/A'"></td>
                </tr>
                <tr>
                  <td><strong>Setup & Special Instructions</strong></td>
                  <td>{{ selectedEvent?.beoDetails?.setup || 'N/A' }} / {{ selectedEvent?.beoDetails?.seatCovers || 'N/A' }}</td>
                </tr>
                <tr>
                  <td><strong>Multimedia & Decorations</strong></td>
                  <td>{{ selectedEvent?.beoDetails?.decorations || 'N/A' }} / {{ selectedEvent?.beoDetails?.multimedia || 'N/A' }}</td>
                </tr>
              </tbody>
            </table>

            <!-- Table: Financial Summary -->
            <div class="text-weight-bold text-uppercase q-mb-sm q-mt-lg section-title">Financial Breakdown</div>
            <table class="full-width invoice-table text-right q-mb-xl">
              <thead>
                <tr style="background-color: #f8fafc">
                  <th class="text-left">Details of Services & Supplies</th>
                  <th style="width: 200px">Total (LKR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-left">Main Catering Event Package ({{ selectedEvent?.pax }} Pax)</td>
                  <td class="text-weight-bold">{{ formatCurrency(selectedEvent?.billing?.mainPackageTotal) }}</td>
                </tr>
                <tr v-if="selectedEvent?.billing?.extraFoodTotal > 0">
                  <td class="text-left">Supplemental Food & Beverage Selections</td>
                  <td>{{ formatCurrency(selectedEvent?.billing?.extraFoodTotal) }}</td>
                </tr>
                <tr v-if="selectedEvent?.billing?.otherChargesTotal > 0">
                  <td class="text-left">Facility Overheads & Operational Charges</td>
                  <td>{{ formatCurrency(selectedEvent?.billing?.otherChargesTotal) }}</td>
                </tr>
                <tr class="bg-grey-2 text-weight-bold thick-border-top">
                  <td class="text-left">COMBINED GROSS TOTAL</td>
                  <td class="text-h6">{{ formatCurrency(selectedEvent?.billing?.grandTotal) }}</td>
                </tr>
                <tr v-if="selectedEvent?.billing?.deposit > 0">
                  <td class="text-left">Refundable Security Guarantee (+)</td>
                  <td>{{ formatCurrency(selectedEvent?.billing?.deposit) }}</td>
                </tr>
                <tr v-if="selectedEvent?.billing?.discount > 0">
                  <td class="text-left">Applied Special Discounts (-)</td>
                  <td class="text-negative">- {{ formatCurrency(selectedEvent?.billing?.discount) }}</td>
                </tr>
                <tr v-if="selectedEvent?.billing?.advance > 0">
                  <td class="text-left">Advance Booking Payment Deducted (-)</td>
                  <td class="text-negative">- {{ formatCurrency(selectedEvent?.billing?.advance) }}</td>
                </tr>
                <tr class="final-row bg-blue-1 text-primary">
                  <td class="text-left text-weight-bolder" style="font-size: 1.2rem">NET BALANCE PAYABLE</td>
                  <td class="text-weight-bolder" style="font-size: 1.6rem">{{ formatCurrency(selectedEvent?.billing?.finalDue) }}</td>
                </tr>
              </tbody>
            </table>

            <!-- Signatures -->
            <div class="row justify-between q-mt-xl pt-xl signature-area">
              <div class="text-center signature-box">
                <div class="sig-line"></div>
                <div class="text-weight-bold">Client Confirmation</div>
                <div class="text-caption text-grey-6 text-italic">I acknowledge all charges as listed above.</div>
              </div>
              <div class="text-center signature-box">
                <div class="sig-line"></div>
                <div class="text-weight-bold">Authorized Signatory</div>
                <div class="text-caption text-grey-6">SLAF - Campus Branch</div>
              </div>
            </div>

            <!-- Legal Footer -->
            <div class="q-mt-xl text-center text-caption text-grey-5 border-top q-pt-md">
              Agreement terms of SLAF Banquet Management apply to this invoice.<br/>
              Thank you for choosing Eagles' Lagoon View.
            </div>
          </div>
          <div v-else class="text-center q-pa-xl bg-white rounded-borders shadow-2">
             <q-icon name="error_outline" color="grey-5" size="100px" />
             <div class="text-h6 text-grey-7 q-mt-md">Event Record Not Synchronized</div>
             <p class="text-grey-6">Error code: BILL_LOAD_MISMATCH</p>
          </div>
        </div>
      </div>
    </q-dialog>

  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useEventStore } from 'src/stores/eventStore'
import { date } from 'quasar'

const eventStore = useEventStore()
const logoUrl = computed(() => import.meta.env.BASE_URL + 'images/logo.png')

// Initialize store on created (Quasar auto calls this)
eventStore.initializeStore()

const viewMode = ref('month')
const searchQuery = ref('')
const filterStatus = ref('')

// Current viewing date context
const viewingDate = ref(new Date())

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const timeSlots = Array.from({ length: 14 }, (_, i) => i + 7) // 7am - 20pm

const currentMonthName = computed(() => date.formatDate(viewingDate.value, 'MMMM'))
const currentYear = computed(() => date.formatDate(viewingDate.value, 'YYYY'))

// Stats
const currentMonthEvents = computed(() => {
  const ym = date.formatDate(viewingDate.value, 'YYYY-MM')
  return eventStore.events.filter((e) => e.date.startsWith(ym))
})
const confirmedCount = computed(() => currentMonthEvents.value.filter((e) => e.status === 'Confirmed').length)
const tentativeCount = computed(() => currentMonthEvents.value.filter((e) => e.status === 'Tentative').length)
const totalPaxThisMonth = computed(() => currentMonthEvents.value.reduce((sum, e) => sum + (e.pax || 0), 0))

// Navigation
const prevPeriod = () => {
  if (viewMode.value === 'month') {
    viewingDate.value = date.subtractFromDate(viewingDate.value, { months: 1 })
  } else {
    viewingDate.value = date.subtractFromDate(viewingDate.value, { days: 7 })
  }
}
const nextPeriod = () => {
  if (viewMode.value === 'month') {
    viewingDate.value = date.addToDate(viewingDate.value, { months: 1 })
  } else {
    viewingDate.value = date.addToDate(viewingDate.value, { days: 7 })
  }
}
const goToToday = () => {
  viewingDate.value = new Date()
}

// Get filtered events for a day (search + filter)
const getFilteredEvents = (dateStr) => {
  return eventStore.events.filter((e) => {
    if (e.date !== dateStr) return false
    if (filterStatus.value && e.status !== filterStatus.value) return false
    if (searchQuery.value) {
      const q = searchQuery.value.toLowerCase()
      return (
        e.title.toLowerCase().includes(q) ||
        e.client.toLowerCase().includes(q) ||
        e.venue.toLowerCase().includes(q)
      )
    }
    return true
  }).sort((a, b) => a.timeFrom.localeCompare(b.timeFrom))
}

// Calendar grid (month view) - 42 cells
const calendarDays = computed(() => {
  const year = viewingDate.value.getFullYear()
  const month = viewingDate.value.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()
  const startingDayOfWeek = firstDayOfMonth.getDay()

  const days = []
  const todayStr = date.formatDate(new Date(), 'YYYY-MM-DD')

  // Prev month padding
  const prevMonthLastDay = new Date(year, month, 0).getDate()
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const d = prevMonthLastDay - i
    const fullDateStr = `${month === 0 ? year - 1 : year}-${String(month === 0 ? 12 : month).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    days.push({ date: d, isCurrentMonth: false, fullDate: fullDateStr, isToday: false })
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const fullDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    days.push({ date: d, isCurrentMonth: true, fullDate: fullDateStr, isToday: fullDateStr === todayStr })
  }
  const remaining = 42 - days.length
  for (let d = 1; d <= remaining; d++) {
    const nm = month === 11 ? 1 : month + 2
    const ny = month === 11 ? year + 1 : year
    const fullDateStr = `${ny}-${String(nm).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    days.push({ date: d, isCurrentMonth: false, fullDate: fullDateStr, isToday: false })
  }
  return days
})

// Week view
const currentWeekDays = computed(() => {
  const d = new Date(viewingDate.value)
  const dayOfWeek = d.getDay()
  const sunday = new Date(d)
  sunday.setDate(d.getDate() - dayOfWeek)
  const todayStr = date.formatDate(new Date(), 'YYYY-MM-DD')
  const dowLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(sunday)
    day.setDate(sunday.getDate() + i)
    const fullDate = date.formatDate(day, 'YYYY-MM-DD')
    return { date: day.getDate(), fullDate, isToday: fullDate === todayStr, dow: dowLabels[i] }
  })
})

const getEventsForHour = (dateStr, hour) => {
  return getFilteredEvents(dateStr).filter((e) => {
    const evtHour = parseInt(e.timeFrom.split(':')[0])
    return evtHour === hour
  })
}

const formatHour = (h) => `${h > 12 ? h - 12 : h}:00 ${h >= 12 ? 'PM' : 'AM'}`

// Upcoming events (next 30 days)
const upcomingEvents = computed(() => {
  const todayStr = date.formatDate(new Date(), 'YYYY-MM-DD')
  const futureDate = date.formatDate(date.addToDate(new Date(), { days: 30 }), 'YYYY-MM-DD')
  return eventStore.events
    .filter((e) => e.date >= todayStr && e.date <= futureDate)
    .sort((a, b) => a.date.localeCompare(b.date) || a.timeFrom.localeCompare(b.timeFrom))
    .slice(0, 6)
})

// Modal States
const isDayModalOpen = ref(false)
const selectedDateStr = ref('')

const selectedDateFormatted = computed(() => {
  if (!selectedDateStr.value) return ''
  return date.formatDate(new Date(selectedDateStr.value + 'T00:00:00'), 'dddd, MMMM D YYYY')
})

const selectedDayEvents = computed(() => {
  if (!selectedDateStr.value) return []
  return getFilteredEvents(selectedDateStr.value)
})

const openDayModal = (dateStr) => {
  selectedDateStr.value = dateStr
  isDayModalOpen.value = true
}

const isEventModalOpen = ref(false)
const isBillModalOpen = ref(false)
const selectedEvent = ref(null)

const openEventDetails = (evt) => {
  selectedEvent.value = evt
  isDayModalOpen.value = false
  isBillModalOpen.value = false
  isEventModalOpen.value = true
}

// Helpers
const COLOR_MAP = {
  'slaf-primary': '#00308f',
  'slaf_primary': '#00308f',
  'orange-9': '#E65100',
  'orange_9': '#E65100',
  'slaf-accent': '#c0a800',
  'slaf_accent': '#c0a800',
  'grey-7': '#616161',
  'grey_7': '#616161',
  'light-blue-9': '#0277BD',
  'light_blue_9': '#0277BD',
}

const getEventStyle = (evt) => {
  if (!evt) return {}
  const key = evt.color?.replace(/-/g, '_')
  const bg = COLOR_MAP[key] || COLOR_MAP[evt.color] || '#00308f'
  return { background: bg }
}

const statusColor = (status) => {
  if (status === 'Confirmed') return 'positive'
  if (status === 'Tentative') return 'warning'
  if (status === 'Completed') return 'grey'
  return 'grey'
}

const statusIcon = (status) => {
  if (status === 'Confirmed') return 'check_circle'
  if (status === 'Tentative') return 'pending'
  if (status === 'Completed') return 'done_all'
  return 'help'
}

const formatUpcomingDate = (dateStr) => {
  if (!dateStr) return ''
  return date.formatDate(new Date(dateStr + 'T00:00:00'), 'MMM D')
}

const formatEventDate = (dateStr) => {
  if (!dateStr) return ''
  return date.formatDate(new Date(dateStr + 'T00:00:00'), 'dddd, MMMM D YYYY')
}

const printBill = () => {
  window.print()
}

const formatCurrency = (val) =>
  new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR' }).format(val || 0)
</script>

<style scoped>
/* ===== STATS BAR ===== */
.stats-bar {
  flex-wrap: wrap;
  align-items: center;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 10px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e8edf5;
  min-width: 120px;
}

.stat-icon {
  color: #00308f;
}
.stat-icon.confirmed { color: #22c55e; }
.stat-icon.tentative { color: #f59e0b; }

.stat-value {
  font-size: 22px;
  font-weight: 700;
  line-height: 1;
  color: #1a2744;
}

.stat-label {
  font-size: 11px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1;
}

.view-toggle-btn {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

/* ===== CALENDAR HEADER ===== */
.cal-header {
  background: white;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e8edf5;
}

.month-title {
  font-size: 22px;
  font-weight: 700;
  color: #00308f;
  min-width: 230px;
  text-align: center;
}

.year-label {
  color: #94a3b8;
  font-weight: 400;
}

.nav-btn {
  background: #f0f5ff;
  color: #00308f;
  border-radius: 8px;
  padding: 4px 8px;
}
.nav-btn:hover {
  background: #dbeafe;
}

.today-btn {
  border: 1.5px solid #00308f;
  color: #00308f;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}
.today-btn:hover {
  background: #00308f;
  color: white;
}

.search-input :deep(.q-field__control) {
  border-radius: 8px !important;
  background: #f8fafc;
}

.filter-btn {
  border: 1.5px solid #e2e8f0;
  border-radius: 8px;
  color: #64748b;
}
.filter-active {
  border-color: #00308f;
  color: #00308f;
  background: #f0f5ff;
}

.new-event-btn {
  background: linear-gradient(135deg, #00308f, #1a56c8) !important;
  color: white;
  border-radius: 8px;
  font-weight: 600;
  padding: 8px 16px;
}
.new-event-btn:hover {
  box-shadow: 0 4px 12px rgba(0, 48, 143, 0.4);
  transform: translateY(-1px);
}

/* ===== CALENDAR CARD & GRID ===== */
.cal-card {
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid #e8edf5;
}

.dow-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: linear-gradient(135deg, #00308f, #1a56c8);
  padding: 10px 0;
}

.dow-cell {
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(120px, auto);
  gap: 1px;
  background: #e2e8f0;
}

.calendar-day {
  background: white;
  min-height: 120px;
  cursor: pointer;
  transition: background 0.18s ease, box-shadow 0.18s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}

.calendar-day:hover {
  background: #f8fbff !important;
  box-shadow: inset 0 0 0 2px #bfdbfe;
  z-index: 1;
}

.other-month {
  background: #fafafa;
}
.other-month .day-number {
  color: #d1d5db !important;
}

.is-today {
  background: #fefce8 !important;
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6px 8px 2px;
}

.day-number {
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  line-height: 1;
}

.today-badge {
  background: linear-gradient(135deg, #00308f, #1a56c8);
  color: white !important;
  border-radius: 50%;
  width: 26px;
  height: 26px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 8px rgba(0, 48, 143, 0.4);
  animation: pulse-today 2s ease-in-out infinite;
}

@keyframes pulse-today {
  0%, 100% { box-shadow: 0 3px 8px rgba(0, 48, 143, 0.4); }
  50% { box-shadow: 0 3px 16px rgba(0, 48, 143, 0.7); }
}

.event-count-badge {
  background: #e0e7ff;
  color: #3730a3;
  font-size: 10px;
  font-weight: 700;
  border-radius: 10px;
  padding: 1px 6px;
  line-height: 16px;
}

.event-container {
  flex: 1;
  padding: 0 4px 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.event-pill {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 6px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  overflow: hidden;
}
.event-pill:hover {
  transform: translateX(2px);
  filter: brightness(1.1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.event-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255,255,255,0.7);
  flex-shrink: 0;
}

.event-text {
  color: white;
  font-size: 11px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.more-events {
  font-size: 10px;
  color: #6366f1;
  font-weight: 600;
  padding: 1px 4px;
  cursor: pointer;
  text-decoration: underline;
}

/* ===== WEEK VIEW ===== */
.week-view {
  overflow: auto;
  max-height: 65vh;
}

.week-header-row {
  display: grid;
  grid-template-columns: 60px repeat(7, 1fr);
  position: sticky;
  top: 0;
  z-index: 10;
  background: white;
  border-bottom: 2px solid #e2e8f0;
}

.time-col-header { background: #f8fafc; }

.week-day-header {
  text-align: center;
  padding: 10px 0;
  border-left: 1px solid #e2e8f0;
}

.week-today {
  background: #f0f5ff;
}

.week-dow {
  font-size: 11px;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.week-date-num {
  font-size: 18px;
  font-weight: 700;
  color: #374151;
  margin-top: 2px;
}

.week-today-badge {
  background: linear-gradient(135deg, #00308f, #1a56c8);
  color: white !important;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 3px 10px rgba(0, 48, 143, 0.4);
}

.week-body {
  display: flex;
  flex-direction: column;
}

.week-time-row {
  display: grid;
  grid-template-columns: 60px repeat(7, 1fr);
  min-height: 56px;
  border-bottom: 1px solid #f1f5f9;
}

.time-label {
  font-size: 10px;
  color: #94a3b8;
  font-weight: 600;
  padding: 4px 8px;
  text-align: right;
  border-right: 1px solid #e2e8f0;
  background: #f8fafc;
  position: sticky;
  left: 0;
}

.week-cell {
  border-left: 1px solid #f1f5f9;
  padding: 2px 4px;
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
}

.week-cell:hover {
  background: #f8fbff;
}

.week-cell-today {
  background: #fefce833;
}

.week-event-block {
  border-radius: 6px;
  padding: 4px 8px;
  cursor: pointer;
  margin-bottom: 2px;
  transition: all 0.15s;
}

.week-event-block:hover {
  filter: brightness(1.1);
  transform: translateX(1px);
}

.week-event-title {
  color: white;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.week-event-time {
  color: rgba(255,255,255,0.75);
  font-size: 10px;
}

/* ===== SIDEBAR ===== */
.sidebar-col {
  width: 240px;
  flex-shrink: 0;
}

.sidebar-card {
  border-radius: 14px;
  border: 1px solid #e8edf5;
}

.upcoming-event-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 4px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s;
}

.upcoming-event-item:hover {
  background: #f8fafc;
}

.upcoming-color-bar {
  width: 4px;
  height: 36px;
  border-radius: 4px;
  flex-shrink: 0;
  margin-top: 2px;
}

.upcoming-info {
  flex: 1;
  min-width: 0;
}

.upcoming-title {
  font-size: 12px;
  font-weight: 600;
  color: #1e293b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.upcoming-meta {
  font-size: 10px;
  color: #94a3b8;
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 2px;
}

.upcoming-badge {
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-top: 2px;
  flex-shrink: 0;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
}

.legend-dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
}

/* ===== DAY MODAL ===== */
.day-modal-card {
  width: 520px;
  max-width: 92vw;
  border-radius: 16px;
  overflow: hidden;
}

.day-modal-header {
  background: linear-gradient(135deg, #00308f, #1a56c8);
  color: white;
  padding: 20px 24px;
}

.day-events-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.day-event-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  background: #f8fafc;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s;
  border: 1px solid #e2e8f0;
}

.day-event-row:hover {
  background: #f0f5ff;
  border-color: #bfdbfe;
  transform: translateX(2px);
}

.day-event-bar {
  width: 4px;
  height: 40px;
  border-radius: 4px;
  flex-shrink: 0;
}

.day-event-time {
  flex-shrink: 0;
  width: 46px;
  text-align: right;
}

.day-event-info {
  flex: 1;
  min-width: 0;
}

.day-event-title {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
}

.day-event-meta {
  font-size: 11px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-top: 2px;
}

/* ===== EVENT DETAIL MODAL ===== */
.event-detail-card {
  width: 580px;
  max-width: 92vw;
  border-radius: 16px;
  overflow: hidden;
}

.event-detail-header {
  position: relative;
  padding: 28px 24px 24px;
  color: white;
  overflow: hidden;
}

.event-detail-header-content {
  position: relative;
  z-index: 2;
}

.event-status-badge {
  position: absolute;
  bottom: 16px;
  right: 24px;
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 20px;
}

.event-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}

.detail-label {
  font-size: 10px;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.detail-value {
  font-size: 14px;
  font-weight: 600;
  color: #1e293b;
}

.border-bottom {
  border-bottom: 1px solid #e2e8f0;
}

/* ===== OFFICIAL INVOICE STYLES ===== */
.invoice-page-overlay {
  background-color: #f1f5f9;
}

.invoice-container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
}

.invoice-section {
  width: 100%;
  max-width: 850px;
  min-height: 1000px;
  background-color: white !important;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
  padding: 40px !important;
  font-family: 'Inter', system-ui, sans-serif;
  color: #1a2744;
  position: relative;
}

.section-title {
  color: #00308f;
  font-size: 12px;
  letter-spacing: 1.5px;
  border-left: 4px solid #00308f;
  padding-left: 10px;
  background: #f8fafc;
}

.data-row {
  margin-bottom: 6px;
  font-size: 14px;
}

.invoice-table {
  border-collapse: collapse;
  margin-top: 10px;
}

.invoice-table th, .invoice-table td {
  border: 1px solid #e2e8f0;
  padding: 12px;
  font-size: 14px;
}

.invoice-table th {
  background: #f8fafc;
  color: #00308f;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 1px;
}

.thick-border-top {
  border-top: 2px solid #00308f !important;
}

.final-row {
  border-top: 3px solid #00308f !important;
}

.signature-area {
  margin-top: 100px;
}

.signature-box {
  width: 250px;
}

.sig-line {
  border-top: 1px solid #00308f;
  margin-bottom: 8px;
}

/* Print Specific Styles */
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

  .q-page-container, .q-header, .q-drawer-container, .stats-bar, .cal-header, .cal-card, .sidebar-col, .day-modal-card, .print-hide, .q-dialog__backdrop {
    display: none !important;
  }

  .q-dialog__inner {
    padding: 0 !important;
  }

  .invoice-container {
    padding: 0 !important;
    background: white !important;
  }

  .invoice-section {
    box-shadow: none !important;
    border: none !important;
    position: absolute !important;
    left: 0 !important;
    top: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
  }

  .section-title {
    background: #f1f5f9 !important;
  }
}
</style>
