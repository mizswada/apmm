<template>
  <div class="p-6">
    <!-- Page Header -->
    <div class="mb-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">Ship Details</h1>
          <p class="text-gray-600">View detailed information about the ship</p>
        </div>
        <button
          @click="$router.push('/kapal')"
          class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 flex items-center gap-2"
        >
          <Icon name="material-symbols:arrow-back" />
          Back to List
        </button>
      </div>
    </div>

    <div class="rounded-lg shadow mt-2 mb-5">
        <rs-tab vertical>
            <rs-tab-item title="Basic Information"> 
                <div class="p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg font-semibold">Basic Information</h2>
                        <button
                            @click="$router.push(`/kapal/edit/${ship.id}`)"
                            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
                        >
                            <Icon name="material-symbols:edit-outline-sharp" />
                            Edit Basic Information
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <p class="text-sm text-gray-500">Ship Name</p>
                            <p class="font-medium">{{ ship.shipName }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">IMO Number</p>
                            <p class="font-medium">{{ ship.imoNumber }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Call Sign</p>
                            <p class="font-medium">{{ ship.callSign }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">MMSI Number</p>
                            <p class="font-medium">{{ ship.mmsiNumber }}</p>
                        </div>
                    </div>

                    <h2 class="text-lg font-semibold mb-4">Technical Specifications</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <p class="text-sm text-gray-500">Ship Type</p>
                            <p class="font-medium">{{ ship.shipType }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Gross Tonnage</p>
                            <p class="font-medium">{{ ship.grossTonnage }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Length Overall</p>
                            <p class="font-medium">{{ ship.lengthOverall }} m</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Breadth</p>
                            <p class="font-medium">{{ ship.breadth }} m</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Draft</p>
                            <p class="font-medium">{{ ship.draft }} m</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Year Built</p>
                            <p class="font-medium">{{ ship.yearBuilt }}</p>
                        </div>
                    </div>

                    <h2 class="text-lg font-semibold mb-4">Registration Details</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <p class="text-sm text-gray-500">Flag State</p>
                            <p class="font-medium">{{ ship.flagState }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Port of Registry</p>
                            <p class="font-medium">{{ ship.portOfRegistry }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Classification Society</p>
                            <p class="font-medium">{{ ship.classificationSociety }}</p>
                        </div>
                        <div>
                            <p class="text-sm text-gray-500">Status</p>
                            <p class="font-medium">
                                <span 
                                    :class="{
                                        'px-2 py-1 rounded-full text-sm': true,
                                        'bg-green-100 text-green-800': ship.status === 'active',
                                        'bg-yellow-100 text-yellow-800': ship.status === 'maintenance',
                                        'bg-red-100 text-red-800': ship.status === 'inactive',
                                        'bg-gray-100 text-gray-800': ship.status === 'laid-up'
                                    }"
                                >
                                    {{ ship.status }}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </rs-tab-item>
            <rs-tab-item title="Component Parts">
                <div class="p-6">
                    <h2 class="text-lg font-semibold mb-4">Component Parts</h2>
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr class="border-b">
                                    <th class="text-left py-3 px-4">No.</th>
                                    <th class="text-left py-3 px-4">Name of Part</th>
                                    <th class="text-left py-3 px-4">SKU Number</th>
                                    <th class="text-left py-3 px-4">Date Added</th>
                                    <th class="text-left py-3 px-4">Last Maintenance</th>
                                    <th class="text-left py-3 px-4">Maintenance Count</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="part in componentParts" :key="part.id" class="border-b hover:bg-gray-50">
                                    <td class="py-3 px-4">{{ part.id }}</td>
                                    <td class="py-3 px-4">{{ part.name }}</td>
                                    <td class="py-3 px-4">{{ part.skuNumber }}</td>
                                    <td class="py-3 px-4">{{ part.dateAdded }}</td>
                                    <td class="py-3 px-4">{{ part.lastMaintenance }}</td>
                                    <td class="py-3 px-4">{{ part.maintenanceCount }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </rs-tab-item>
            <rs-tab-item title="Crew Information"> 
                <div class="p-6">
                    <h2 class="text-lg font-semibold mb-4">Crew Information</h2>
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr class="border-b">
                                    <th class="text-left py-3 px-4">No.</th>
                                    <th class="text-left py-3 px-4">Name</th>
                                    <th class="text-left py-3 px-4">Position</th>
                                    <th class="text-left py-3 px-4">Nationality</th>
                                    <th class="text-left py-3 px-4">License Number</th>
                                    <th class="text-left py-3 px-4">Status</th>
                                    <th class="text-left py-3 px-4">Join Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="member in crew" :key="member.licenseNumber" class="border-b hover:bg-gray-50">
                                    <td class="py-3 px-4">{{ member.id }}</td>
                                    <td class="py-3 px-4">{{ member.name }}</td>
                                    <td class="py-3 px-4">{{ member.position }}</td>
                                    <td class="py-3 px-4">{{ member.nationality }}</td>
                                    <td class="py-3 px-4">{{ member.licenseNumber }}</td>
                                    <td class="py-3 px-4">
                                        <span 
                                            :class="{
                                                'px-2 py-1 rounded-full text-sm': true,
                                                'bg-green-100 text-green-800': member.status === 'On Board',
                                                'bg-yellow-100 text-yellow-800': member.status === 'On Leave',
                                                'bg-red-100 text-red-800': member.status === 'Off Duty'
                                            }"
                                        >
                                            {{ member.status }}
                                        </span>
                                    </td>
                                    <td class="py-3 px-4">{{ member.joinDate }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </rs-tab-item>
            <rs-tab-item title="Ship Maintenance">
                <div class="p-6">
                    <h2 class="text-lg font-semibold mb-4">Maintenance Schedule</h2>
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr class="border-b">
                                    <th class="text-left py-3 px-4">No.</th>
                                    <th class="text-left py-3 px-4">Maintenance Type</th>
                                    <th class="text-left py-3 px-4">Description</th>
                                    <th class="text-left py-3 px-4">Scheduled Date</th>
                                    <th class="text-left py-3 px-4">Status</th>
                                    <th class="text-left py-3 px-4">Last Performed</th>
                                    <th class="text-left py-3 px-4">Next Due</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="maintenance in maintenanceSchedule" :key="maintenance.id" class="border-b hover:bg-gray-50">
                                    <td class="py-3 px-4">{{ maintenance.id }}</td>
                                    <td class="py-3 px-4">{{ maintenance.type }}</td>
                                    <td class="py-3 px-4">{{ maintenance.description }}</td>
                                    <td class="py-3 px-4">{{ maintenance.scheduledDate }}</td>
                                    <td class="py-3 px-4">
                                        <span 
                                            :class="{
                                                'px-2 py-1 rounded-full text-sm': true,
                                                'bg-green-100 text-green-800': maintenance.status === 'Completed',
                                                'bg-yellow-100 text-yellow-800': maintenance.status === 'Scheduled',
                                                'bg-red-100 text-red-800': maintenance.status === 'Overdue',
                                                'bg-blue-100 text-blue-800': maintenance.status === 'In Progress'
                                            }"
                                        >
                                            {{ maintenance.status }}
                                        </span>
                                    </td>
                                    <td class="py-3 px-4">{{ maintenance.lastPerformed }}</td>
                                    <td class="py-3 px-4">{{ maintenance.nextDue }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </rs-tab-item>
            <rs-tab-item title="Ship Modification">
                <div class="p-6">
                    <h2 class="text-lg font-semibold mb-4">Modification History</h2>
                    <div class="overflow-x-auto">
                        <table class="min-w-full">
                            <thead>
                                <tr class="border-b">
                                    <th class="text-left py-3 px-4">No.</th>
                                    <th class="text-left py-3 px-4">Modification Type</th>
                                    <th class="text-left py-3 px-4">Description</th>
                                    <th class="text-left py-3 px-4">Date Completed</th>
                                    <th class="text-left py-3 px-4">Location</th>
                                    <th class="text-left py-3 px-4">Contractor</th>
                                    <th class="text-left py-3 px-4">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="modification in shipModifications" :key="modification.id" class="border-b hover:bg-gray-50">
                                    <td class="py-3 px-4">{{ modification.id }}</td>
                                    <td class="py-3 px-4">{{ modification.type }}</td>
                                    <td class="py-3 px-4">{{ modification.description }}</td>
                                    <td class="py-3 px-4">{{ modification.dateCompleted }}</td>
                                    <td class="py-3 px-4">{{ modification.location }}</td>
                                    <td class="py-3 px-4">{{ modification.contractor }}</td>
                                    <td class="py-3 px-4">
                                        <span 
                                            :class="{
                                                'px-2 py-1 rounded-full text-sm': true,
                                                'bg-green-100 text-green-800': modification.status === 'Completed',
                                                'bg-yellow-100 text-yellow-800': modification.status === 'In Progress',
                                                'bg-red-100 text-red-800': modification.status === 'Pending',
                                                'bg-blue-100 text-blue-800': modification.status === 'Approved'
                                            }"
                                        >
                                            {{ modification.status }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </rs-tab-item>
        </rs-tab>
    </div>

    
  </div>
</template>

<script setup>
definePageMeta({
  title: "Ship Details",
  // middleware: ["auth"], // This is for Login Auth for page
  // requiresAuth: true,  // This is use for Login Auth for page
});

import { ref } from 'vue'

const ship = ref({
  // Basic Information
  shipName: 'MV Ocean Star',
  imoNumber: 'IMO1234567',
  callSign: '9V1234',
  mmsiNumber: '123456789',
  
  // Technical Specifications
  shipType: 'Container',
  grossTonnage: '85,000',
  lengthOverall: '366',
  breadth: '48.2',
  draft: '15.5',
  yearBuilt: '2018',
  
  // Registration Details
  flagState: 'Singapore',
  portOfRegistry: 'Singapore',
  classificationSociety: 'DNV',
  status: 'active',
  
  // Additional Information
  remarks: 'Regular maintenance schedule followed. Last dry dock completed in 2022.'
})

// Crew Information
const crew = ref([
  {
    id: 1,
    name: 'John Smith',
    position: 'Captain',
    nationality: 'British',
    licenseNumber: 'CAP123456',
    status: 'On Board',
    joinDate: '2023-01-15'
  },
  {
    id: 2,
    name: 'Michael Brown',
    position: 'Chief Engineer',
    nationality: 'American',
    licenseNumber: 'ENG789012',
    status: 'On Board',
    joinDate: '2023-02-20'
  },
  {
    id: 3,
    name: 'David Wilson',
    position: 'First Officer',
    nationality: 'Australian',
    licenseNumber: 'FO345678',
    status: 'On Leave',
    joinDate: '2023-03-10'
  },
  {
    id: 4,
    name: 'Robert Chen',
    position: 'Second Engineer',
    nationality: 'Chinese',
    licenseNumber: 'ENG901234',
    status: 'On Board',
    joinDate: '2023-04-05'
  },
  {
    id: 5,
    name: 'James Lee',
    position: 'Chief Cook',
    nationality: 'Singaporean',
    licenseNumber: 'CC567890',
    status: 'On Board',
    joinDate: '2023-05-15'
  },
  {
    id: 6,
    name: 'Thomas Anderson',
    position: 'Bosun',
    nationality: 'Canadian',
    licenseNumber: 'BOS123789',
    status: 'Off Duty',
    joinDate: '2023-06-20'
  },
  {
    id: 7,
    name: 'Maria Garcia',
    position: 'Deck Officer',
    nationality: 'Spanish',
    licenseNumber: 'DO456123',
    status: 'On Board',
    joinDate: '2023-07-10'
  },
  {
    id: 8,
    name: 'Hans Müller',
    position: 'Electrician',
    nationality: 'German',
    licenseNumber: 'EL789456',
    status: 'On Board',
    joinDate: '2023-08-25'
  }
])

// Certificates
const certificates = ref([
  {
    name: 'International Safety Management (ISM) Certificate',
    issuedDate: '2023-01-15',
    expiryDate: '2025-01-15',
    status: 'Valid'
  },
  {
    name: 'International Ship Security Certificate (ISSC)',
    issuedDate: '2023-03-20',
    expiryDate: '2025-03-20',
    status: 'Valid'
  }
])

// Component Parts
const componentParts = ref([
  {
    id: 1,
    name: 'Main Engine',
    skuNumber: 'ME-001',
    dateAdded: '2018-05-15',
    lastMaintenance: '2024-01-20',
    maintenanceCount: 12
  },
  {
    id: 2,
    name: 'Auxiliary Engine',
    skuNumber: 'AE-002',
    dateAdded: '2018-05-15',
    lastMaintenance: '2024-02-15',
    maintenanceCount: 8
  },
  {
    id: 3,
    name: 'Steering Gear',
    skuNumber: 'SG-003',
    dateAdded: '2018-05-15',
    lastMaintenance: '2023-12-10',
    maintenanceCount: 6
  },
  {
    id: 4,
    name: 'Bow Thruster',
    skuNumber: 'BT-004',
    dateAdded: '2018-05-15',
    lastMaintenance: '2024-03-01',
    maintenanceCount: 4
  },
  {
    id: 5,
    name: 'Fresh Water Generator',
    skuNumber: 'FWG-005',
    dateAdded: '2018-05-15',
    lastMaintenance: '2023-11-25',
    maintenanceCount: 5
  },
  {
    id: 6,
    name: 'Air Conditioning System',
    skuNumber: 'ACS-006',
    dateAdded: '2018-05-15',
    lastMaintenance: '2024-02-28',
    maintenanceCount: 7
  }
])

// Maintenance Schedule
const maintenanceSchedule = ref([
  {
    id: 1,
    type: 'Annual Survey',
    description: 'Complete hull and machinery inspection',
    scheduledDate: '2024-06-15',
    status: 'Scheduled',
    lastPerformed: '2023-06-10',
    nextDue: '2024-06-15'
  },
  {
    id: 2,
    type: 'Dry Dock',
    description: 'Hull cleaning and painting',
    scheduledDate: '2024-09-20',
    status: 'Scheduled',
    lastPerformed: '2022-09-15',
    nextDue: '2024-09-20'
  },
  {
    id: 3,
    type: 'Engine Overhaul',
    description: 'Main engine major maintenance',
    scheduledDate: '2024-03-01',
    status: 'Completed',
    lastPerformed: '2024-03-01',
    nextDue: '2025-03-01'
  },
  {
    id: 4,
    type: 'Safety Equipment',
    description: 'Lifeboat and fire equipment inspection',
    scheduledDate: '2024-04-15',
    status: 'In Progress',
    lastPerformed: '2023-04-10',
    nextDue: '2024-04-15'
  },
  {
    id: 5,
    type: 'Navigation System',
    description: 'Radar and communication equipment check',
    scheduledDate: '2024-02-28',
    status: 'Overdue',
    lastPerformed: '2023-02-25',
    nextDue: '2024-02-28'
  },
  {
    id: 6,
    type: 'Ballast Water System',
    description: 'System inspection and maintenance',
    scheduledDate: '2024-07-10',
    status: 'Scheduled',
    lastPerformed: '2023-07-05',
    nextDue: '2024-07-10'
  },
  {
    id: 7,
    type: 'Cargo Hold',
    description: 'Structural integrity check',
    scheduledDate: '2024-05-20',
    status: 'Scheduled',
    lastPerformed: '2023-05-15',
    nextDue: '2024-05-20'
  },
  {
    id: 8,
    type: 'Propulsion System',
    description: 'Propeller and shaft inspection',
    scheduledDate: '2024-08-05',
    status: 'Scheduled',
    lastPerformed: '2023-08-01',
    nextDue: '2024-08-05'
  }
])

// Ship Modifications
const shipModifications = ref([
  {
    id: 1,
    type: 'Engine Upgrade',
    description: 'Installation of new fuel-efficient main engine',
    dateCompleted: '2023-05-15',
    location: 'Singapore Shipyard',
    contractor: 'Marine Engineering Solutions Pte Ltd',
    status: 'Completed'
  },
  {
    id: 2,
    type: 'Ballast Water Treatment System',
    description: 'Installation of IMO-compliant ballast water treatment system',
    dateCompleted: '2023-08-20',
    location: 'Busan Shipyard',
    contractor: 'OceanTech Systems',
    status: 'Completed'
  },
  {
    id: 3,
    type: 'Navigation System',
    description: 'Upgrade of radar and communication systems',
    dateCompleted: '2023-11-10',
    location: 'Hong Kong Shipyard',
    contractor: 'NavCom Technologies',
    status: 'Completed'
  },
  {
    id: 4,
    type: 'Cargo Hold Modification',
    description: 'Reinforcement of cargo hold structure for increased capacity',
    dateCompleted: '2024-01-25',
    location: 'Shanghai Shipyard',
    contractor: 'Marine Construction Co.',
    status: 'Completed'
  },
  {
    id: 5,
    type: 'Hull Coating',
    description: 'Application of new anti-fouling coating system',
    dateCompleted: '2024-02-15',
    location: 'Singapore Shipyard',
    contractor: 'Marine Coatings International',
    status: 'Completed'
  },
  {
    id: 6,
    type: 'Safety Equipment',
    description: 'Installation of new life-saving appliances',
    dateCompleted: '2024-03-01',
    location: 'Singapore Shipyard',
    contractor: 'Safety Marine Equipment',
    status: 'In Progress'
  },
  {
    id: 7,
    type: 'Crew Accommodation',
    description: 'Renovation of crew quarters and common areas',
    dateCompleted: '2024-04-10',
    location: 'Singapore Shipyard',
    contractor: 'Marine Interiors Ltd',
    status: 'Approved'
  },
  {
    id: 8,
    type: 'Propulsion System',
    description: 'Installation of new propeller system',
    dateCompleted: '2024-05-20',
    location: 'Singapore Shipyard',
    contractor: 'Propulsion Systems Inc',
    status: 'Pending'
  }
])
</script>

<style lang="scss" scoped>
// Add any custom styles here
</style> 