<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
    <!-- Header -->
    <header
      class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
    >
      <div class="row items-center q-gutter-md">
        <q-btn flat round icon="inventory_2" color="slaf-primary" />
        <div>
          <h1 class="text-h5 text-weight-bold q-my-none text-slaf-primary">Banquet Inventory</h1>
          <div class="text-caption text-grey-7">Manage stock levels, damages, and assets</div>
        </div>
      </div>

      <q-btn
        color="slaf-primary"
        icon="add"
        label="Add New Item"
        @click="openAddDialog"
        class="text-weight-bold"
        unelevated
      />
    </header>

    <!-- Filters and Table -->
    <q-card class="shadow-1 rounded-borders">
      <q-card-section class="bg-grey-1 row q-gutter-md items-center">
        <div class="col-12 col-md-4">
          <q-input outlined dense v-model="search" placeholder="Search items...">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-12 col-md-4">
          <q-select
            outlined
            dense
            v-model="filterCategory"
            :options="['All', ...inventoryStore.categories]"
            label="Filter by Category"
            emit-value
            map-options
          />
        </div>
      </q-card-section>

      <q-table
        flat
        :rows="filteredItems"
        :columns="columns"
        row-key="id"
        :pagination="{ rowsPerPage: 15 }"
        class="inventory-table"
      >
        <template v-slot:body-cell-name="props">
          <q-td :props="props">
            <div class="row items-center">
              <q-avatar size="32px" color="blue-1" text-color="primary" class="q-mr-sm">
                <q-icon :name="getCategoryIcon(props.row.category)" />
              </q-avatar>
              <div>
                <div class="text-weight-bold text-primary">{{ props.row.name }}</div>
                <div class="text-caption text-grey-7">{{ props.row.category }}</div>
              </div>
            </div>
          </q-td>
        </template>

        <template v-slot:body-cell-totalQuantity="props">
          <q-td :props="props" class="text-weight-bold">
            {{ props.row.totalQuantity }}
          </q-td>
        </template>

        <template v-slot:body-cell-availableQuantity="props">
          <q-td :props="props">
            <q-badge :color="getAvailabilityColor(props.row)" class="q-pa-xs text-subtitle2">
              {{ props.row.totalQuantity - props.row.damagedQuantity }}
            </q-badge>
          </q-td>
        </template>

        <template v-slot:body-cell-damagedQuantity="props">
          <q-td :props="props">
            <span
              :class="
                props.row.damagedQuantity > 0 ? 'text-negative text-weight-bold' : 'text-grey'
              "
            >
              {{ props.row.damagedQuantity }}
            </span>
          </q-td>
        </template>

        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="text-right">
            <q-btn
              flat
              round
              color="warning"
              icon="report_problem"
              size="sm"
              @click="openDamageDialog(props.row)"
            >
              <q-tooltip>Report Damage</q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="primary"
              icon="edit"
              size="sm"
              @click="openEditDialog(props.row)"
            >
              <q-tooltip>Edit Item</q-tooltip>
            </q-btn>
            <q-btn
              flat
              round
              color="negative"
              icon="delete"
              size="sm"
              @click="confirmDelete(props.row)"
            >
              <q-tooltip>Delete</q-tooltip>
            </q-btn>
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- Add/Edit Dialog -->
    <q-dialog v-model="formDialog" persistent>
      <q-card style="min-width: 400px">
        <q-card-section class="row items-center bg-primary text-white">
          <div class="text-h6">{{ isEdit ? 'Edit Item' : 'Add New Inventory Item' }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-gutter-md q-pt-md">
          <q-input v-model="formData.name" outlined dense label="Item Name *" autofocus />
          <q-select
            v-model="formData.category"
            :options="inventoryStore.categories"
            outlined
            dense
            label="Category *"
          />
          <div class="row q-gutter-sm">
            <div class="col">
              <q-input
                v-model.number="formData.totalQuantity"
                type="number"
                outlined
                dense
                label="Total Quantity *"
                min="0"
              />
            </div>
            <div class="col">
              <q-input
                v-model.number="formData.damagedQuantity"
                type="number"
                outlined
                dense
                label="Damaged Stock"
                min="0"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary bg-grey-1">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            color="primary"
            :label="isEdit ? 'Save Changes' : 'Add Item'"
            @click="saveItem"
            unelevated
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Damage Dialog -->
    <q-dialog v-model="damageDialog" persistent>
      <q-card style="min-width: 350px">
        <q-card-section class="bg-warning text-dark">
          <div class="text-h6"><q-icon name="report_problem" class="q-mr-sm" /> Report Damage</div>
        </q-card-section>

        <q-card-section class="q-pt-md">
          <div class="text-subtitle1 q-mb-md">
            Item: <strong>{{ selectedItem?.name }}</strong>
          </div>
          <q-input
            v-model.number="damageAmount"
            type="number"
            outlined
            dense
            label="Number of newly damaged items *"
            min="1"
            :max="selectedItem ? selectedItem.totalQuantity - selectedItem.damagedQuantity : 1"
          />
        </q-card-section>

        <q-card-actions align="right" class="bg-grey-1">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn
            color="warning"
            text-color="dark"
            label="Record Damage"
            @click="submitDamage"
            unelevated
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useInventoryStore } from 'src/stores/inventoryStore'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const inventoryStore = useInventoryStore()

