import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAuditStore } from './auditStore'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null) // null when not logged in
  const role = ref(null) // 'admin', 'manager', 'receptionist'
  const auditStore = useAuditStore()

  const login = (username, password) => {
    // Mock authentication logic
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'admin') {
          user.value = { name: 'Admin Officer (OIC)', serviceNo: '1111' }
          role.value = 'admin'
          auditStore.logAction({
            user: user.value.name,
            role: role.value,
            action: 'Logged In',
            module: 'Authentication',
            details: 'Successful login to the system',
          })
          resolve()
        } else if (username === 'reception' && password === 'reception') {
          user.value = { name: 'Receptionist Cpl', serviceNo: '2222' }
          role.value = 'receptionist'
          auditStore.logAction({
            user: user.value.name,
            role: role.value,
            action: 'Logged In',
            module: 'Authentication',
            details: 'Successful login to the system',
          })
          resolve()
        } else {
          auditStore.logAction({
            user: username || 'Unknown',
            role: 'Unknown',
            action: 'Failed Login',
            module: 'Authentication',
            details: 'Invalid credentials provided',
            status: 'error',
          })
          reject('Invalid credentials')
        }
      }, 500)
    })
  }

  const logout = () => {
    if (user.value) {
      auditStore.logAction({
        user: user.value.name,
        role: role.value,
        action: 'Logged Out',
        module: 'Authentication',
        details: 'User explicitly logged out',
      })
    }
    user.value = null
    role.value = null
  }

  const isAuthenticated = () => {
    return user.value !== null
  }

  const checkAccess = (requiredRole) => {
    if (!role.value) return false
    if (role.value === 'admin') return true // Admins have all access
    if (requiredRole === 'manager' && role.value === 'manager') return true
    if (requiredRole === 'receptionist') return true // Receptions match any low-level requirement
    return false
  }

  // Set default state for development (remove in prod)
  // user.value = { name: 'Admin Officer', serviceNo: '1234' }
  // role.value = 'admin'

  return { user, role, login, logout, isAuthenticated, checkAccess }
})
