import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAuditStore } from './auditStore'
import { useAuthStore } from './authStore'

export const useInventoryStore = defineStore('inventory', () => {
  const items = ref([
    {
      id: '1',
      name: 'Banquet Chairs (Gold)',
      category: 'Furniture',
      totalQuantity: 300,
      damagedQuantity: 5,
      unitPrice: 0,
    },
    {
      id: '2',
      name: 'Banquet Chairs (Silver)',
      category: 'Furniture',
      totalQuantity: 200,
      damagedQuantity: 2,
      unitPrice: 0,
    },
    {
      id: '3',
      name: 'Round Tables (10 Pax)',
      category: 'Furniture',
      totalQuantity: 35,
      damagedQuantity: 1,
      unitPrice: 0,
    },
    {
      id: '4',
      name: 'Rectangular Tables',
      category: 'Furniture',
      totalQuantity: 20,
      damagedQuantity: 0,
      unitPrice: 0,
    },
    {
      id: '5',
      name: 'White Seat Covers',
      category: 'Linen',
      totalQuantity: 500,
      damagedQuantity: 15,
      unitPrice: 0,
    },
    {
      id: '6',
      name: 'Gold Tie Backs',
      category: 'Linen',
      totalQuantity: 300,
      damagedQuantity: 3,
      unitPrice: 0,
    },
    {
      id: '7',
      name: 'Table Cloths (White, Round)',
      category: 'Linen',
      totalQuantity: 40,
      damagedQuantity: 2,
      unitPrice: 0,
    },
    {
      id: '8',
      name: 'Dinner Plates (Noritake)',
      category: 'Cutlery & Crockery',
      totalQuantity: 600,
      damagedQuantity: 20,
      unitPrice: 0,
    },
    {
      id: '9',
      name: 'Water Goblets',
      category: 'Cutlery & Crockery',
      totalQuantity: 500,
      damagedQuantity: 12,
      unitPrice: 0,
    },
    {
      id: '10',
      name: 'Multimedia Projector',
      category: 'Audio/Visual',
      totalQuantity: 2,
      damagedQuantity: 0,
      unitPrice: 0,
    },
    {
      id: '11',
      name: 'PA System (Standard)',
      category: 'Audio/Visual',
      totalQuantity: 1,
      damagedQuantity: 0,
      unitPrice: 0,
    },
    {
      id: '12',
      name: 'Oil Lamp (Traditional)',
      category: 'Decorations',
      totalQuantity: 2,
      damagedQuantity: 0,
      unitPrice: 0,
    },
  ])

  const categories = [
    'Furniture',
    'Linen',
    'Cutlery & Crockery',
    'Audio/Visual',
    'Decorations',
    'Other',
  ]

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Date.now().toString(),
      damagedQuantity: item.damagedQuantity || 0,
    }
    items.value.push(newItem)

    try {
      const authStore = useAuthStore()
      const auditStore = useAuditStore()
      auditStore.logAction({
        user: authStore.user?.name || 'System',
        role: authStore.role || 'system',
        action: 'Added Inventory Item',
        module: 'Inventory Management',
        details: `Added new item: ${item.name} (Qty: ${item.totalQuantity})`,
      })
    } catch (e) {
      console.error('Audit log failed', e)
    }
  }

  const updateItem = (id, updatedData) => {
    const index = items.value.findIndex((i) => i.id === id)
    if (index !== -1) {
      items.value[index] = { ...items.value[index], ...updatedData }

      try {
        const authStore = useAuthStore()
        const auditStore = useAuditStore()
        auditStore.logAction({
          user: authStore.user?.name || 'System',
          role: authStore.role || 'system',
          action: 'Updated Inventory Item',
          module: 'Inventory Management',
          details: `Updated item: ${updatedData.name}`,
        })
      } catch (e) {
        console.error('Audit log failed', e)
      }
    }
  }

  const deleteItem = (id) => {
    const item = items.value.find((i) => i.id === id)
    if (item) {
      items.value = items.value.filter((i) => i.id !== id)

      try {
        const authStore = useAuthStore()
        const auditStore = useAuditStore()
        auditStore.logAction({
          user: authStore.user?.name || 'System',
          role: authStore.role || 'system',
          action: 'Deleted Inventory Item',
          module: 'Inventory Management',
          details: `Removed item: ${item.name}`,
          status: 'warning',
        })
      } catch (e) {
        console.error('Audit log failed', e)
      }
    }
  }

  const recordDamage = (id, additionalDamageQty) => {
    const index = items.value.findIndex((i) => i.id === id)
    if (index !== -1) {
      const item = items.value[index]
      item.damagedQuantity += Number(additionalDamageQty)

      try {
        const authStore = useAuthStore()
        const auditStore = useAuditStore()
        auditStore.logAction({
          user: authStore.user?.name || 'System',
          role: authStore.role || 'system',
          action: 'Recorded Damage',
          module: 'Inventory Management',
          details: `Recorded ${additionalDamageQty} damaged units for ${item.name}`,
          status: 'error',
        })
      } catch (e) {
        console.error('Audit log failed', e)
      }
    }
  }

  return { items, categories, addItem, updateItem, deleteItem, recordDamage }
})
