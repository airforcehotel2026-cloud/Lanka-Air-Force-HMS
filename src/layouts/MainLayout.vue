<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Header -->
    <q-header elevated class="bg-slaf-primary text-white print-hide">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <img src="/images/logo.png" alt="Eagles' Lagoon View" class="toolbar-logo q-mr-sm" />
        <q-toolbar-title class="text-weight-bold"> Eagles' Lagoon View </q-toolbar-title>
        <div class="q-mr-sm">Receptionist Dashboard</div>
        <q-avatar size="32px" color="slaf-accent" text-color="black">
          <q-icon name="person" />
        </q-avatar>
      </q-toolbar>
    </q-header>

    <!-- Sidebar / Drawer -->
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-1 print-hide">
      <div class="q-pa-md text-center bg-slaf-primary text-white sidebar-header">
        <img src="/images/logo.png" alt="Eagles' Lagoon View" class="sidebar-logo q-mb-sm" />
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
      </q-list>
    </q-drawer>

    <!-- Page Content -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
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
  height: 36px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1); /* Makes logo white on dark toolbar */
}

.sidebar-header {
  padding: 20px 16px 16px;
}

.sidebar-logo {
  width: 120px;
  height: auto;
  object-fit: contain;
  filter: brightness(0) invert(1); /* White logo on dark sidebar */
  display: block;
  margin: 0 auto;
}
</style>
