import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCrmStore = defineStore('crm', () => {
  // Simple in-memory DB of customers for now
  const customers = ref([
    {
      nic: '123456789V',
      name: 'Sqn Ldr A.B. Perera',
      profession: 'Air Force Officer',
      address: 'SLAF Base, Katunayake',
      telephone: '0112345678',
      mobile: '0771234567',
      email: 'perera@slaf.lk',
      bookings: [
        {
          date: '2025-05-15',
          event: "Daughter's Wedding",
          venue: 'Main Hall',
          pax: 250,
        },
        {
          date: '2023-11-20',
          event: 'Get-together',
          venue: 'Outdoor',
          pax: 50,
        },
      ],
    },
    {
      nic: '200012345678',
      name: 'Mr. Nimal Siripala',
      profession: 'Business Owner',
      address: 'No 15, Galle Road, Colombo 03',
      telephone: '0115551234',
      mobile: '0714445555',
      email: 'nimal.s@example.com',
      bookings: [
        {
          date: '2024-02-10',
          event: 'Corporate Dinner',
          venue: 'VVIP Lounge',
          pax: 30,
        },
      ],
    },
  ])

  const getCustomerByNIC = (nicSearch) => {
    if (!nicSearch) return null
    return customers.value.find((c) => c.nic.toLowerCase() === nicSearch.toLowerCase()) || null
  }

  const saveOrUpdateCustomer = (customerData, bookingInfo) => {
    if (!customerData.nic) return // Need an NIC/ID to track

    const existingIndex = customers.value.findIndex(
      (c) => c.nic.toLowerCase() === customerData.nic.toLowerCase(),
    )

    const compactBooking = {
      date: bookingInfo.date,
      event: bookingInfo.eventType || bookingInfo.package,
      venue: bookingInfo.venue,
      pax: bookingInfo.guests || 0,
    }

    if (existingIndex !== -1) {
      // Update existing customer info (they might have a new phone or address)
      customers.value[existingIndex] = {
        ...customers.value[existingIndex],
        name: customerData.clientName || customers.value[existingIndex].name,
        profession: customerData.profession || customers.value[existingIndex].profession,
        address: customerData.address || customers.value[existingIndex].address,
        telephone: customerData.telephone || customers.value[existingIndex].telephone,
        mobile: customerData.mobile || customers.value[existingIndex].mobile,
        email: customerData.email || customers.value[existingIndex].email,
      }
      // Add the new booking
      if (bookingInfo) {
        customers.value[existingIndex].bookings.push(compactBooking)
      }
    } else {
      // Create new customer
      customers.value.push({
        nic: customerData.nic,
        name: customerData.clientName,
        profession: customerData.profession,
        address: customerData.address,
        telephone: customerData.telephone,
        mobile: customerData.mobile,
        email: customerData.email,
        bookings: bookingInfo ? [compactBooking] : [],
      })
    }
  }

  return { customers, getCustomerByNIC, saveOrUpdateCustomer }
})
