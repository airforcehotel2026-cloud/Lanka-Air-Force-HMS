<template>
  <q-layout view="lHh Lpr lFf" class="bg-slaf-primary slaf-login-bg">
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="login-card shadow-10 rounded-borders overflow-hidden">
          <div class="row">
            <!-- Left Side Branding (Hidden on small screens) -->
            <div
              class="col-12 col-md-5 bg-slaf-dark text-white flex flex-center q-pa-xl text-center login-brand-panel gt-sm"
            >
              <div>
                <img :src="logoUrl" alt="SLAF Logo" class="login-logo q-mb-lg" />
                <div class="text-h5 text-weight-bold text-slaf-accent q-mb-sm">
                  Eagles' Lagoon View
                </div>
                <div class="text-subtitle1">Hotel & Banquet Management System</div>
                <div class="q-mt-xl text-caption text-grey-4 opacity-70">
                  Sri Lanka Air Force <br />
                  Logistics & Management System
                </div>
              </div>
            </div>

            <!-- Right Side Login Form -->
            <div class="col-12 col-md-7 bg-white q-pa-xl column justify-center">
              <div class="text-left q-mb-lg lt-md text-center">
                <img
                  :src="logoUrl"
                  alt="SLAF Logo"
                  style="height: 60px; mix-blend-mode: multiply"
                  class="q-mb-md"
                />
                <div class="text-h6 text-slaf-primary text-weight-bold">Eagles' Lagoon View</div>
              </div>

              <div class="text-h5 text-weight-bold text-slaf-primary q-mb-sm">Secure Login</div>
              <p class="text-grey-6 q-mb-lg">
                Enter your service credentials to access the system.
              </p>

              <q-form @submit="onSubmit" class="q-gutter-md">
                <q-input
                  v-model="username"
                  outlined
                  label="Service No / Username"
                  color="slaf-primary"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Please enter your username']"
                >
                  <template v-slot:prepend>
                    <q-icon name="person" color="slaf-primary" />
                  </template>
                </q-input>

                <q-input
                  v-model="password"
                  outlined
                  type="password"
                  label="Password"
                  color="slaf-primary"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || 'Please enter your password']"
                >
                  <template v-slot:prepend>
                    <q-icon name="lock" color="slaf-primary" />
                  </template>
                </q-input>

                <div class="row justify-between items-center q-mt-sm">
                  <q-checkbox v-model="rememberMe" label="Remember Me" color="slaf-primary" />
                  <a
                    href="#"
                    class="text-slaf-primary text-weight-medium"
                    style="text-decoration: none"
                    >Forgot Password?</a
                  >
                </div>

                <q-btn
                  unelevated
                  color="slaf-primary"
                  size="lg"
                  class="full-width q-mt-lg text-weight-bold btn-hover"
                  type="submit"
                  :loading="loading"
                >
                  <span class="text-slaf-accent q-px-sm">LOG IN</span>
                  <q-icon name="login" class="text-slaf-accent" />
                </q-btn>
              </q-form>

              <div class="text-center q-mt-xl text-caption text-grey-5">
                <q-icon name="security" /> Access is restricted to authorized personnel only.
              </div>
            </div>
          </div>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from 'src/stores/authStore'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const router = useRouter()
const authStore = useAuthStore()

const logoUrl = computed(() => import.meta.env.BASE_URL + 'images/logo.png')

const username = ref('')
const password = ref('')
const rememberMe = ref(false)
const loading = ref(false)

const onSubmit = async () => {
  loading.value = true
  try {
    await authStore.login(username.value, password.value)
    $q.notify({
      color: 'positive',
      position: 'top',
      message: `Welcome back, ${authStore.user.name}`,
      icon: 'check_circle',
    })
    router.push('/')
  } catch {
    $q.notify({
      color: 'negative',
      position: 'top',
      message: 'Authentication failed. Please check credentials.',
      icon: 'error',
    })
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.slaf-login-bg {
  background: linear-gradient(135deg, #001f6b 0%, #00308f 100%);
  position: relative;
}

/* Optional faint pattern overlay */
.slaf-login-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
}

.login-card {
  width: 900px;
  max-width: 95vw;
  min-height: 550px;
  border-radius: 16px;
  background-color: white;
}

.login-brand-panel {
  background: linear-gradient(180deg, rgba(0, 31, 107, 0.9) 0%, rgba(0, 48, 143, 0.95) 100%);
  position: relative;
  overflow: hidden;
}

.login-brand-panel::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 60%);
  pointer-events: none;
}

.login-logo {
  height: 120px;
  width: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}

.btn-hover {
  transition: all 0.3s ease;
}
.btn-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 48, 143, 0.3);
}

.slaf-primary {
  color: #00308f;
}
.bg-slaf-primary {
  background-color: #00308f;
}
.bg-slaf-dark {
  background-color: #001f6b;
}
.text-slaf-accent {
  color: #ffd700;
}
</style>
