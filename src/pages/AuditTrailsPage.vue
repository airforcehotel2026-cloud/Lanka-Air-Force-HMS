<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
    <!-- Header -->
    <header
      class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
    >
      <div class="row items-center q-gutter-md">
        <q-btn flat round icon="arrow_back" color="slaf-primary" to="/" />
        <div>
          <h1 class="text-h5 text-weight-bold q-my-none text-slaf-primary">System Audit Trails</h1>
          <div class="text-caption text-grey-7">Monitor User Activity & Security Logs</div>
        </div>
      </div>

      <!-- Date Filters -->
      <div class="row q-gutter-sm items-center">
        <q-input
          outlined
          dense
          v-model="filterDate"
          type="date"
          label="Filter by Date"
          class="bg-grey-1"
        />
        <q-input
          outlined
          dense
          v-model="searchQuery"
          placeholder="Search logs..."
          class="bg-grey-1"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
    </header>

    <!-- Logs Table -->
    <q-card class="shadow-1 rounded-borders">
      <q-table
        flat
        :rows="filteredLogs"
        :columns="columns"
        row-key="id"
        :pagination="{ rowsPerPage: 15 }"
        class="audit-table"
      >
        <template v-slot:body-cell-timestamp="props">
          <q-td :props="props" class="text-grey-8">
            {{ formatDate(props.row.timestamp) }}
          </q-td>
        </template>

        <template v-slot:body-cell-user="props">
          <q-td :props="props">
            <div class="row items-center">
              <q-avatar
                size="24px"
                :color="props.row.role === 'admin' ? 'slaf-primary' : 'grey-5'"
                text-color="white"
                class="q-mr-sm"
              >
                {{ props.row.user.charAt(0) }}
              </q-avatar>
              <div>
                <div class="text-weight-bold">{{ props.row.user }}</div>
                <div class="text-caption text-grey-6 text-uppercase">{{ props.row.role }}</div>
              </div>
            </div>
          </q-td>
        </template>

        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-badge
              :color="
                props.row.status === 'success'
                  ? 'positive'
                  : props.row.status === 'error'
                    ? 'negative'
                    : 'warning'
              "
              class="q-pa-xs"
            >
              {{ props.row.status }}
            </q-badge>
          </q-td>
        </template>

        <template v-slot:body-cell-details="props">
          <q-td :props="props" class="slaf-truncate max-width-200" :title="props.row.details">
            {{ props.row.details }}
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAuditStore } from 'src/stores/auditStore'
import { date } from 'quasar'

const auditStore = useAuditStore()
const searchQuery = ref('')
const filterDate = ref('')

const columns = [
  { name: 'timestamp', align: 'left', label: 'Date / Time', field: 'timestamp', sortable: true },
  { name: 'user', align: 'left', label: 'User Record', field: 'user', sortable: true },
  { name: 'module', align: 'left', label: 'Module', field: 'module', sortable: true },
  { name: 'action', align: 'left', label: 'Action Taken', field: 'action', sortable: true },
  { name: 'details', align: 'left', label: 'Details', field: 'details' },
  { name: 'status', align: 'center', label: 'Status', field: 'status', sortable: true },
]

const filteredLogs = computed(() => {
  let logs = auditStore.logs

  if (filterDate.value) {
    logs = logs.filter((log) => log.timestamp.startsWith(filterDate.value))
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase()
    logs = logs.filter(
      (log) =>
        log.user.toLowerCase().includes(q) ||
        log.action.toLowerCase().includes(q) ||
        log.module.toLowerCase().includes(q) ||
        log.details.toLowerCase().includes(q),
    )
  }

  return logs
})

const formatDate = (dateString) => {
  return date.formatDate(new Date(dateString), 'YYYY-MM-DD HH:mm:ss')
}
</script>

<style scoped>
.audit-table .q-td {
  padding: 12px 16px;
}
.max-width-200 {
  max-width: 200px;
}
.slaf-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
