<template>
  <q-page class="slaf-dashboard q-pa-lg bg-grey-2">
    <!-- Top Navigation Header -->
    <header
      class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
    >
      <div class="row items-center q-gutter-md">
        <q-btn flat round icon="arrow_back" color="slaf-primary" to="/" />
        <div>
          <h1 class="text-h5 text-weight-bold q-my-none text-slaf-primary">Menu Management</h1>
          <div class="text-caption text-grey-7">Configure Banquet Packages</div>
        </div>
      </div>
      <q-btn
        unelevated
        color="slaf-accent"
        text-color="black"
        icon="add"
        label="Add New Menu"
        class="text-weight-bold"
        @click="openAddDialog"
      />
    </header>

    <!-- Data Table -->
    <q-card class="shadow-1 rounded-borders">
      <q-table
        flat
        :rows="menuStore.menus"
        :columns="columns"
        row-key="id"
        :pagination="{ rowsPerPage: 10 }"
      >
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-sm">
            <q-btn
              flat
              round
              color="primary"
              icon="edit"
              size="sm"
              @click="openEditDialog(props.row)"
            />
            <q-btn
              flat
              round
              color="negative"
              icon="delete"
              size="sm"
              @click="confirmDelete(props.row)"
            />
          </q-td>
        </template>
        <template v-slot:body-cell-basePrice="props">
          <q-td :props="props">
            {{ props.row.basePrice > 0 ? formatCurrency(props.row.basePrice) : 'Custom' }}
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- Add/Edit Dialog -->
    <q-dialog v-model="isDialogOpen" persistent maximized>
      <q-card class="column full-height">
        <q-card-section class="row items-center q-pb-none bg-slaf-primary text-white">
          <div class="text-h6 text-weight-bold">{{ isEditing ? 'Edit Menu' : 'Add New Menu' }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup text-color="white" />
        </q-card-section>

        <q-card-section class="col q-pt-md scroll">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-input
                v-model="formData.name"
                outlined
                label="Menu Name"
                :rules="[(val) => !!val || 'Name is required']"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-select
                v-model="formData.venue"
                :options="['Any', 'Indoor', 'Outdoor', 'Garden']"
                outlined
                label="Target Venue"
              />
            </div>
            <div class="col-12 col-md-6">
              <q-input
                v-model.number="formData.basePrice"
                type="number"
                outlined
                label="Base Price (LKR)"
                hint="Set to 0 if the price is custom."
              />
            </div>
            <div class="col-12 col-md-6">
              <q-input
                v-model.number="formData.minPax"
                type="number"
                outlined
                label="Minimum Pax Required"
                hint="Set to 0 if there is no hard limit."
              />
            </div>
            <div class="col-12">
              <div class="text-subtitle2 text-primary q-mb-sm">
                <q-icon name="auto_awesome" color="accent" class="q-mr-xs" />
                Quick Add Template Blocks:
              </div>
              <div class="row q-gutter-sm q-mb-md">
                <q-btn
                  v-for="block in menuStore.templateBlocks"
                  :key="block.id"
                  :label="block.name"
                  size="sm"
                  color="primary"
                  outline
                  rounded
                  @click="appendBlock(block.content)"
                />
              </div>
              <q-input
                v-model="formData.template"
                type="textarea"
                outlined
                label="Menu Template (Auto-Fill Format)"
                hint="Edit this text. This will be instantly pasted into the BEO Menu Selection when this package is chosen."
                rows="14"
                bg-color="amber-1"
              />
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            unelevated
            label="Save Menu"
            color="slaf-accent"
            text-color="black"
            @click="saveMenu"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useMenuStore } from 'src/stores/menuStore'
import { useQuasar } from 'quasar'

const menuStore = useMenuStore()
const $q = useQuasar()

const columns = [
  { name: 'name', align: 'left', label: 'Menu Name', field: 'name', sortable: true },
  { name: 'venue', align: 'left', label: 'Venue Type', field: 'venue', sortable: true },
  {
    name: 'basePrice',
    align: 'right',
    label: 'Base Price (LKR)',
    field: 'basePrice',
    sortable: true,
  },
  { name: 'minPax', align: 'right', label: 'Min Pax', field: 'minPax', sortable: true },
  { name: 'actions', align: 'center', label: 'Actions', field: 'actions' },
]

const isDialogOpen = ref(false)
const isEditing = ref(false)
const currentEditId = ref(null)

const formData = ref({
  name: '',
  venue: 'Any',
  basePrice: 0,
  minPax: 0,
  template: '',
})

onMounted(() => {
  menuStore.initializeStore()
})

const appendBlock = (content) => {
  if (formData.value.template) {
    if (!formData.value.template.endsWith('\n\n')) {
      formData.value.template += '\n\n'
    }
    formData.value.template += content
  } else {
    formData.value.template = content
  }
}

const openAddDialog = () => {
  isEditing.value = false
  currentEditId.value = null
  formData.value = { name: '', venue: 'Any', basePrice: 0, minPax: 0, template: '' }
  isDialogOpen.value = true
}

const openEditDialog = (menu) => {
  isEditing.value = true
  currentEditId.value = menu.id
  formData.value = { ...menu }
  isDialogOpen.value = true
}

const saveMenu = () => {
  if (!formData.value.name) {
    $q.notify({ type: 'negative', message: 'Menu Name is required.' })
    return
  }

  if (isEditing.value) {
    menuStore.updateMenu(currentEditId.value, formData.value)
    $q.notify({ type: 'positive', message: 'Menu updated successfully.' })
  } else {
    menuStore.addMenu(formData.value)
    $q.notify({ type: 'positive', message: 'New menu created.' })
  }
  isDialogOpen.value = false
}

const confirmDelete = (menu) => {
  $q.dialog({
    title: 'Confirm Deletion',
    message: `Are you sure you want to delete "${menu.name}"? This will remove standard pricing and templates for this package.`,
    cancel: true,
    persistent: true,
  }).onOk(() => {
    menuStore.deleteMenu(menu.id)
    $q.notify({ type: 'positive', message: 'Menu deleted.' })
  })
}

const formatCurrency = (val) =>
  new Intl.NumberFormat('en-LK', { style: 'currency', currency: 'LKR' }).format(val || 0)
</script>

<style lang="scss" scoped>
.slaf-primary {
  color: #00308f;
}
.bg-slaf-primary {
  background-color: #00308f;
}
.slaf-accent {
  color: #ffd700;
}
.bg-slaf-accent {
  background-color: #ffd700;
}
</style>
