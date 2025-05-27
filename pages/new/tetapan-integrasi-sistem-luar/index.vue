<template>
    <div class="space-y-6">
        <!-- Database Configuration Section -->
        <rs-card>
            <template #header>
                <h1 class="text-xl font-semibold">Konfigurasi dan Status Integrasi Sistem Luar</h1>
            </template>
            
            <div class="overflow-x-auto">
                <RsTable
                    :columns="columns"
                    :data="databases"
                    :options="{
                    variant: 'default',
                    striped: true,
                    borderless: true,
                    hover: true
                }"
                :options-advanced="{
                    sortable: true,
                    responsive: true,
                    filterable: true
                }"
                advanced
                >
                    <template v-slot:name="item">
                        {{ item.text }}
                    </template>
                    <template v-slot:scheme="item">
                        {{ item.text }}
                    </template>
                    <template v-slot:domain="item">
                        {{ item.text }}
                    </template>
                    <template v-slot:username="item">
                        {{ item.text }}
                    </template>
                    <template v-slot:status="item">
                        {{ item.text }}
                    </template>
                    <template v-slot:lastUpdate="item">
                        {{ item.text }}
                    </template>
                    <template v-slot:actions="item">
                        <div class="flex gap-2">
                            <button @click="openEditModal(item.value)">
                                <Icon class="text-primary" name="material-symbols:edit"></Icon>
                            </button>
                        </div>
                    </template>
                </RsTable>
            </div>
        </rs-card>

        <!-- SMTP Response Log Section -->
        <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-lg font-semibold mb-6">Log Respons</h2>
            
            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <!-- IP Address -->
                    <FormKit
                        type="text"
                        name="ipAddress"
                        label="Alamat IP"
                        placeholder="0.0.0.0/0"
                        v-model="logFilter.ipAddress"
                    />
                    <!-- User Filter -->
                    <FormKit
                        type="select"
                        name="user"
                        label="Pengguna"
                        :options="[{ label: 'All', value: 'all' }]"
                        placeholder="All"
                        v-model="logFilter.user"
                    />
                    <!-- Start Date -->
                    <FormKit
                        type="date"
                        name="startDate"
                        label="Tarikh Mula"
                        v-model="logFilter.startDate"
                    />
                    <!-- End Date -->
                    <FormKit
                        type="date"
                        name="endDate"
                        label="Tarikh Tamat"
                        v-model="logFilter.endDate"
                    />
                </div>

                <div class="flex justify-end">
                    <FormKit
                        type="button"
                        @click="filterLogs"
                        input-class="!bg-primary"
                    >
                        Tapis
                    </FormKit>
                </div>
                            
            </div>

            <!-- Log Table -->
            <div class="mt-6">
                <rs-table
                    :data="logData"
                    :columns="columns_logs"
                    :options="{
                        variant: 'default',
                        striped: true,
                        borderless: true,
                        hover: true
                    }"
                    :options-advanced="{
                        sortable: true,
                        responsive: true,
                        filterable: true
                    }"
                    advanced
                >
                    <template v-slot:datetime="data">
                        {{ data.value.datetime }}
                    </template>
                    <template v-slot:username="data">
                        {{ data.value.username }}
                    </template>
                    <template v-slot:activityType="data">
                        {{ data.value.activityType }}
                    </template>
                    <template v-slot:description="data">
                        {{ data.value.description }}
                    </template>
                    <template v-slot:ipAddress="data">
                        {{ data.value.ipAddress }}
                    </template>
                    <template v-slot:status="data">
                        {{ data.value.status }}
                    </template>
                    
                    
                </rs-table>
            </div>
        </div>

        <!-- Edit Modal -->
        <rs-modal
            v-model="showEditModal"
            title="Konfigurasi Integrasi MCGMDA"
            size="lg"
            @close="closeEditModal"
        >
            <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                    <!-- Scheme -->
                    <div class="form-group">
                        <label class="form-label">Scheme</label>
                        <FormKit type="text" v-model="editForm.scheme" class="form-control" placeholder="https" />
                    </div>
                    <!-- Domain -->
                    <div class="form-group">
                        <label class="form-label">Domain</label>
                        <FormKit type="text" v-model="editForm.domain" class="form-control" placeholder="uat.eip.greenfinder.asia" />
                    </div>
                </div>

                <div class="grid grid-cols-3 gap-4">
                    <!-- Username -->
                    <div class="form-group">
                        <label class="form-label">Username</label>
                        <FormKit type="text" v-model="editForm.username" class="form-control" placeholder="cgiis_user" />
                    </div>
                    <!-- Password -->
                    <div class="form-group">
                        <label class="form-label">Katalaluan</label>
                        <FormKit type="password" v-model="editForm.password" class="form-control" placeholder="CGiis202204$" />
                    </div>
                    <!-- Tenant Name -->
                    <div class="form-group">
                        <label class="form-label">Nama Tenant</label>
                        <FormKit type="text" v-model="editForm.tenantName" class="form-control" placeholder="admin" />
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="flex justify-between">
                    <RsButton variant="secondary" @click="closeEditModal">Set Semula</RsButton>
                    <RsButton variant="primary" @click="saveEdit">Simpan</RsButton>
                </div>
            </template>
        </rs-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const columns = [
    { key: 'name', label: 'Nama Sistem', sortable: true },
    { key: 'scheme', label: 'Scheme', sortable: true },
    { key: 'domain', label: 'Domain', sortable: true },
    { key: 'username', label: 'Username', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'lastUpdate', label: 'Tarikh Kemaskini', sortable: true },
    { key: 'actions', label: 'Tindakan' }
]

