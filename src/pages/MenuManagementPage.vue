<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
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
        <template v-slot:body-cell-status="props">
          <q-td :props="props">
            <q-badge :color="getStatusColor(props.row.fbStatus)">
              {{ props.row.fbStatus }}
            </q-badge>
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props" class="q-gutter-sm text-right">
            <q-btn
              flat
              round
              color="primary"
              :icon="props.row.fbStatus === 'PUBLISHED' ? 'visibility' : 'edit'"
              size="sm"
              @click="openEditDialog(props.row)"
            >
              <q-tooltip>{{
                props.row.fbStatus === 'PUBLISHED' ? 'View/Edit' : 'Process Workflow'
              }}</q-tooltip>
            </q-btn>
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
          <q-td :props="props" class="text-weight-bold">
            {{ props.row.basePrice > 0 ? formatCurrency(props.row.basePrice) : 'Custom/TBD' }}
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- Add/Edit Dialog -->
    <q-dialog v-model="isDialogOpen" persistent maximized>
      <q-card class="column full-height bg-grey-2">
        <q-card-section class="row items-center q-pb-none bg-slaf-primary text-white">
          <div class="text-h6 text-weight-bold">
            {{ isEditing ? 'Menu Costing & Configuration' : 'Create New Menu Draft' }}
          </div>
          <q-badge :color="getStatusColor(formData.fbStatus)" class="q-ml-md text-subtitle2">
            Status: {{ formData.fbStatus }}
          </q-badge>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup text-color="white" />
        </q-card-section>

        <q-card-section class="col q-pt-md scroll row justify-center">
          <div style="max-width: 1000px; width: 100%" class="q-gutter-y-md">
            <!-- Basic Config -->
            <q-card flat bordered>
              <q-card-section class="bg-grey-3">
                <div class="text-subtitle1 text-weight-bold">
                  <q-icon name="menu_book" class="q-mr-sm" />1. Basic Details & Menu Template
                </div>
              </q-card-section>
              <q-card-section class="row q-col-gutter-md">
                <div class="col-12 col-md-6">
                  <q-input
                    v-model="formData.name"
                    outlined
                    dense
                    label="Menu Name"
                    :rules="[(val) => !!val || 'Required']"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <q-select
                    v-model="formData.venue"
                    :options="['Any', 'Indoor', 'Outdoor', 'Garden']"
                    outlined
                    dense
                    label="Target Venue"
                  />
                </div>
                <div class="col-12 col-md-6">
                  <q-input
                    v-model.number="formData.minPax"
                    type="number"
                    outlined
                    dense
                    label="Minimum Pax Required"
                    hint="Set 0 if no limit"
                  />
                </div>
                <!-- Calculate Final Price internally, don't allow raw edit if workflow is strict, but show it for clarity -->
                <div class="col-12 col-md-6">
                  <q-input
                    v-model.number="calculatedBasePrice"
                    type="number"
                    outlined
                    dense
                    readonly
                    label="Final Base Price (LKR)"
                    input-class="text-weight-bold text-primary"
                    hint="Auto-calculated from Costing Section"
                  />
                </div>

                <div class="col-12">
                  <div class="text-subtitle2 text-primary q-mb-sm">
                    <q-icon name="auto_awesome" color="accent" class="q-mr-xs" />
                    Quick Add Template Blocks:
                  </div>
                  <div class="row q-gutter-sm q-mb-md">
                    <q-btn
                      v-for="b in menuStore.templateBlocks"
                      :key="b.id"
                      :label="b.name"
                      size="sm"
                      color="primary"
                      outline
                      rounded
                      @click="appendBlock(b.content)"
                    />
                  </div>
                  <q-input
                    v-model="formData.template"
                    type="textarea"
                    outlined
                    label="Menu Template (Auto-Fill Format)"
                    rows="8"
                    bg-color="amber-1"
                  />
                </div>
              </q-card-section>
            </q-card>

            <!-- Costing Workflow Section -->
            <q-card flat bordered>
              <q-card-section class="bg-blue-grey-1">
                <div class="text-subtitle1 text-weight-bold">
                  <q-icon name="monetization_on" class="q-mr-sm" />2. Costing & Approval Workflow
                </div>
              </q-card-section>
              <q-card-section>
                <q-stepper v-model="currentStep" vertical color="primary" animated flat>
                  <!-- Kitchen Step -->
                  <q-step
                    :name="1"
                    title="Kitchen Department"
                    icon="restaurant"
                    :done="currentStep > 1"
                  >
                    <div class="q-pb-md text-grey-8">
                      Enter the base raw material cost for this menu per pax.
                    </div>
                    <q-input
                      v-model.number="formData.kitchenCost"
                      type="number"
                      outlined
                      dense
                      label="Kitchen Cost (LKR)"
                      style="max-width: 300px"
                    >
                      <template v-slot:prepend><q-icon name="soup_kitchen" /></template>
                    </q-input>
                    <q-stepper-navigation
                      v-if="formData.fbStatus === 'DRAFT' || formData.fbStatus === 'REJECTED'"
                    >
                      <q-btn @click="submitToFB" color="primary" label="Submit to F&B Manager" />
                    </q-stepper-navigation>
                  </q-step>

                  <!-- F&B Step -->
                  <q-step
                    :name="2"
                    title="F&B Manager Approval"
                    icon="fact_check"
                    :done="currentStep > 2"
                    :disable="formData.fbStatus === 'DRAFT'"
                  >
                    <div class="q-pb-md">
                      <div>
                        <span class="text-grey-7">Submitted Kitchen Cost:</span>
                        <strong class="text-primary">{{
                          formatCurrency(formData.kitchenCost)
                        }}</strong>
                      </div>
                      <div class="text-caption text-grey">
                        If approved, 10% gas charge will be auto-calculated.
                      </div>
                    </div>

                    <q-stepper-navigation v-if="formData.fbStatus === 'PENDING_FB_APPROVAL'">
                      <q-btn
                        @click="approveFB"
                        color="positive"
                        label="Approve & Send to Accounts"
                        class="q-mr-sm"
                      />
                      <q-btn
                        @click="rejectFB"
                        color="negative"
                        outline
                        label="Reject (Back to Kitchen)"
                      />
                    </q-stepper-navigation>
                    <div v-else-if="currentStep > 2" class="text-positive text-weight-bold">
                      <q-icon name="check_circle" /> Approved
                    </div>
                  </q-step>

                  <!-- Accounts Step -->
                  <q-step
                    :name="3"
                    title="Accounts Department"
                    icon="account_balance"
                    :disable="
                      formData.fbStatus === 'DRAFT' ||
                      formData.fbStatus === 'PENDING_FB_APPROVAL' ||
                      formData.fbStatus === 'REJECTED'
                    "
                  >
                    <div class="row q-col-gutter-md q-pb-md">
                      <div class="col-12 col-sm-4">
                        <q-input
                          v-model.number="formData.kitchenCost"
                          readonly
                          outlined
                          dense
                          label="Kitchen Cost"
                        />
                      </div>
                      <div class="col-12 col-sm-4">
                        <q-input
                          v-model.number="formData.gasCharge"
                          readonly
                          outlined
                          dense
                          label="Gas Charge (10%)"
                          hint="Auto-calculated"
                        />
                      </div>
                      <div class="col-12 col-sm-4">
                        <q-input
                          v-model.number="formData.officeCharge"
                          type="number"
                          outlined
                          dense
                          label="Office Charge"
                        />
                      </div>
                      <div class="col-12 col-sm-4">
                        <q-input
                          v-model.number="formData.profitMargin"
                          type="number"
                          outlined
                          dense
                          label="Profit Margin"
                        />
                      </div>
                    </div>

                    <div
                      class="q-pa-md bg-blue-1 rounded-borders text-center text-subtitle1 q-mb-md"
                    >
                      Calculated Final Base Price:
                      <strong class="text-primary text-h6">{{
                        formatCurrency(calculatedBasePrice)
                      }}</strong>
                    </div>

                    <q-stepper-navigation v-if="formData.fbStatus === 'PENDING_ACCOUNTS'">
                      <q-btn
                        @click="publishMenu"
                        color="slaf-primary"
                        label="Finalize & Publish Menu"
                      />
                    </q-stepper-navigation>
                    <div
                      v-else-if="formData.fbStatus === 'PUBLISHED'"
                      class="text-positive text-weight-bold"
                    >
                      <q-icon name="verified" /> Menu Published
                    </div>
                  </q-step>
                </q-stepper>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="bg-white q-pa-md">
          <q-btn flat label="Close" color="grey-8" v-close-popup />
          <q-btn
            unelevated
            label="Save Draft"
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
import { ref, computed, onMounted } from 'vue'
import { useMenuStore } from 'src/stores/menuStore'
import { useQuasar } from 'quasar'

