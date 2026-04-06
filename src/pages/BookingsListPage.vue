<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
    <!-- Header -->
    <header
      class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
    >
      <div class="row items-center q-gutter-md">
        <img
          :src="logoUrl"
          alt="Eagles' Lagoon View"
          style="height: 55px; width: auto; object-fit: contain; mix-blend-mode: multiply"
        />
        <div>
          <h1 class="text-h5 text-weight-bold q-my-none text-slaf-primary">Eagles' Lagoon View</h1>
          <div class="text-caption text-grey-7">Hotel Management System</div>
        </div>
      </div>
      
      <div class="row q-gutter-md items-center text-right">
        <div>
          <div class="text-weight-bold text-h6 text-slaf-primary">Bookings Directory</div>
          <div class="text-caption text-grey-7">Manage and view all event reservations</div>
        </div>
        <q-btn color="slaf-success" icon="add" label="New Booking" to="/banquet" />
      </div>
    </header>

    <q-card class="shadow-1">
      <q-card-section>
        <div class="row align-center justify-between q-mb-md">
          <div class="text-h6 text-slaf-primary text-weight-bold">
            <q-icon name="list_alt" class="q-mr-sm" /> All Event Bookings
          </div>
          <q-input outlined dense v-model="filter" placeholder="Search Bookings" class="bg-white" style="width: 300px">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <q-table
          :rows="events"
          :columns="columns"
          row-key="id"
          :filter="filter"
          class="no-shadow slaf-table"
          :pagination="initialPagination"
        >
          <!-- Custom Status formatting -->
          <template v-slot:body-cell-status="props">
            <q-td :props="props">
              <q-chip
                :color="getStatusColor(props.row.status)"
                text-color="white"
                dense
                size="sm"
                class="text-weight-bold"
              >
                {{ props.row.status }}
              </q-chip>
            </q-td>
          </template>

          <!-- Custom Actions formatting -->
          <template v-slot:body-cell-actions="props">
            <q-td :props="props" class="text-center">
              <q-btn flat round color="slaf-primary" icon="visibility" size="sm" @click="viewDetails(props.row)">
                <q-tooltip>View Details</q-tooltip>
              </q-btn>
              <q-btn flat round color="slaf-accent" icon="edit" size="sm" @click="editBooking(props.row)">
                <q-tooltip>Edit Booking</q-tooltip>
              </q-btn>
            </q-td>
          </template>
        </q-table>
      </q-card-section>
    </q-card>

    <!-- Details Modal -->
    <q-dialog v-model="detailModalOpen">
      <q-card style="width: 500px; max-width: 80vw" class="rounded-borders relative-position">
        <div class="bg-slaf-primary text-white q-pa-md row items-center justify-between">
          <div class="text-h6 text-weight-bold"><q-icon name="event" class="q-mr-sm" /> Booking Details</div>
          <q-btn icon="close" flat round dense v-close-popup />
        </div>
        
        <q-card-section class="q-pt-md" v-if="selectedEvent">
          <div class="text-center q-mb-md">
            <q-chip :color="getStatusColor(selectedEvent.status)" text-color="white" class="text-weight-bold">
              {{ selectedEvent.status }}
            </q-chip>
          </div>
          <q-list separator>
            <q-item>
              <q-item-section avatar><q-icon color="grey-7" name="person" /></q-item-section>
              <q-item-section>
                <q-item-label caption>Client Name</q-item-label>
                <q-item-label class="text-weight-bold">{{ selectedEvent.client }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon color="grey-7" name="celebration" /></q-item-section>
              <q-item-section>
                <q-item-label caption>Event</q-item-label>
                <q-item-label class="text-weight-bold">{{ selectedEvent.title }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon color="grey-7" name="event_available" /></q-item-section>
              <q-item-section>
                <q-item-label caption>Date & Time</q-item-label>
                <q-item-label class="text-weight-bold">{{ selectedEvent.date }} | {{ selectedEvent.timeFrom }} - {{ selectedEvent.timeTo }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon color="grey-7" name="place" /></q-item-section>
              <q-item-section>
                <q-item-label caption>Venue</q-item-label>
                <q-item-label class="text-weight-bold">{{ selectedEvent.venue }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar><q-icon color="grey-7" name="restaurant_menu" /></q-item-section>
              <q-item-section>
                <q-item-label caption>Package & Pax</q-item-label>
                <q-item-label class="text-weight-bold">{{ selectedEvent.package }} ({{ selectedEvent.pax }} Guests)</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        
        <q-separator />
        
        <q-card-actions align="right" class="bg-grey-1 q-pa-md">
          <q-btn flat label="Close" color="grey-8" v-close-popup />
          <q-btn unelevated label="Edit Booking" color="slaf-accent" text-color="black" @click="editBooking(selectedEvent)" icon="edit" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useEventStore } from 'src/stores/eventStore'

const $q = useQuasar()

const logoUrl = computed(() => import.meta.env.BASE_URL + 'images/logo.png')
const eventStore = useEventStore()

const events = computed(() => eventStore.events)
const filter = ref('')

const initialPagination = {
  sortBy: 'date',
  descending: true,
  page: 1,
  rowsPerPage: 10
}

const columns = [
  { name: 'date', required: true, label: 'Event Date', align: 'left', field: 'date', sortable: true },
  { name: 'client', required: true, label: 'Client Name', align: 'left', field: 'client', sortable: true },
  { name: 'title', align: 'left', label: 'Event Title', field: 'title', sortable: true },
  { name: 'venue', align: 'left', label: 'Venue', field: 'venue', sortable: true },
  { name: 'pax', align: 'center', label: 'Expected Pax', field: 'pax', sortable: true },
  { name: 'package', align: 'left', label: 'Package Type', field: 'package', sortable: true },
  { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },
  { name: 'actions', align: 'center', label: 'Actions', field: 'actions', sortable: false }
]

onMounted(() => {
  eventStore.initializeStore()
})

const getStatusColor = (status) => {
  if (!status) return 'grey-7'
  switch (status.toLowerCase()) {
    case 'confirmed': return 'green-7'
    case 'tentative': return 'orange-8'
    case 'completed': return 'blue-7'
    case 'cancelled': return 'red-7'
    default: return 'grey-7'
  }
}

const detailModalOpen = ref(false)
const selectedEvent = ref(null)

const viewDetails = (row) => {
  selectedEvent.value = row
  detailModalOpen.value = true
}

const editBooking = (row) => {
  $q.notify({
    type: 'info',
    message: `Edit feature for ${row.client}'s booking is coming soon!`,
    position: 'top-right',
    icon: 'build'
  })
}
</script>

<style lang="scss" scoped>
.slaf-table {
  /* Give the table header a professional SLAF look */
  :deep(thead tr) {
    background-color: #f0f4f8;
    th {
      font-weight: 700 !important;
      color: #00308f;
      text-transform: uppercase;
      font-size: 13px;
    }
  }

  /* Hover effect for rows */
  :deep(tbody tr:hover) {
    background-color: rgba(0, 48, 143, 0.04);
  }
}
</style>
