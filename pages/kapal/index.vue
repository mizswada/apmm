<template>
  <div class="p-6">
    <!-- Page Header -->
    <div class="mb-6">
      <h1 class="text-2xl font-bold">Ship Management Dashboard</h1>
      <p class="text-gray-600">Monitor and manage your fleet</p>
    </div>

    <!-- Analytics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Total Ships</p>
            <h3 class="text-2xl font-bold">150</h3>
          </div>
          <div class="p-3 bg-blue-100 rounded-full">
            <Icon class="text-primary" name="fluent:vehicle-ship-20-filled"></Icon>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Active Ships</p>
            <h3 class="text-2xl font-bold">120</h3>
          </div>
          <div class="p-3 bg-green-100 rounded-full">
            <Icon class="text-primary" name="fluent:vehicle-ship-20-filled"></Icon>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Maintenance</p>
            <h3 class="text-2xl font-bold">25</h3>
          </div>
          <div class="p-3 bg-yellow-100 rounded-full">
            <Icon class="text-primary" name="fluent:vehicle-ship-20-filled"></Icon>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">Inactive</p>
            <h3 class="text-2xl font-bold">5</h3>
          </div>
          <div class="p-3 bg-red-100 rounded-full">
            <Icon class="text-primary" name="fluent:vehicle-ship-20-filled"></Icon>
          </div>
        </div>
      </div>
    </div>

    <!-- Ship List Table -->
    <div class="bg-white rounded-lg shadow">
      <div class="p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-semibold">Registered Ships</h2>
          <button  @click="$router.push('/kapal/add')" class="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Icon class="text-white" name="material-symbols:add"></Icon>

            Add New Ship
          </button>
        </div>
        
        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead>
              <tr class="border-b">
                <th class="text-left py-3 px-4">Ship Name</th>
                <th class="text-left py-3 px-4">IMO Number</th>
                <th class="text-left py-3 px-4">Status</th>
                <th class="text-left py-3 px-4">Type</th>
                <th class="text-left py-3 px-4">Last Updated</th>
                <th class="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b hover:bg-gray-50">
                <td class="py-3 px-4">MV Ocean Star</td>
                <td class="py-3 px-4">IMO1234567</td>
                <td class="py-3 px-4">
                  <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">Active</span>
                </td>
                <td class="py-3 px-4">Container</td>
                <td class="py-3 px-4">2024-03-15</td>
                <td class="py-3 px-4">
                  <div class="flex gap-2">
                    <button 
                      @click="$router.push(`/kapal/1`)"
                      class="text-blue-600 hover:text-blue-800"
                    >
                      <Icon class="text-primary" name="weui:eyes-on-outlined"></Icon>
                    </button>
                    <button 
                      @click="$router.push(`/kapal/edit/1`)"
                      class="text-yellow-600 hover:text-yellow-800"
                    >
                      <Icon class="text-primary" name="material-symbols:edit-outline-sharp"></Icon>                     
                    </button>
                    <button class="text-red-600 hover:text-red-800">                      
                      <Icon class="text-primary" name="material-symbols:delete-outline-sharp"></Icon>
                    </button>
                  </div>
                </td>
              </tr>
              <!-- More rows would be dynamically generated -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// TODO: Add data fetching and state management
</script>

<style lang="scss" scoped>
// Add any custom styles here
</style>