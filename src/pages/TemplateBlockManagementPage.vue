<template>
  <q-page class="slaf-dashboard q-pa-lg bg-transparent">
    <!-- Top Navigation Header -->
    <header
      class="row items-center justify-between q-pa-md bg-white rounded-borders shadow-1 q-mb-md"
    >
      <div class="row items-center q-gutter-md">
        <q-btn flat round icon="arrow_back" color="slaf-primary" to="/" />
        <div>
          <h1 class="text-h5 text-weight-bold q-my-none text-slaf-primary">
            Template Block Management
          </h1>
          <div class="text-caption text-grey-7">Configure Quick Add Blocks for Menus</div>
        </div>
      </div>
      <q-btn
        unelevated
        color="slaf-accent"
        text-color="black"
        icon="add"
        label="Add New Block"
        class="text-weight-bold"
        @click="openAddDialog"
      />
    </header>

    <!-- Data Table -->
    <q-card class="shadow-1 rounded-borders">
      <q-table
        flat
        :rows="menuStore.templateBlocks"
        :columns="columns"
        row-key="id"
        :pagination="{ rowsPerPage: 15 }"
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
        <template v-slot:body-cell-content="props">
          <q-td :props="props">
            <div class="ellipsis-2-lines text-caption text-grey-8" style="max-width: 400px">
              {{ props.row.content }}
            </div>
          </q-td>
        </template>
      </q-table>
    </q-card>

    <!-- Add/Edit Dialog -->
    <q-dialog v-model="isDialogOpen" persistent maximized>
      <q-card class="column full-height">
        <q-card-section class="row items-center q-pb-none bg-slaf-primary text-white">
          <div class="text-h6 text-weight-bold">
            {{ isEditing ? 'Edit Template Block' : 'Add New Template Block' }}
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup text-color="white" />
        </q-card-section>

        <q-card-section class="col q-pt-md scroll">
          <div class="row q-col-gutter-md">
            <div class="col-12 col-md-6">
              <q-input
                v-model="formData.name"
                outlined
                label="Button Name"
                hint="e.g. '+ Kids Menu'"
                :rules="[(val) => !!val || 'Name is required']"
              />
            </div>
            <div class="col-12">
              <q-input
                v-model="formData.content"
                type="textarea"
                outlined
                label="Block Text Content"
                hint="This is the exact text that will be pasted when the button is clicked. Include newlines as needed."
                rows="15"
                bg-color="amber-1"
                :rules="[(val) => !!val || 'Content is required']"
              />
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right" class="bg-white">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            unelevated
            label="Save Block"
            color="slaf-accent"
            text-color="black"
            @click="saveBlock"
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
  { name: 'name', align: 'left', label: 'Button Name', field: 'name', sortable: true },
  { name: 'content', align: 'left', label: 'Text Preview', field: 'content' },
  { name: 'actions', align: 'center', label: 'Actions', field: 'actions' },
]

const isDialogOpen = ref(false)
const isEditing = ref(false)
const currentEditId = ref(null)

const formData = ref({
  name: '',
  content: '',
})

onMounted(() => {
  menuStore.initializeStore()
})

const openAddDialog = () => {
  isEditing.value = false
  currentEditId.value = null
  formData.value = { name: '+ ', content: '' }
  isDialogOpen.value = true
}

const openEditDialog = (block) => {
  isEditing.value = true
  currentEditId.value = block.id
  formData.value = { ...block }
  isDialogOpen.value = true
}

const saveBlock = () => {
  if (!formData.value.name || !formData.value.content) {
    $q.notify({ type: 'negative', message: 'Name and Content are required.' })
    return
  }

  if (isEditing.value) {
    menuStore.updateTemplateBlock(currentEditId.value, formData.value)
    $q.notify({ type: 'positive', message: 'Block updated successfully.' })
  } else {
    menuStore.addTemplateBlock(formData.value)
    $q.notify({ type: 'positive', message: 'New block created.' })
  }
  isDialogOpen.value = false
}

const confirmDelete = (block) => {
  $q.dialog({
    title: 'Confirm Deletion',
    message: `Are you sure you want to delete the "${block.name}" block?`,
    cancel: true,
    persistent: true,
  }).onOk(() => {
    menuStore.deleteTemplateBlock(block.id)
    $q.notify({ type: 'positive', message: 'Block deleted.' })
  })
}
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