const databases = ref([
    {
        name: 'MCGMDA',
        scheme: 'https',
        domain: 'uat.eip.greenfinder.asia',
        username: 'cgiis_user',
        status: 'Active',
        lastUpdate: '20/3/2024, 2:51:54 PM',
        tenantName: 'admin',
        actions: ''
    },
    {
        name: 'ePerolehan',
        scheme: 'https',
        domain: 'api.eperolehan.gov.my',
        username: 'apmm_user',
        status: 'Active',
        lastUpdate: '19/3/2024, 6:14:19 PM',
        tenantName: 'apmm',
        actions: ''
    },
    {
        name: 'MyGDX',
        scheme: 'https',
        domain: 'api.data.gov.my',
        username: 'gdx_apmm',
        status: 'Inactive',
        lastUpdate: '18/3/2024, 6:26:30 PM',
        tenantName: 'apmm_prod',
        actions: ''
    },
    {
        name: 'ePBT',
        scheme: 'https',
        domain: 'api.epbt.gov.my',
        username: 'epbt_user',
        status: 'Active',
        lastUpdate: '17/3/2024, 6:24:26 PM',
        tenantName: 'apmm_dev',
        actions: ''
    },
    {
        name: 'MyIdentity',
        scheme: 'https',
        domain: 'api.myidentity.gov.my',
        username: 'myid_apmm',
        status: 'Active',
        lastUpdate: '16/3/2024, 5:30:57 PM',
        tenantName: 'apmm_uat',
        actions: ''
    }
])

const filters = ref({
    ip: '0.0.0.0/0',
    user: '',
    startDate: '',
    endDate: ''
})

const showEditModal = ref(false)
const editForm = ref({
    scheme: 'https',
    domain: '',
    username: '',
    password: '',
    tenantName: ''
})

const openEditModal = (item) => {
    editForm.value = { ...item }
    showEditModal.value = true
}

const closeEditModal = () => {
    showEditModal.value = false
    editForm.value = {
        scheme: 'https',
        domain: '',
        username: '',
        password: '',
        tenantName: ''
    }
}

const saveEdit = () => {
    // Here you would typically make an API call to save the changes
    const index = databases.value.findIndex(db => db.name === editForm.value.name)
    if (index !== -1) {
        databases.value[index] = {
            ...databases.value[index],
            ...editForm.value,
            lastUpdate: new Date().toLocaleString()
        }
    }
    closeEditModal()
}

const resetFilters = () => {
    filters.value = {
        ip: '0.0.0.0/0',
        user: '',
        startDate: '',
        endDate: ''
    }
}

const applyFilters = () => {
    // Implement filter logic here
    console.log('Applying filters:', filters.value)
}

