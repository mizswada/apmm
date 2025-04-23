<template>
  <div class="p-6">
    <!-- Page Header -->
    <div class="mb-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">Edit Ship Information</h1>
          <p class="text-gray-600">Update basic information about the ship</p>
        </div>
        <button
          @click="$router.push(`/kapal/${ship.id}`)"
          class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2"
        >
          <Icon name="material-symbols:arrow-back" />
          Back to Details
        </button>
      </div>
    </div>
    <!-- Edit Form -->
    <div class="bg-white rounded-lg shadow p-6">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Basic Information Section -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Basic Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ship Name</label>
              <input
                v-model="ship.shipName"
                type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">IMO Number</label>
              <input
                v-model="ship.imoNumber"
                type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Call Sign</label>
              <input
                v-model="ship.callSign"
                type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">MMSI Number</label>
              <input
                v-model="ship.mmsiNumber"
                type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <!-- Technical Specifications Section -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Technical Specifications</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ship Type</label>
              <select
                v-model="ship.shipType"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Container">Container</option>
                <option value="Bulk Carrier">Bulk Carrier</option>
                <option value="Tanker">Tanker</option>
                <option value="General Cargo">General Cargo</option>
                <option value="Passenger">Passenger</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Gross Tonnage</label>
              <input
                v-model="ship.grossTonnage"
                type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Length Overall (m)</label>
              <input
                v-model="ship.lengthOverall"
                type="number"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Breadth (m)</label>
              <input
                v-model="ship.breadth"
                type="number"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Draft (m)</label>
              <input
                v-model="ship.draft"
                type="number"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Year Built</label>
              <input
                v-model="ship.yearBuilt"
                type="number"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
        </div>

        <!-- Registration Details Section -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Registration Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Flag State</label>
              <input
                v-model="ship.flagState"
                type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Port of Registry</label>
              <input
                v-model="ship.portOfRegistry"
                type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Classification Society</label>
              <input
                v-model="ship.classificationSociety"
                type="text"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                v-model="ship.status"
                class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="active">Active</option>
                <option value="maintenance">Maintenance</option>
                <option value="inactive">Inactive</option>
                <option value="laid-up">Laid-up</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Additional Information Section -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Additional Information</h2>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
            <textarea
              v-model="ship.remarks"
              rows="3"
              class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end gap-4">
          <button
            type="button"
            @click="$router.push(`/kapal/${ship.id}`)"
            class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Edit Ship Information",
  // middleware: ["auth"], // This is for Login Auth for page
  // requiresAuth: true,  // This is use for Login Auth for page
});

import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

alert(1);
// Initialize ship data with empty values
const ship = ref({
  id: route.params.id,
  // Basic Information
  shipName: '',
  imoNumber: '',
  callSign: '',
  mmsiNumber: '',
  
  // Technical Specifications
  shipType: '',
  grossTonnage: '',
  lengthOverall: '',
  breadth: '',
  draft: '',
  yearBuilt: '',
  
  // Registration Details
  flagState: '',
  portOfRegistry: '',
  classificationSociety: '',
  status: '',
  
  // Additional Information
  remarks: ''
})

// Fetch ship data when component mounts
onMounted(async () => {
  try {
    const response = await fetch(`/api/ships/${route.params.id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch ship data')
    }
    const data = await response.json()
    ship.value = data
  } catch (error) {
    console.error('Error fetching ship data:', error)
    alert('Failed to load ship data. Please try again.')
  }
})

const handleSubmit = async () => {
  try {
    const response = await fetch(`/api/ships/${route.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ship.value)
    })

    if (!response.ok) {
      throw new Error('Failed to update ship')
    }

    // Show success message
    alert('Ship updated successfully!')
    
    // Redirect to the ship details page
    router.push(`/kapal/${route.params.id}`)
  } catch (error) {
    console.error('Error updating ship:', error)
    alert('Failed to update ship. Please try again.')
  }
}
</script>

<style lang="scss" scoped>
// Add any custom styles here
</style> 