const search = ref('')
const filterCategory = ref('All')

const columns = [
  { name: 'name', align: 'left', label: 'Item Name', field: 'name', sortable: true },
  {
    name: 'totalQuantity',
    align: 'center',
    label: 'Total Stock',
    field: 'totalQuantity',
    sortable: true,
  },
  {
    name: 'availableQuantity',
    align: 'center',
    label: 'Available (Good)',
    field: (row) => row.totalQuantity - row.damagedQuantity,
    sortable: true,
  },
  {
    name: 'damagedQuantity',
    align: 'center',
    label: 'Damaged/Lost',
    field: 'damagedQuantity',
    sortable: true,
  },
  { name: 'actions', align: 'right', label: 'Actions' },
]

const filteredItems = computed(() => {
  let items = inventoryStore.items

  if (filterCategory.value !== 'All') {
    items = items.filter((item) => item.category === filterCategory.value)
  }

  if (search.value) {
    const s = search.value.toLowerCase()
    items = items.filter((item) => item.name.toLowerCase().includes(s))
  }

  return items
})

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Furniture':
      return 'chair'
    case 'Linen':
      return 'checkroom'
    case 'Cutlery & Crockery':
      return 'restaurant'
    case 'Audio/Visual':
      return 'speaker'
    case 'Decorations':
      return 'celebration'
    default:
      return 'inventory_2'
  }
}

const getAvailabilityColor = (row) => {
  const available = row.totalQuantity - row.damagedQuantity
  if (available < row.totalQuantity * 0.2 && row.totalQuantity > 0) return 'negative'
  if (available < row.totalQuantity * 0.5 && row.totalQuantity > 0) return 'warning'
  return 'positive'
}

// Dialog States
const formDialog = ref(false)
const isEdit = ref(false)
const selectedItem = ref(null)
const formData = ref({ name: '', category: '', totalQuantity: 0, damagedQuantity: 0 })

const damageDialog = ref(false)
const damageAmount = ref(1)

const openAddDialog = () => {
  isEdit.value = false
  formData.value = {
    name: '',
    category: inventoryStore.categories[0],
    totalQuantity: 0,
    damagedQuantity: 0,
  }
  formDialog.value = true
}

const openEditDialog = (item) => {
  isEdit.value = true
  selectedItem.value = item
  formData.value = { ...item }
  formDialog.value = true
}

const saveItem = () => {
  if (!formData.value.name || formData.value.totalQuantity === '') {
    $q.notify({ type: 'warning', message: 'Name and Total Quantity are required.' })
    return
  }

  if (isEdit.value) {
    inventoryStore.updateItem(selectedItem.value.id, formData.value)
    $q.notify({ type: 'positive', message: 'Item updated successfully.' })
  } else {
    inventoryStore.addItem(formData.value)
    $q.notify({ type: 'positive', message: 'Item added successfully.' })
  }

  formDialog.value = false
}

const openDamageDialog = (item) => {
  selectedItem.value = item
  damageAmount.value = 1
  damageDialog.value = true
}

const submitDamage = () => {
  if (damageAmount.value < 1) return

  inventoryStore.recordDamage(selectedItem.value.id, damageAmount.value)
  $q.notify({ type: 'warning', message: 'Damage recorded.' })
  damageDialog.value = false
}

const confirmDelete = (item) => {
  $q.dialog({
    title: 'Confirm Deletion',
    message: `Are you sure you want to remove "${item.name}" from the inventory?`,
    cancel: true,
    persistent: true,
    color: 'negative',
  }).onOk(() => {
    inventoryStore.deleteItem(item.id)
    $q.notify({ type: 'positive', message: 'Item deleted.' })
  })
}
</script>

<style scoped>
.inventory-table .q-td {
  padding: 12px 16px;
}
</style>