// Log Filtering
const logFilter = ref({
  ipAddress: '',
  user: 'all',
  startDate: '',
  endDate: ''
})

const filterLogs = () => {
    // Implement filter logic here
    console.log('Applying filters:', logFilter.value)
}

const columns_logs = [
  {
    title: 'Tarikh dan Masa',
    key: 'datetime',
    sortable: true
  },
  {
    title: 'Nama Pengguna',
    key: 'username',
    sortable: true
  },
  {
    title: 'Jenis Aktiviti',
    key: 'activityType',
    sortable: true
  },
  {
    title: 'Penerangan',
    key: 'description'
  },
  {
    title: 'Alamat IP',
    key: 'ipAddress'
  },
  {
    title: 'Status',
    key: 'status',
    customRender: (text) => {
      const statusClasses = {
        Success: 'bg-green-100 text-green-800',
        Error: 'bg-red-100 text-red-800',
        Pending: 'bg-yellow-100 text-yellow-800'
      }
      return {
        children: text,
        props: {
          className: `px-2 py-1 rounded-full text-xs font-medium ${statusClasses[text]}`
        }
      }
    }
  }
]

// Sample Data
const logData = ref([
  {
    datetime: '2024-03-20 09:15:23',
    username: 'cgiis_user',
    activityType: 'Integrasi MCGMDA',
    description: 'Berjaya menghantar data ke MCGMDA - ID Transaksi: TRX123456',
    ipAddress: '10.1.69.87',
    status: 'Success'
  },
  {
    datetime: '2024-03-20 09:30:45',
    username: 'apmm_user',
    activityType: 'Integrasi ePerolehan',
    description: 'Ralat penghantaran data - Timeout connection to ePerolehan',
    ipAddress: '10.1.69.90',
    status: 'Error'
  },
  {
    datetime: '2024-03-20 10:00:12',
    username: 'gdx_apmm',
    activityType: 'Kemaskini Konfigurasi MyGDX',
    description: 'Kemaskini endpoint MyGDX dari /v1/api ke /v2/api',
    ipAddress: '10.1.69.92',
    status: 'Success'
  },
  {
    datetime: '2024-03-20 10:15:30',
    username: 'epbt_user',
    activityType: 'Integrasi ePBT',
    description: 'Menunggu pengesahan data dari ePBT - Ref: PBT789012',
    ipAddress: '10.1.69.95',
    status: 'Pending'
  },
  {
    datetime: '2024-03-20 10:45:18',
    username: 'myid_apmm',
    activityType: 'Integrasi MyIdentity',
    description: 'Berjaya mendapatkan data pengenalan - ID: 840915115447',
    ipAddress: '10.1.69.98',
    status: 'Success'
  },
  {
    datetime: '2024-03-20 11:00:33',
    username: 'cgiis_user',
    activityType: 'Kemaskini Token MCGMDA',
    description: 'Pembaharuan token akses MCGMDA berjaya',
    ipAddress: '10.1.69.87',
    status: 'Success'
  },
  {
    datetime: '2024-03-20 11:15:42',
    username: 'apmm_user',
    activityType: 'Integrasi ePerolehan',
    description: 'Ralat pengesahan - Token tidak sah untuk ePerolehan',
    ipAddress: '10.1.69.90',
    status: 'Error'
  },
  {
    datetime: '2024-03-20 11:30:55',
    username: 'gdx_apmm',
    activityType: 'Ujian Integrasi MyGDX',
    description: 'Ujian sambungan MyGDX berjaya - Latency: 230ms',
    ipAddress: '10.1.69.92',
    status: 'Success'
  },
  {
    datetime: '2024-03-20 11:45:22',
    username: 'epbt_user',
    activityType: 'Integrasi ePBT',
    description: 'Berjaya menghantar laporan bulanan ke ePBT',
    ipAddress: '10.1.69.95',
    status: 'Success'
  },
  {
    datetime: '2024-03-20 12:00:15',
    username: 'myid_apmm',
    activityType: 'Pengesahan MyIdentity',
    description: 'Pengesahan status pengenalan berjaya - Batch: B2024031',
    ipAddress: '10.1.69.98',
    status: 'Success'
  }
])
</script>

<style lang="scss" scoped>
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 1.5rem;
}


</style>