const menuStore = useMenuStore()
const $q = useQuasar()

const columns = [
  { name: 'name', align: 'left', label: 'Menu Name', field: 'name', sortable: true },
  { name: 'venue', align: 'left', label: 'Venue Type', field: 'venue', sortable: true },
  { name: 'status', align: 'left', label: 'Approval Status', field: 'fbStatus', sortable: true },
  { name: 'minPax', align: 'right', label: 'Min Pax', field: 'minPax', sortable: true },
  {
    name: 'basePrice',
    align: 'right',
    label: 'Final Price (LKR)',
    field: 'basePrice',
    sortable: true,
  },
  { name: 'actions', align: 'right', label: 'Actions', field: 'actions' },
]

const getStatusColor = (status) => {
  switch (status) {
    case 'PUBLISHED':
      return 'positive'
    case 'PENDING_FB_APPROVAL':
      return 'orange'
    case 'PENDING_ACCOUNTS':
      return 'info'
    case 'REJECTED':
      return 'negative'
    default:
      return 'grey-7' // DRAFT
  }
}

const isDialogOpen = ref(false)
const isEditing = ref(false)
const currentEditId = ref(null)

const formData = ref({
  name: '',
  venue: 'Any',
  minPax: 0,
  template: '',
  kitchenCost: 0,
  fbStatus: 'DRAFT',
  gasCharge: 0,
  officeCharge: 0,
  profitMargin: 0,
  basePrice: 0,
})

