<template>
  <q-layout
    view="lHh Lpr lFf"
    class="main-layout-bg"
    :style="{ '--bg-image': `url(${bgImageUrl})` }"
  >
    <!-- Header -->
    <q-header elevated class="bg-slaf-primary text-white print-hide">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <img :src="logoUrl" alt="Eagles' Lagoon View" class="toolbar-logo q-mr-sm" />
        <q-toolbar-title class="text-weight-bold"> Eagles' Lagoon View </q-toolbar-title>
        <div class="q-mr-sm" v-if="authStore.user">
          <div class="text-weight-bold" style="line-height: 1.2">{{ authStore.user.name }}</div>
          <div class="text-caption text-right text-slaf-accent" style="line-height: 1">
            {{ authStore.role === 'admin' ? 'Administrator' : 'Receptionist' }}
          </div>
        </div>
        <q-btn flat round>
          <q-avatar size="32px" color="slaf-accent" text-color="black">
            <q-icon name="person" />
          </q-avatar>
          <q-menu auto-close>
            <q-list style="min-width: 150px">
              <q-item clickable @click="logout" class="text-negative">
                <q-item-section avatar>
                  <q-icon name="logout" color="negative" />
                </q-item-section>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- Sidebar / Drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1 print-hide">
      <div class="q-pa-md text-center bg-slaf-primary text-white sidebar-header">
        <img :src="logoUrl" alt="Eagles' Lagoon View" class="sidebar-logo q-mb-sm" />
        <div class="text-weight-bold text-h6">Eagles' Lagoon View</div>
        <div class="text-caption text-slaf-accent">Hotel Management System</div>
      </div>

      <q-list padding class="text-grey-9">
        <q-item-label header class="text-weight-bold">Navigation</q-item-label>

        <q-item
          clickable
          v-ripple
          to="/"
          exact
          active-class="bg-slaf-primary text-white text-weight-bold rounded-borders q-mx-sm q-mb-xs transition-bg"
        >
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/banquet"
          active-class="bg-slaf-primary text-white text-weight-bold rounded-borders q-mx-sm q-mb-xs transition-bg"
        >
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Banquet Booking</q-item-label>
            <q-item-label caption :class="$route.path.includes('/banquet') ? 'text-blue-2' : ''"
              >Event Management</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/calendar"
          active-class="bg-slaf-primary text-white text-weight-bold rounded-borders q-mx-sm q-mb-xs transition-bg"
        >
          <q-item-section avatar>
            <q-icon name="calendar_month" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Calendar</q-item-label>
            <q-item-label caption :class="$route.path.includes('/calendar') ? 'text-blue-2' : ''"
              >Event Schedule</q-item-label
            >
          </q-item-section>
        </q-item>

        <q-item
          clickable
          v-ripple
          to="/reports"
          active-class="bg-slaf-primary text-white text-weight-bold rounded-borders q-mx-sm q-mb-xs transition-bg"
        >
          <q-item-section avatar>
            <q-icon name="assessment" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Reports</q-item-label>
            <q-item-label caption :class="$route.path.includes('/reports') ? 'text-blue-2' : ''"
              >Analytics & Export</q-item-label
            >
          </q-item-section>
        </q-item>

        <template v-if="authStore.checkAccess('admin')">
          <q-separator class="q-my-md" />
          <q-item-label header class="text-weight-bold text-overline text-grey-6"
            >ADMINISTRATION</q-item-label
          >

          <q-item
            clickable
            v-ripple
            to="/menus"
            active-class="bg-slaf-primary text-white text-weight-bold rounded-borders q-mx-sm q-mb-xs transition-bg"
          >
            <q-item-section avatar>
              <q-icon name="restaurant_menu" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Manage Menus</q-item-label>
              <q-item-label caption :class="$route.path.includes('/menus') ? 'text-blue-2' : ''"
                >Edit Packages & Prices</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/template-blocks"
            active-class="bg-slaf-primary text-white text-weight-bold rounded-borders q-mx-sm q-mb-xs transition-bg"
          >
            <q-item-section avatar>
              <q-icon name="category" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Template Blocks</q-item-label>
              <q-item-label
                caption
                :class="$route.path.includes('/template-blocks') ? 'text-blue-2' : ''"
                >Quick Add Items</q-item-label
              >
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            to="/audit-logs"
            active-class="bg-slaf-primary text-white text-weight-bold rounded-borders q-mx-sm q-mb-xs transition-bg"
          >
            <q-item-section avatar>
              <q-icon name="admin_panel_settings" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Audit Trails</q-item-label>
              <q-item-label
                caption
                :class="$route.path.includes('/audit-logs') ? 'text-blue-2' : ''"
                >System Activity Logs</q-item-label
              >
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const leftDrawerOpen = ref(false)

const logoUrl = computed(() => import.meta.env.BASE_URL + 'images/logo.png')
const bgImageUrl = computed(() => import.meta.env.BASE_URL + 'images/hotel-bg.jpg')

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style lang="scss">
$slaf-primary: #00308f;
$slaf-accent: #ffd700;

.bg-slaf-primary {
  background-color: $slaf-primary !important;
}
.text-slaf-primary {
  color: $slaf-primary !important;
}
.bg-slaf-accent {
  background-color: $slaf-accent !important;
}
.text-slaf-accent {
  color: $slaf-accent !important;
}
.transition-bg {
  transition: all 0.3s ease;
}
.q-item {
  border-radius: 8px;
  margin: 0 8px 4px 8px;
}
.q-item:not(.bg-slaf-primary):hover {
  background: #f0f4f8;
}

/* Logo styles */
.toolbar-logo {
  height: 42px;
  width: auto;
  object-fit: contain;
  mix-blend-mode: screen;
  margin-right: 4px;
}

.sidebar-header {
  padding: 24px 16px 20px;
  background: linear-gradient(180deg, #001f6b 0%, #00308f 100%) !important;
}

.sidebar-logo {
  width: 150px;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
  mix-blend-mode: screen;
}

/* Background Watermark */
.main-layout-bg {
  position: relative;
  background-color: #f5f7fa; /* Light fresh background color to complement the watermark */
}

.main-layout-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0.6; /* 60% opacity as requested by user */
  z-index: 0;
  pointer-events: none; /* Mouse clicks pass through */
}

/* Ensure page containers sit above the background */
.q-page-container {
  position: relative;
  z-index: 1;
}
</style>
