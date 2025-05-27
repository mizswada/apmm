<template>
    <div class="p-6 bg-white rounded-lg shadow">
        <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-semibold">Tetapan Peranan</h1>
            <rs-button @click="showAddRoleModal = true">
                <Icon name="ic:baseline-plus" class="mr-2" />
                Tambah Peranan
            </rs-button>
        </div>

        <!-- Role Table -->
        <rs-table
            :data="roles"
            :field="['name', 'description', 'createdAt', 'status', 'tindakan']"
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
            <template v-slot:name="data">
                {{ data.value.name }}
            </template>
            <template v-slot:description="data">
                {{ data.value.description }}
            </template>
            <template v-slot:createdAt="data">
                {{ formatDate(data.value.createdAt) }}
            </template>
            <template v-slot:status="data">
                <rs-badge
                    :variant="data.value.status === 'Active' ? 'success' : 'warning'"
                >
                    {{ data.value.status }}
                </rs-badge>
            </template>
            <template v-slot:tindakan="data">
                <div class="flex gap-2 ">
                    
                    <button @click="editRole(data.value)" >
                        <Icon class="text-primary" name="material-symbols:edit"></Icon>
                    </button>
                    <!-- <button @click="deleteRole(data.value.id)" class="text-blue-600 hover:text-blue-800">
                        <Icon class="text-danger" name="material-symbols-light:delete-outline-rounded"></Icon>
                    </button> -->
                </div>
            </template>
        </rs-table>

        <!-- Add Role Modal -->
        <rs-modal v-model="showAddRoleModal" title="Tambah Peranan Baharu" size="md">
            <div class="p-4">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Nama Peranan</label>
                        <FormKit
                            v-model="newRole.name"
                            type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Masukkan nama peranan"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Keterangan</label>
                        <FormKit
                            v-model="newRole.description"
                            type="textarea"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Masukkan keterangan peranan"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Status</label>
                        <FormKit
                            v-model="newRole.status"
                            type="select"
                            :options="[
                                { label: 'Active', value: 'Active' },
                                { label: 'Inactive', value: 'Inactive' }
                            ]"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <button
                        @click="showAddRoleModal = false"
                        class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                        Batal
                    </button>
                    <button
                        @click="addNewRole"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Tambah
                    </button>
                </div>
            </template>
        </rs-modal>

        <!-- Edit Role Modal -->
        <rs-modal v-model="showEditRoleModal" title="Edit Peranan" size="md">
            <div class="p-4">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Nama Peranan</label>
                        <FormKit
                            v-model="editingRole.name"
                            type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Masukkan nama peranan"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Keterangan</label>
                        <FormKit
                            v-model="editingRole.description"
                            type="textarea"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Masukkan keterangan peranan"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Status</label>
                        <FormKit
                            v-model="editingRole.status"
                            type="select"
                            :options="[
                                { label: 'Active', value: 'Active' },
                                { label: 'Inactive', value: 'Inactive' }
                            ]"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </div>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <button
                        @click="showEditRoleModal = false"
                        class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                        Batal
                    </button>
                    <button
                        @click="updateRole"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Simpan
                    </button>
                </div>
            </template>
        </rs-modal>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Refs for modals
const showAddRoleModal = ref(false)
const showEditRoleModal = ref(false)

// Sample data for roles (replace with actual API calls)
const roles = ref([
    {
        id: 1,
        name: 'Admin',
        description: 'Full system access with all privileges',
        createdAt: '2024-03-20',
        status: 'Active',
        tindakan: null // This field is needed for the table but will be rendered through slot
    },
    {
        id: 2,
        name: 'Manager',
        description: 'Access to manage resources and view reports',
        createdAt: '2024-03-20',
        status: 'Active',
        tindakan: null
    },
    {
        id: 3,
        name: 'User',
        description: 'Basic access to view and interact with the system',
        createdAt: '2024-03-20',
        status: 'Active',
        tindakan: null
    }
])

// New role template
const newRole = ref({
    name: '',
    description: '',
    status: 'Active'
})

// Editing role template
const editingRole = ref({
    id: null,
    name: '',
    description: '',
    status: 'Active'
})

// Format date function
const formatDate = (date) => {
    return new Date(date).toLocaleDateString('ms-MY')
}

// Add new role
const addNewRole = () => {
    // Add validation here
    if (!newRole.value.name || !newRole.value.description) {
        alert('Please fill in all required fields')
        return
    }

    // Add API call here
    const role = {
        id: roles.value.length + 1,
        ...newRole.value,
        createdAt: new Date().toISOString().split('T')[0],
        tindakan: null
    }
    roles.value.push(role)

    // Reset form and close modal
    newRole.value = {
        name: '',
        description: '',
        status: 'Active'
    }
    showAddRoleModal.value = false
}

// Edit role
const editRole = (role) => {
    editingRole.value = { ...role }
    showEditRoleModal.value = true
}

// Update role
const updateRole = () => {
    // Add validation here
    if (!editingRole.value.name || !editingRole.value.description) {
        alert('Please fill in all required fields')
        return
    }

    // Add API call here
    const index = roles.value.findIndex(r => r.id === editingRole.value.id)
    if (index !== -1) {
        roles.value[index] = { ...editingRole.value, tindakan: null }
    }

    // Reset form and close modal
    editingRole.value = {
        id: null,
        name: '',
        description: '',
        status: 'Active'
    }
    showEditRoleModal.value = false
}

// Delete role
const deleteRole = (id) => {
    if (confirm('Are you sure you want to delete this role?')) {
        // Add API call here
        roles.value = roles.value.filter(role => role.id !== id)
    }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>