const calculatedBasePrice = computed(() => {
  return (
    Number(formData.value.kitchenCost || 0) +
    Number(formData.value.gasCharge || 0) +
    Number(formData.value.officeCharge || 0) +
    Number(formData.value.profitMargin || 0)
  )
})

const currentStep = computed(() => {
  if (formData.value.fbStatus === 'DRAFT' || formData.value.fbStatus === 'REJECTED') return 1
  if (formData.value.fbStatus === 'PENDING_FB_APPROVAL') return 2
  if (formData.value.fbStatus === 'PENDING_ACCOUNTS' || formData.value.fbStatus === 'PUBLISHED')
    return 3
  return 1
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
  formData.value = {
    name: '',
    venue: 'Any',
    minPax: 0,
    template: '',
    kitchenCost: 0,
    fbStatus: 'DRAFT',
    gasCharge: 0,
    officeCharge: 0,
    profitMargin: 0,
    basePrice: 0,
  }
  isDialogOpen.value = true
}

const openEditDialog = (menu) => {
  isEditing.value = true
  currentEditId.value = menu.id
  formData.value = { ...menu }
  isDialogOpen.value = true
}

// Workflow Actions
const submitToFB = () => {
  if (!formData.value.kitchenCost || formData.value.kitchenCost <= 0) {
    $q.notify({ type: 'warning', message: 'Please enter a valid Kitchen Cost first.' })
    return
  }
  formData.value.fbStatus = 'PENDING_FB_APPROVAL'
  saveMenu()
}

const approveFB = () => {
  formData.value.fbStatus = 'PENDING_ACCOUNTS'
  // Auto-calculate 10% gas charge
  formData.value.gasCharge = Math.round(Number(formData.value.kitchenCost) * 0.1)
  saveMenu()
}

const rejectFB = () => {
  formData.value.fbStatus = 'REJECTED'
  saveMenu()
}

const publishMenu = () => {
  formData.value.fbStatus = 'PUBLISHED'
  formData.value.basePrice = calculatedBasePrice.value
  saveMenu()
}

const saveMenu = () => {
  if (!formData.value.name) {
    $q.notify({ type: 'negative', message: 'Menu Name is required.' })
    return
  }

  // Always update the basePrice to the internally calculated one before saving
  formData.value.basePrice = calculatedBasePrice.value

  if (isEditing.value) {
    menuStore.updateMenu(currentEditId.value, formData.value)
    $q.notify({ type: 'positive', message: 'Menu updated successfully.' })
  } else {
    menuStore.addMenu(formData.value)
    $q.notify({ type: 'positive', message: 'New menu draft created.' })
    isEditing.value = true // Switch to edit mode so they can continue the workflow
    currentEditId.value = menuStore.menus[menuStore.menus.length - 1].id
  }

  if (formData.value.fbStatus === 'DRAFT' || formData.value.fbStatus === 'PUBLISHED') {
    isDialogOpen.value = false
  }
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
