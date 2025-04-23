<template>
    <div class="dashboard-container">
        <h1 class="dashboard-title">HQ Dashboard</h1>
        
        <div class="dashboard-grid">
            <!-- Ship Summary Card -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h2>Ships</h2>
                    <span class="icon">🚢</span>
                </div>
                <div class="card-content">
                    <p class="stat">Total Ships: <span>0</span></p>
                    <p class="stat">Active Ships: <span>0</span></p>
                </div>
            </div>

            <!-- Boat Summary Card -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h2>Boats</h2>
                    <span class="icon">⛵</span>
                </div>
                <div class="card-content">
                    <p class="stat">Total Boats: <span>0</span></p>
                    <p class="stat">Available Boats: <span>0</span></p>
                </div>
            </div>

            <!-- Component Summary Card -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h2>Components</h2>
                    <span class="icon">⚙️</span>
                </div>
                <div class="card-content">
                    <p class="stat">Total Components: <span>0</span></p>
                    <p class="stat">Critical Stock: <span>0</span></p>
                </div>
            </div>

            <!-- Crew Summary Card -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h2>Crew</h2>
                    <span class="icon">👥</span>
                </div>
                <div class="card-content">
                    <p class="stat">Total Crew: <span>0</span></p>
                    <p class="stat">On Duty: <span>0</span></p>
                </div>
            </div>

            <!-- Maintenance Summary Card -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h2>Maintenance</h2>
                    <span class="icon">🔧</span>
                </div>
                <div class="card-content">
                    <p class="stat">Pending Tasks: <span>0</span></p>
                    <p class="stat">Completed Today: <span>0</span></p>
                </div>
            </div>

            <!-- Modification Summary Card -->
            <div class="dashboard-card">
                <div class="card-header">
                    <h2>Modifications</h2>
                    <span class="icon">🔨</span>
                </div>
                <div class="card-content">
                    <p class="stat">In Progress: <span>0</span></p>
                    <p class="stat">Scheduled: <span>0</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Add your data fetching and reactive state management here
</script>

<style lang="scss" scoped>
.dashboard-container {
    padding: 2rem;
    
    .dashboard-title {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 2rem;
        color: #2c3e50;
    }

    .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
    }

    .dashboard-card {
        background: white;
        border-radius: 12px;
        padding: 1.5rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease, box-shadow 0.2s ease;

        &:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            
            h2 {
                font-size: 1.25rem;
                font-weight: 600;
                color: #2c3e50;
                margin: 0;
            }

            .icon {
                font-size: 1.5rem;
            }
        }

        .card-content {
            .stat {
                display: flex;
                justify-content: space-between;
                margin: 0.5rem 0;
                color: #666;
                
                span {
                    font-weight: 600;
                    color: #2c3e50;
                }
            }
        }
    }
}
</style>
