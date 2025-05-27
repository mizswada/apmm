<template>
    <div>
        <h1 class="text-2xl font-bold mb-6">Tetapan Pengguna</h1>
        
        <div class="bg-white rounded-lg shadow p-6">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold">Senarai Pengguna</h2>
                <rs-button variant="primary" @click="openAddModal">
                    <Icon name="ic:baseline-plus" class="mr-2" />
                    Tambah Pengguna
                </rs-button>
            </div>

            <rs-table
                :data="users"
                :field="['id', 'name', 'email', 'role', 'status', 'actions']"
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
                <template v-slot:status="{ text }">
                    <rs-badge
                        :variant="text === 'Active' ? 'success' : 'danger'"
                    >
                        {{ text }}
                    </rs-badge>
                </template>
                <template v-slot:actions="{ value }">
                    <div class="flex gap-2">
                        <button  size="sm" @click="openEditModal(value)">
                            <Icon name="ic:baseline-edit" />
                        </button>
                        <button size="sm" @click="confirmDelete(value)">
                            <Icon name="ic:baseline-delete" />
                        </button>
                    </div>
                </template>
            </rs-table>
        </div>

        <!-- Add/Edit User Modal -->
        <rs-modal v-model="isModalOpen" size="lg">
            <template #header>
                <h3 class="text-lg font-semibold">
                    {{ isEditing ? 'Edit Pengguna' : 'Tambah Pengguna' }}
                </h3>
            </template>
            <template #body>
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium mb-1">Nama</label>
                        <FormKit
                            type="text"
                            v-model="formData.name"
                            placeholder="Masukkan nama pengguna"
                            validation="required"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Email</label>
                        <FormKit
                            type="email"
                            v-model="formData.email"
                            placeholder="Masukkan email pengguna"
                            validation="required|email"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Role</label>
                        <FormKit
                            type="select"
                            v-model="formData.role"
                            :options="roles"
                            placeholder="Pilih role pengguna"
                            validation="required"
                        />
                    </div>
                    <div>
                        <label class="block text-sm font-medium mb-1">Status</label>
                        <FormKit
                            type="select"
                            v-model="formData.status"
                            :options="['Active', 'Inactive']"
                            placeholder="Pilih status pengguna"
                            validation="required"
                        />
                    </div>
                    <div v-if="!isEditing">
                        <label class="block text-sm font-medium mb-1">Password</label>
                        <FormKit
                            type="password"
                            v-model="formData.password"
                            placeholder="Masukkan password"
                            validation="required|length:8"
                        />
                    </div>
                </form>
            </template>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <rs-button variant="secondary" @click="isModalOpen = false">
                        Batal
                    </rs-button>
                    <rs-button variant="primary" @click="handleSubmit">
                        {{ isEditing ? 'Simpan' : 'Tambah' }}
                    </rs-button>
                </div>
            </template>
        </rs-modal>

        <!-- Delete Confirmation Modal -->
        <rs-modal v-model="isDeleteModalOpen" size="lg">
            <template #header>
                <h3 class="text-lg font-semibold">Padam Pengguna</h3>
            </template>
            <template #body>
                <p>Adakah anda pasti untuk memadam pengguna ini?</p>
            </template>
            <template #footer>
                <div class="flex justify-end gap-2">
                    <rs-button variant="secondary" @click="isDeleteModalOpen = false">
                        Batal
                    </rs-button>
                    <rs-button variant="danger" @click="handleDelete">
                        Padam
                    </rs-button>
                </div>
            </template>
        </rs-modal>
    </div>
</template>

<script setup>
const users = ref([
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Admin',
        status: 'Active'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'User',
        status: 'Active'
    }
]);

const roles = ['Admin', 'User', 'Manager'];

const isModalOpen = ref(false);
const isDeleteModalOpen = ref(false);
const isEditing = ref(false);
const selectedUser = ref(null);

const formData = ref({
    name: '',
    email: '',
    role: '',
    status: 'Active',
    password: ''
});

const openAddModal = () => {
    isEditing.value = false;
    formData.value = {
        name: '',
        email: '',
        role: '',
        status: 'Active',
        password: ''
    };
    isModalOpen.value = true;
};

const openEditModal = (user) => {
    isEditing.value = true;
    selectedUser.value = user;
    formData.value = {
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status
    };
    isModalOpen.value = true;
};

const confirmDelete = (user) => {
    selectedUser.value = user;
    isDeleteModalOpen.value = true;
};

const handleSubmit = () => {
    if (isEditing.value) {
        // Update existing user
        const index = users.value.findIndex(u => u.id === selectedUser.value.id);
        if (index !== -1) {
            users.value[index] = {
                ...users.value[index],
                ...formData.value
            };
        }
    } else {
        // Add new user
        users.value.push({
            id: users.value.length + 1,
            ...formData.value
        });
    }
    isModalOpen.value = false;
};

const handleDelete = () => {
    users.value = users.value.filter(u => u.id !== selectedUser.value.id);
    isDeleteModalOpen.value = false;
};
</script>

<style lang="scss" scoped>
.rs-button {
    @apply flex items-center;
}
</style>