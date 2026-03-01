import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuditStore = defineStore('audit', () => {
  const logs = ref([
    {
      id: 1,
      timestamp: new Date(Date.now() - 3600000).toISOString(),
      user: 'Admin Officer',
      role: 'admin',
      action: 'System Initialized',
      module: 'System',
      details: 'Audit logging started',
      status: 'success',
    },
  ])

  const logAction = ({ user, role, action, module, details, status = 'success' }) => {
    const newLog = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      user: user || 'Unknown',
      role: role || 'Unknown',
      action,
      module,
      details,
      status,
    }

    // Add to beginning of array
    logs.value.unshift(newLog)

    // In a real app, this is where you'd send this to Supabase/backend
    console.log(`[AUDIT] ${action} by ${user} in ${module}: ${status}`)
  }

  const getLogsByModule = (moduleName) => {
    return logs.value.filter((log) => log.module === moduleName)
  }

  return { logs, logAction, getLogsByModule }
})
