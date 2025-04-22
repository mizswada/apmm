<template>
  <div class="p-6">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Edit Ship Registration</h1>
      <p class="text-gray-600">Update maritime asset information</p>
    </div>

    <!-- Edit Ship Form -->
    <div class="bg-white rounded-lg shadow p-6">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Basic Information Section -->
        <div class="border-b pb-6">
          <h2 class="text-lg font-semibold mb-4">Basic Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Ship Name -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ship Name</label>
              <input
                type="text"
                v-model="form.shipName"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter ship name"
                required
              />
            </div>

            <!-- IMO Number -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">IMO Number</label>
              <input
                type="text"
                v-model="form.imoNumber"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter IMO number"
                required
              />
            </div>

            <!-- Call Sign -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Call Sign</label>
              <input
                type="text"
                v-model="form.callSign"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter call sign"
                required
              />
            </div>

            <!-- MMSI Number -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">MMSI Number</label>
              <input
                type="text"
                v-model="form.mmsiNumber"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter MMSI number"
                required
              />
            </div>
          </div>
        </div>

        <!-- Technical Specifications Section -->
        <div class="border-b pb-6">
          <h2 class="text-lg font-semibold mb-4">Technical Specifications</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Ship Type -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Ship Type</label>
              <select
                v-model="form.shipType"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select ship type</option>
                <option value="container">Container</option>
                <option value="bulk">Bulk Carrier</option>
                <option value="tanker">Tanker</option>
                <option value="general">General Cargo</option>
                <option value="passenger">Passenger</option>
                <option value="fishing">Fishing Vessel</option>
                <option value="offshore">Offshore Support</option>
              </select>
            </div>

            <!-- Gross Tonnage -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Gross Tonnage</label>
              <input
                type="number"
                v-model="form.grossTonnage"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter gross tonnage"
                required
              />
            </div>

            <!-- Length Overall -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Length Overall (m)</label>
              <input
                type="number"
                v-model="form.lengthOverall"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter length overall"
                required
              />
            </div>

            <!-- Breadth -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Breadth (m)</label>
              <input
                type="number"
                v-model="form.breadth"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter breadth"
                required
              />
            </div>

            <!-- Draft -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Draft (m)</label>
              <input
                type="number"
                v-model="form.draft"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter draft"
                required
              />
            </div>

            <!-- Year Built -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Year Built</label>
              <input
                type="number"
                v-model="form.yearBuilt"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter year built"
                required
              />
            </div>
          </div>
        </div>

        <!-- Registration Details Section -->
        <div class="border-b pb-6">
          <h2 class="text-lg font-semibold mb-4">Registration Details</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Flag State -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Flag State</label>
              <input
                type="text"
                v-model="form.flagState"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter flag state"
                required
              />
            </div>

            <!-- Port of Registry -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Port of Registry</label>
              <input
                type="text"
                v-model="form.portOfRegistry"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter port of registry"
                required
              />
            </div>

            <!-- Classification Society -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Classification Society</label>
              <select
                v-model="form.classificationSociety"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select classification society</option>
                <option value="abs">ABS</option>
                <option value="dnv">DNV</option>
                <option value="lr">Lloyd's Register</option>
                <option value="bureau-veritas">Bureau Veritas</option>
                <option value="class-nk">Class NK</option>
                <option value="other">Other</option>
              </select>
            </div>

            <!-- Status -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                v-model="form.status"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Select status</option>
                <option value="active">Active</option>
                <option value="maintenance">Maintenance</option>
                <option value="inactive">Inactive</option>
                <option value="laid-up">Laid Up</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Additional Information</h2>
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
              <textarea
                v-model="form.remarks"
                class="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                rows="4"
                placeholder="Enter any additional remarks"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Form Actions -->
        <div class="flex justify-end gap-4">
          <button
            type="button"
            @click="$router.push('/kapal')"
            class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Update Ship
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Edit Kapal",
  // middleware: ["auth"], // This is for Login Auth for page
  // requiresAuth: true,  // This is use for Login Auth for page
});

import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const form = ref({
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
    // TODO: Replace with your actual API endpoint
    const response = await fetch(`/api/ships/${route.params.id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch ship data')
    }
    const data = await response.json()
    form.value = data
  } catch (error) {
    console.error('Error fetching ship data:', error)
    alert('Failed to load ship data. Please try again.')
  }
})

const handleSubmit = async () => {
  try {
    // TODO: Replace with your actual API endpoint
    const response = await fetch(`/api/ships/${route.params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })

    if (!response.ok) {
      throw new Error('Failed to update ship')
    }

    // Show success message
    alert('Ship updated successfully!')
    
    // Redirect to the ship list page
    router.push('/kapal')
  } catch (error) {
    console.error('Error updating ship:', error)
    alert('Failed to update ship. Please try again.')
  }
}
</script>

<style lang="scss" scoped>
// Add any custom styles here
</style> 