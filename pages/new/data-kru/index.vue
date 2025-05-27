<script setup>
  definePageMeta({
    title: "Kapal Profile",
    layout: "default",
    middleware: ["auth"],
  });

  // Mock data (example only)
  const kapalImage = "@/assets/image/vessels/kelas_langkawi.png"; // Replace with your real image source
  const statusKapal = "OPS";
  const nextAdDate = "2025-06-01";
  const nextPrefitDate = "2026-07-15";
  const totalCrew = 35;

  const tabs = [
    { name: "Profile", key: "profile" },
    { name: "Rupacara Aset", key: "rupacara" },
    { name: "ROVA", key: "rova" },    
    { name: "Aset", key: "osl" }, 
    { name: "Stock", key: "stock" },  
    { name: "PMS", key: "pms" },
    { name: "Kad Kerja", key: "jobcard" },
    { name: "Krew", key: "krew" },
    
  ];

  const field = ref(['tarikhKemaskini', 'penerangan','tindakan']);
  const fieldKrew = ref(['BIL', 'noTentera', 'nama', 'bahagian','tindakan']);


  const activeTab = ref("profile");

  // Rupacara data
  const rupacaraData = ref([
    {
      id: 1,
      tarikhKemaskini: "2024-03-20",
      penerangan: "Penggantian enjin utama dan sistem kawalan kapal",
      portView: "@/assets/img/vessels/port_view.png",
      starboardView: "@/assets/img/vessels/starboard_view.png",
      forwardView: "@/assets/img/vessels/forward_view.png",
      afterView: "@/assets/img/vessels/after_view.png",
      engineRoom: "@/assets/img/vessels/engine_room_1.jpg",
      closedBridge: "@/assets/img/vessels/closed_bridge_1.jpg"
    },
    {
      id: 2,
      tarikhKemaskini: "2024-03-15",
      penerangan: "Penambahbaikan sistem radar dan komunikasi",
      portView: "@/assets/img/vessels/port_view_2.jpg",
      starboardView: "@/assets/img/vessels/starboard_view_2.jpg",
      forwardView: "@/assets/img/vessels/forward_view_2.jpg",
      afterView: "@/assets/img/vessels/after_view_2.jpg",
      engineRoom: "@/assets/img/vessels/engine_room_2.jpg",
      closedBridge: "@/assets/img/vessels/closed_bridge_2.jpg"
    }
  ]);

  // Sort data in descending order by tarikhKemaskini
  const sortedRupacaraData = computed(() => {
    return [...rupacaraData.value].sort((a, b) => {
      return new Date(b.tarikhKemaskini) - new Date(a.tarikhKemaskini);
    });
  });

  // Modal state
  const isRupacaraModalOpen = ref(false);
  const isViewingRupacara = ref(false);
  const rupacaraForm = ref({
    id: null,
    tarikhKemaskini: new Date().toISOString().split('T')[0],
    penerangan: "",
    portView: null,
    starboardView: null,
    forwardView: null,
    afterView: null,
    engineRoom: null,
    closedBridge: null
  });

  // Open modal for adding rupacara
  const openAddRupacaraModal = () => {
    isViewingRupacara.value = false;
    rupacaraForm.value = {
      id: null,
      tarikhKemaskini: new Date().toISOString().split('T')[0],
      penerangan: "",
      portView: null,
      starboardView: null,
      forwardView: null,
      afterView: null,
      engineRoom: null,
      closedBridge: null
    };
    isRupacaraModalOpen.value = true;
  };

  // Open modal for viewing rupacara
  const openViewRupacaraModal = (item) => {
    isViewingRupacara.value = true;
    rupacaraForm.value = { ...item };
    isRupacaraModalOpen.value = true;
  };

  // Close modal
  const closeRupacaraModal = () => {
    isRupacaraModalOpen.value = false;
  };

  // Submit rupacara form
  const submitRupacaraForm = () => {
    // Add new item
    rupacaraData.value.push({
      ...rupacaraForm.value,
      id: Date.now() // Temporary ID
    });
    closeRupacaraModal();
  };

  // Handle FormKit form submission
  const handleRupacaraSubmit = (values) => {
    rupacaraForm.value = {
      ...rupacaraForm.value,
      ...values
    };
    submitRupacaraForm();
  };

  // ROVA data
  const rovaData = ref([
    {
      id: 1,
      bulan: "Januari 2024",
      statusKapal: "Operational",
      tarikhMula: "2024-01-01",
      tarikhTamat: "2024-01-31",
      peratus: 85,
      catatan: "Kapal beroperasi dengan baik sepanjang bulan"
    },
    {
      id: 2,
      bulan: "Februari 2024",
      statusKapal: "Maintenance",
      tarikhMula: "2024-02-01",
      tarikhTamat: "2024-02-29",
      peratus: 45,
      catatan: "Kapal menjalani penyelenggaraan berjadual"
    },
    {
      id: 3,
      bulan: "Mac 2024",
      statusKapal: "Operational",
      tarikhMula: "2024-03-01",
      tarikhTamat: "2024-03-31",
      peratus: 92,
      catatan: "Kapal beroperasi dengan prestasi tinggi"
    }
  ]);

  // Sort ROVA data in descending order by tarikhMula
  const sortedRovaData = computed(() => {
    return [...rovaData.value].sort((a, b) => {
      return new Date(b.tarikhMula) - new Date(a.tarikhMula);
    });
  });

  // ROVA Modal state
  const isRovaModalOpen = ref(false);
  const isViewingRova = ref(false);
  const isEditingRova = ref(false);
  const rovaForm = ref({
    id: null,
    bulan: "",
    statusKapal: "Operational",
    tarikhMula: "",
    tarikhTamat: "",
    peratus: 0,
    catatan: ""
  });

  // Open modal for adding ROVA
  const openAddRovaModal = () => {
    isViewingRova.value = false;
    isEditingRova.value = false;
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    rovaForm.value = {
      id: null,
      bulan: `${getMonthName(today.getMonth())} ${today.getFullYear()}`,
      statusKapal: "Operational",
      tarikhMula: firstDay.toISOString().split('T')[0],
      tarikhTamat: lastDay.toISOString().split('T')[0],
      peratus: 0,
      catatan: ""
    };
    isRovaModalOpen.value = true;
  };

  // Helper function to get month name
  function getMonthName(monthIndex) {
    const months = [
      "Januari", "Februari", "Mac", "April", "Mei", "Jun",
      "Julai", "Ogos", "September", "Oktober", "November", "Disember"
    ];
    return months[monthIndex];
  }

  // Open modal for viewing ROVA
  const openViewRovaModal = (item) => {
    isViewingRova.value = true;
    isEditingRova.value = false;
    rovaForm.value = { ...item };
    isRovaModalOpen.value = true;
  };

  // Open modal for editing ROVA
  const openEditRovaModal = (item) => {
    isViewingRova.value = false;
    isEditingRova.value = true;
    rovaForm.value = { ...item };
    isRovaModalOpen.value = true;
  };

  // Close ROVA modal
  const closeRovaModal = () => {
    isRovaModalOpen.value = false;
  };

  // Submit ROVA form
  const submitRovaForm = () => {
    if (isEditingRova.value) {
      // Update existing item
      const index = rovaData.value.findIndex((i) => i.id === rovaForm.value.id);
      if (index !== -1) {
        rovaData.value[index] = { ...rovaForm.value };
      }
    } else {
      // Add new item
      rovaData.value.push({
        ...rovaForm.value,
        id: Date.now() // Temporary ID
      });
    }
    closeRovaModal();
  };

  // Delete ROVA item
  const deleteRovaItem = (id) => {
    if (confirm('Adakah anda pasti untuk memadamkan rekod ini?')) {
      const index = rovaData.value.findIndex((i) => i.id === id);
      if (index !== -1) {
        rovaData.value.splice(index, 1);
      }
    }
  };

  // Handle ROVA FormKit form submission
  const handleRovaSubmit = (values) => {
    rovaForm.value = {
      ...rovaForm.value,
      ...values
    };
    submitRovaForm();
  };

  // Vessel profile data
  const vesselProfile = ref({
    generalInfo: {
      name: "KD KEDAH",
      pennantNumber: "F171",
      class: "KEDAH Class",
      type: "Patrol Vessel",
      commissioned: "2006-06-12",
      builder: "Boustead Naval Shipyard Sdn. Bhd.",
      homePort: "Lumut, Perak"
    },
    specifications: {
      displacement: "1,850 tons",
      length: "91.1 meters",
      beam: "12.5 meters",
      draft: "3.4 meters",
      propulsion: "2 × MTU 16V 4000 M90 diesel engines",
      speed: "22 knots (maximum)",
      range: "5,000 nautical miles at 12 knots",
      complement: "68 personnel (8 officers, 60 enlisted)"
    },
    armament: {
      mainGun: "1 × Bofors 57mm Mk3 naval gun",
      secondaryGuns: "2 × MSI Defence 30mm cannon",
      missiles: "MBDA Exocet MM40 Block II anti-ship missiles",
      torpedoes: "J+S torpedo launcher system",
      other: "Decoy launchers, Electronic warfare suite"
    },
    electronics: {
      radar: "Thales SMART-S Mk2 3D surveillance radar",
      sonar: "Thales Kingklip hull-mounted sonar",
      combatSystem: "Atlas TACTICOS combat management system",
      communication: "Integrated communications system with SATCOM capability"
    },
    maintenance: {
      lastMaintenance: "2023-09-15",
      nextScheduled: "2024-09-15",
      certifications: "Lloyd's Register Classification, MARPOL compliance"
    }
  });

  // PMS data
  const pmsData = ref([
    {
      id: 1,
      type: "AD",
      year: 2024,
      location: "Lumut, Perak",
      description: "Penyelenggaraan tahunan kapal"
    },
    {
      id: 2,
      type: "AD",
      year: 2025,
      location: "Lumut, Perak",
      description: "Penyelenggaraan tahunan kapal"
    },
    {
      id: 3,
      type: "AD",
      year: 2026,
      location: "Lumut, Perak",
      description: "Penyelenggaraan tahunan kapal"
    },
    {
      id: 4,
      type: "AD",
      year: 2027,
      location: "Lumut, Perak",
      description: "Penyelenggaraan tahunan kapal"
    },
    {
      id: 5,
      type: "Refit",
      year: 2028,
      location: "Lumut, Perak",
      description: "Penyelenggaraan prefit kapal"
    },
    {
      id: 6,
      type: "AMP",
      year: 2029,
      location: "Lumut, Perak",
      description: "Penyelenggaraan sistem elektronik kapal"
    },
    {
      id: 7,
      type: "AD",
      year: 2030,
      location: "Lumut, Perak",
      description: "Penyelenggaraan tahunan kapal"
    },
    {
      id: 8,
      type: "Refit",
      year: 2031,
      location: "Lumut, Perak",
      description: "Penyelenggaraan refit lengkap kapal"
    },
    {
      id: 9,
      type: "AD",
      year: 2032,
      location: "Lumut, Perak",
      description: "Penyelenggaraan tahunan kapal"
    },
    {
      id: 10,
      type: "AMP",
      year: 2033,
      location: "Lumut, Perak",
      description: "Penyelenggaraan sistem pendorongan kapal"
    }
  ]);

  // Ship Equipment data
  const shipEquipmentData = ref([
    {
      id: 1,
      equipmentNo: "EQ-2024-001",
      name: "Sistem Radar",
      category: "Elektronik",
      manufacturer: "Thales",
      model: "SMART-S Mk2",
      serialNumber: "TH-2345-8976",
      installationDate: "2006-06-15",
      status: "Beroperasi"
    },
    {
      id: 2,
      equipmentNo: "EQ-2024-002",
      name: "Sonar Sistem",
      category: "Elektronik",
      manufacturer: "Thales",
      model: "Kingklip",
      serialNumber: "TH-5678-1234",
      installationDate: "2006-06-20",
      status: "Beroperasi"
    },
    {
      id: 3,
      equipmentNo: "EQ-2024-003",
      name: "Enjin Utama 1",
      category: "Pendorongan",
      manufacturer: "MTU",
      model: "16V 4000 M90",
      serialNumber: "MTU-1234-5678",
      installationDate: "2006-05-10",
      status: "Beroperasi"
    },
    {
      id: 4,
      equipmentNo: "EQ-2024-004",
      name: "Enjin Utama 2",
      category: "Pendorongan",
      manufacturer: "MTU",
      model: "16V 4000 M90",
      serialNumber: "MTU-1234-5679",
      installationDate: "2006-05-10",
      status: "Penyelenggaraan"
    },
    {
      id: 5,
      equipmentNo: "EQ-2024-005",
      name: "Senjata Utama",
      category: "Persenjataan",
      manufacturer: "Bofors",
      model: "57mm Mk3",
      serialNumber: "BF-9876-5432",
      installationDate: "2006-07-05",
      status: "Beroperasi"
    },
    {
      id: 6,
      equipmentNo: "EQ-2024-006",
      name: "Sistem Komunikasi",
      category: "Komunikasi",
      manufacturer: "Harris",
      model: "RF-7800",
      serialNumber: "HR-4567-8901",
      installationDate: "2006-06-25",
      status: "Beroperasi"
    }
  ]);

  // Stock/Inventory data
  const stockData = ref([
    {
      id: 1,
      stockNo: "STK-2024-001",
      name: "Minyak Enjin",
      category: "Alat Ganti",
      quantity: 50,
      unit: "Liter",
      location: "Stor A",
      lastUpdated: "2024-03-15",
      minimumStock: 20,
      status: "Mencukupi"
    },
    {
      id: 2,
      stockNo: "STK-2024-002",
      name: "Penapis Minyak",
      category: "Alat Ganti",
      quantity: 15,
      unit: "Unit",
      location: "Stor B",
      lastUpdated: "2024-03-10",
      minimumStock: 5,
      status: "Mencukupi"
    },
    {
      id: 3,
      stockNo: "STK-2024-003",
      name: "Lampu Isyarat",
      category: "Elektrik",
      quantity: 8,
      unit: "Unit",
      location: "Stor C",
      lastUpdated: "2024-02-28",
      minimumStock: 10,
      status: "Kurang"
    },
    {
      id: 4,
      stockNo: "STK-2024-004",
      name: "Tali Tambat",
      category: "Peralatan Deck",
      quantity: 3,
      unit: "Gulung",
      location: "Stor D",
      lastUpdated: "2024-03-05",
      minimumStock: 2,
      status: "Mencukupi"
    },
    {
      id: 5,
      stockNo: "STK-2024-005",
      name: "Alat Ganti Radar",
      category: "Elektronik",
      quantity: 2,
      unit: "Set",
      location: "Stor E",
      lastUpdated: "2024-03-20",
      minimumStock: 1,
      status: "Mencukupi"
    },
    {
      id: 6,
      stockNo: "STK-2024-006",
      name: "Bateri",
      category: "Elektrik",
      quantity: 5,
      unit: "Unit",
      location: "Stor C",
      lastUpdated: "2024-03-18",
      minimumStock: 8,
      status: "Kurang"
    }
  ]);

  // Stock Modal state
  const isStockModalOpen = ref(false);
  const isViewingStock = ref(false);
  const isEditingStock = ref(false);
  const stockForm = ref({
    id: null,
    stockNo: "",
    name: "",
    category: "",
    quantity: 0,
    unit: "",
    location: "",
    lastUpdated: "",
    minimumStock: 0,
    status: "Mencukupi"
  });

  // Open modal for adding stock
  const openAddStockModal = () => {
    isViewingStock.value = false;
    isEditingStock.value = false;
    const today = new Date().toISOString().split('T')[0];
    const newStockNo = `STK-${new Date().getFullYear()}-${String(stockData.value.length + 1).padStart(3, '0')}`;
    
    stockForm.value = {
      id: null,
      stockNo: newStockNo,
      name: "",
      category: "",
      quantity: 0,
      unit: "",
      location: "",
      lastUpdated: today,
      minimumStock: 0,
      status: "Mencukupi"
    };
    isStockModalOpen.value = true;
  };

  // Open modal for viewing stock
  const viewStockItem = (item) => {
    isViewingStock.value = true;
    isEditingStock.value = false;
    stockForm.value = { ...item };
    isStockModalOpen.value = true;
  };

  // Open modal for editing stock
  const editStockItem = (item) => {
    isViewingStock.value = false;
    isEditingStock.value = true;
    stockForm.value = { ...item };
    isStockModalOpen.value = true;
  };

  // Close stock modal
  const closeStockModal = () => {
    isStockModalOpen.value = false;
  };

  // Submit stock form
  const submitStockForm = () => {
    // Update status based on quantity and minimum stock
    stockForm.value.status = stockForm.value.quantity >= stockForm.value.minimumStock ? "Mencukupi" : "Kurang";
    
    if (isEditingStock.value) {
      // Update existing item
      const index = stockData.value.findIndex((i) => i.id === stockForm.value.id);
      if (index !== -1) {
        stockData.value[index] = { ...stockForm.value };
      }
    } else {
      // Add new item
      stockData.value.push({
        ...stockForm.value,
        id: Date.now() // Temporary ID
      });
    }
    closeStockModal();
  };

  // Delete stock item
  const deleteStockItem = (id) => {
    if (confirm('Adakah anda pasti untuk memadamkan rekod ini?')) {
      const index = stockData.value.findIndex((i) => i.id === id);
      if (index !== -1) {
        stockData.value.splice(index, 1);
      }
    }
  };

  // Handle stock FormKit form submission
  const handleStockSubmit = (values) => {
    stockForm.value = {
      ...stockForm.value,
      ...values
    };
    submitStockForm();
  };

  // Stock categories for filtering
  const stockCategories = ["Semua", "Alat Ganti", "Elektrik", "Elektronik", "Peralatan Deck", "Lain-lain"];
  const selectedStockCategory = ref("Semua");

  // Filtered stock data
  const filteredStockData = computed(() => {
    if (selectedStockCategory.value === "Semua") {
      return stockData.value;
    }
    return stockData.value.filter(item => item.category === selectedStockCategory.value);
  });

  // Equipment Modal state
  const isEquipmentModalOpen = ref(false);
  const isViewingEquipment = ref(false);
  const isEditingEquipment = ref(false);
  const equipmentForm = ref({
    id: null,
    equipmentNo: "",
    name: "",
    category: "",
    manufacturer: "",
    model: "",
    serialNumber: "",
    installationDate: "",
    status: "Beroperasi"
  });

  // Open modal for adding equipment
  const openAddEquipmentModal = () => {
    isViewingEquipment.value = false;
    isEditingEquipment.value = false;
    const today = new Date().toISOString().split('T')[0];
    const newEquipmentNo = `EQ-${new Date().getFullYear()}-${String(shipEquipmentData.value.length + 1).padStart(3, '0')}`;
    
    equipmentForm.value = {
      id: null,
      equipmentNo: newEquipmentNo,
      name: "",
      category: "",
      manufacturer: "",
      model: "",
      serialNumber: "",
      installationDate: today,
      status: "Beroperasi"
    };
    isEquipmentModalOpen.value = true;
  };

  // Open modal for viewing equipment
  const viewEquipmentItem = (item) => {
    isViewingEquipment.value = true;
    isEditingEquipment.value = false;
    equipmentForm.value = { ...item };
    isEquipmentModalOpen.value = true;
  };

  // Open modal for editing equipment
  const editEquipmentItem = (item) => {
    isViewingEquipment.value = false;
    isEditingEquipment.value = true;
    equipmentForm.value = { ...item };
    isEquipmentModalOpen.value = true;
  };

  // Close equipment modal
  const closeEquipmentModal = () => {
    isEquipmentModalOpen.value = false;
  };

  // Submit equipment form
  const submitEquipmentForm = () => {
    if (isEditingEquipment.value) {
      // Update existing item
      const index = shipEquipmentData.value.findIndex((i) => i.id === equipmentForm.value.id);
      if (index !== -1) {
        shipEquipmentData.value[index] = { ...equipmentForm.value };
      }
    } else {
      // Add new item
      shipEquipmentData.value.push({
        ...equipmentForm.value,
        id: Date.now() // Temporary ID
      });
    }
    closeEquipmentModal();
  };

  // Delete equipment item
  const deleteEquipmentItem = (id) => {
    if (confirm('Adakah anda pasti untuk memadamkan rekod ini?')) {
      const index = shipEquipmentData.value.findIndex((i) => i.id === id);
      if (index !== -1) {
        shipEquipmentData.value.splice(index, 1);
      }
    }
  };

  // Handle equipment FormKit form submission
  const handleEquipmentSubmit = (values) => {
    equipmentForm.value = {
      ...equipmentForm.value,
      ...values
    };
    submitEquipmentForm();
  };

  // Equipment categories for filtering
  const equipmentCategories = ["Semua", "Elektronik", "Pendorongan", "Persenjataan", "Komunikasi", "Lain-lain"];
  const selectedCategory = ref("Semua");

  // Filtered equipment data
  const filteredEquipmentData = computed(() => {
    if (selectedCategory.value === "Semua") {
      return shipEquipmentData.value;
    }
    return shipEquipmentData.value.filter(item => item.category === selectedCategory.value);
  });

  // PMS Modal state
  const isMaintenanceModalOpen = ref(false);
  const isViewingMaintenance = ref(false);
  const isEditingMaintenance = ref(false);
  const maintenanceForm = ref({
    id: null,
    type: "AD",
    year: new Date().getFullYear(),
    location: "",
    description: ""
  });

  // Open modal for adding maintenance
  const openAddMaintenanceModal = () => {
    isViewingMaintenance.value = false;
    maintenanceForm.value = {
      id: null,
      type: "AD",
      year: new Date().getFullYear(),
      location: "",
      description: ""
    };
    isMaintenanceModalOpen.value = true;
  };

  // Open modal for viewing maintenance
  const viewMaintenanceItem = (item) => {
    isViewingMaintenance.value = true;
    isEditingMaintenance.value = false;
    maintenanceForm.value = { ...item };
    isMaintenanceModalOpen.value = true;
  };

  // Open modal for editing maintenance
  const editMaintenanceItem = (item) => {
    isViewingMaintenance.value = false;
    isEditingMaintenance.value = true;
    maintenanceForm.value = { ...item };
    isMaintenanceModalOpen.value = true;
  };

  // Close maintenance modal
  const closeMaintenanceModal = () => {
    isMaintenanceModalOpen.value = false;
  };

  // Submit maintenance form
  const submitMaintenanceForm = () => {
    if (isEditingMaintenance.value) {
      // Update existing item
      const index = pmsData.value.findIndex((i) => i.id === maintenanceForm.value.id);
      if (index !== -1) {
        pmsData.value[index] = { ...maintenanceForm.value };
      }
    } else {
      // Add new item
      pmsData.value.push({
        ...maintenanceForm.value,
        id: Date.now() // Temporary ID
      });
    }
    closeMaintenanceModal();
  };

  // Handle maintenance FormKit form submission
  const handleMaintenanceSubmit = (values) => {
    maintenanceForm.value = {
      ...maintenanceForm.value,
      ...values
    };
    submitMaintenanceForm();
  };

  // Current start year (for 10-year view)
  const startYear = ref(2024);

  // Next decade
  const nextDecade = () => {
    startYear.value += 10;
  };

  // Previous decade
  const prevDecade = () => {
    startYear.value -= 10;
  };

  // Get maintenance items for a specific year
  const getYearMaintenanceItems = (year) => {
    return pmsData.value.filter(item => item.year === year);
  };

  // Get current year
  const currentYear = new Date().getFullYear();

  // Next year
  const nextYear = () => {
    currentYear.value++;
  };

  // Previous year
  const prevYear = () => {
    currentYear.value--;
  };

  // Get months
  const months = ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September", "Oktober", "November", "Disember"];

  // Get maintenance items for a specific month
  const getMonthMaintenanceItems = (monthIndex) => {
    return pmsData.value.filter(item => {
      const startDate = new Date(item.startDate);
      const endDate = new Date(item.endDate);
      const monthStart = new Date(currentYear.value, monthIndex, 1);
      const monthEnd = new Date(currentYear.value, monthIndex + 1, 0);
      
      return (
        (startDate <= monthEnd && endDate >= monthStart) || 
        (startDate >= monthStart && startDate <= monthEnd) ||
        (endDate >= monthStart && endDate <= monthEnd)
      );
    });
  };

  // Get days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Crew data
  const crewData = ref([
    {
      id: 1,
      noTentera: "T12345",
      name: "Kapt. Ahmad bin Ismail",
      position: "Kapten Kapal",
      joinDate: "2020-06-15",
      endDate: "2024-06-14",
      status: "Aktif",
      contactNo: "012-3456789",
      email: "ahmad.ismail@tldm.mil.my",
      tindakan: "lihat",
      training: [
        { id: 1, name: "Kursus Kepimpinan Maritim", date: "2021-03-15", duration: "2 minggu", location: "Akademi TLDM, Lumut" },
        { id: 2, name: "Latihan Pengurusan Krisis", date: "2022-06-10", duration: "1 minggu", location: "Pusat Latihan TLDM, Kuantan" }
      ],
      serviceRecord: [
        { id: 1, position: "Pegawai Navigasi", vessel: "KD LEKIU", startDate: "2015-06-10", endDate: "2018-05-20" },
        { id: 2, position: "Pegawai Eksekutif", vessel: "KD JEBAT", startDate: "2018-06-01", endDate: "2020-06-10" }
      ],
      education: [
        { id: 1, qualification: "Ijazah Sarjana Muda Kejuruteraan Maritim", institution: "Universiti Pertahanan Nasional Malaysia", year: "2010" },
        { id: 2, qualification: "Diploma Pengajian Maritim", institution: "Akademi TLDM", year: "2008" }
      ]
    },
    {
      id: 2,
      noTentera: "T23456",
      name: "Lt. Kdr. Siti binti Hassan",
      position: "Pegawai Eksekutif",
      joinDate: "2021-03-10",
      endDate: "2025-03-09",
      status: "Aktif",
      contactNo: "013-4567890",
      email: "siti.hassan@tldm.mil.my",
      tindakan: "lihat",
      training: [
        { id: 1, name: "Kursus Pengurusan Strategik", date: "2021-09-20", duration: "3 minggu", location: "Akademi TLDM, Lumut" },
        { id: 2, name: "Latihan Operasi Bersama", date: "2022-11-05", duration: "2 minggu", location: "Pangkalan TLDM, Kota Kinabalu" }
      ],
      serviceRecord: [
        { id: 1, position: "Pegawai Komunikasi", vessel: "KD KASTURI", startDate: "2016-03-15", endDate: "2019-04-30" },
        { id: 2, position: "Pegawai Eksekutif", vessel: "KD KEDAH", startDate: "2019-05-15", endDate: "2021-03-01" }
      ],
      education: [
        { id: 1, qualification: "Ijazah Sarjana Muda Sains Komputer", institution: "Universiti Malaya", year: "2012" },
        { id: 2, qualification: "Diploma Pengajian Pertahanan", institution: "Akademi TLDM", year: "2009" }
      ]
    },
    {
      id: 3,
      noTentera: "T34567",
      name: "Lt. Mohd Rizal bin Abdullah",
      position: "Pegawai Navigasi",
      joinDate: "2022-01-20",
      endDate: "2026-01-19",
      status: "Aktif",
      contactNo: "014-5678901",
      email: "mohd.rizal@tldm.mil.my",
      tindakan: "lihat",
      training: [
        { id: 1, name: "Kursus Navigasi Lanjutan", date: "2022-05-10", duration: "4 minggu", location: "Akademi TLDM, Lumut" }
      ]
    },
    {
      id: 4,
      noTentera: "T45678",
      name: "PW I Ravi a/l Chandran",
      position: "Ketua Jurutera",
      joinDate: "2019-11-05",
      endDate: "2023-11-04",
      status: "Cuti",
      contactNo: "015-6789012",
      email: "ravi.chandran@tldm.mil.my",
      tindakan: "lihat",
      training: [
        { id: 1, name: "Kursus Penyelenggaraan Enjin", date: "2020-02-15", duration: "3 minggu", location: "Pusat Teknikal TLDM, Lumut" },
        { id: 2, name: "Latihan Sistem Pendorongan", date: "2021-07-20", duration: "2 minggu", location: "Pusat Teknikal TLDM, Lumut" },
        { id: 3, name: "Kursus Pengurusan Kejuruteraan", date: "2022-09-12", duration: "1 minggu", location: "Akademi TLDM, Lumut" }
      ]
    },
    {
      id: 5,
      noTentera: "T56789",
      name: "PW II Tan Mei Ling",
      position: "Ketua Komunikasi",
      joinDate: "2020-08-15",
      endDate: "2024-08-14",
      status: "Aktif",
      contactNo: "016-7890123",
      email: "tan.meiling@tldm.mil.my",
      tindakan: "lihat",
      training: [
        { id: 1, name: "Kursus Sistem Komunikasi Maritim", date: "2021-04-05", duration: "3 minggu", location: "Pusat Latihan TLDM, Kuantan" },
        { id: 2, name: "Latihan Keselamatan Siber", date: "2022-08-15", duration: "1 minggu", location: "Pusat Siber TLDM, Kuala Lumpur" }
      ]
    },
    {
      id: 6,
      noTentera: "T67890",
      name: "BM Iskandar bin Zulkifli",
      position: "Juruteknik Elektronik",
      joinDate: "2021-05-20",
      endDate: "2025-05-19",
      status: "Aktif",
      contactNo: "017-8901234",
      email: "iskandar.zulkifli@tldm.mil.my",
      tindakan: "lihat",
      training: [
        { id: 1, name: "Kursus Asas Elektronik Kapal", date: "2021-08-10", duration: "4 minggu", location: "Pusat Teknikal TLDM, Lumut" }
      ]
    }
  ]);

  // Crew Modal state
  const isCrewModalOpen = ref(false);
  const isViewingCrew = ref(false);
  const isEditingCrew = ref(false);
  const crewForm = ref({
    id: null,
    noTentera: "",
    name: "",
    position: "",
    joinDate: "",
    endDate: "",
    status: "Aktif",
    contactNo: "",
    email: "",
    tindakan: "lihat",
    training: [],
    serviceRecord: [],
    education: []
  });

  // Open modal for adding crew
  const openAddCrewModal = () => {
    isViewingCrew.value = false;
    isEditingCrew.value = false;
    const today = new Date().toISOString().split('T')[0];
    const fourYearsLater = new Date();
    fourYearsLater.setFullYear(fourYearsLater.getFullYear() + 4);
    
    crewForm.value = {
      id: null,
      noTentera: "",
      name: "",
      position: "",
      joinDate: today,
      endDate: fourYearsLater.toISOString().split('T')[0],
      status: "Aktif",
      contactNo: "",
      email: "",
      tindakan: "lihat",
      training: [],
      serviceRecord: [],
      education: []
    };
    isCrewModalOpen.value = true;
  };

  // Open modal for viewing crew
  const viewCrewItem = (item) => {
    isViewingCrew.value = true;
    isEditingCrew.value = false;
    crewForm.value = { ...item };
    isCrewModalOpen.value = true;
  };

  // Open modal for editing crew
  const editCrewItem = (item) => {
    isViewingCrew.value = false;
    isEditingCrew.value = true;
    crewForm.value = { ...item };
    isCrewModalOpen.value = true;
  };

  // Close crew modal
  const closeCrewModal = () => {
    isCrewModalOpen.value = false;
  };

  // Submit crew form
  const submitCrewForm = () => {
    if (isEditingCrew.value) {
      // Update existing item
      const index = crewData.value.findIndex((i) => i.id === crewForm.value.id);
      if (index !== -1) {
        crewData.value[index] = { ...crewForm.value };
      }
    } else {
      // Add new item
      crewData.value.push({
        ...crewForm.value,
        id: Date.now() // Temporary ID
      });
    }
    closeCrewModal();
  };

  // Delete crew item
  const deleteCrewItem = (id) => {
    if (confirm('Adakah anda pasti untuk memadamkan rekod ini?')) {
      const index = crewData.value.findIndex((i) => i.id === id);
      if (index !== -1) {
        crewData.value.splice(index, 1);
      }
    }
  };

  // Handle crew FormKit form submission
  const handleCrewSubmit = (values) => {
    crewForm.value = {
      ...crewForm.value,
      ...values
    };
    submitCrewForm();
  };

  // Crew departments for filtering
  const crewDepartments = ["Semua", "Pemerintah", "Eksekutif", "Navigasi", "Kejuruteraan", "Komunikasi", "Elektronik", "Lain-lain"];
  const selectedCrewDepartment = ref("Semua");

  // Filtered crew data
  const filteredCrewData = computed(() => {
    if (selectedCrewDepartment.value === "Semua") {
      return crewData.value;
    }
    return crewData.value.filter(item => item.department === selectedCrewDepartment.value);
  });

  // Print crew item
  const printCrewItem = (item) => {
    // Implement print functionality
    console.log("Printing crew item:", item);
  };

  // Job Card data
  const jobCardData = ref([
    {
      BIL: 1,
      'JENIS ASET': 'Sistem Radar',
      'Pengguna Terakhir': 'KD Kedah',
      'TARIKH ROSAK': '2024-03-15',
      'PEMOHON': 'Kapt. Razak',
      'AMOUN': 'RM 15,000',
      'TINDAKAN': '1'
    },
    {
      BIL: 2,
      'JENIS ASET': 'Enjin Utama',
      'Pengguna Terakhir': 'KD Kedah',
      'TARIKH ROSAK': '2024-04-02',
      'PEMOHON': 'Kapt. Razak',
      'AMOUN': 'RM 45,000',
      'TINDAKAN': '2'
    },
    {
      BIL: 3,
      'JENIS ASET': 'Sistem Komunikasi',
      'Pengguna Terakhir': 'KD Kedah',
      'TARIKH ROSAK': '2024-04-10',
      'PEMOHON': 'Lt. Mohd Rizal',
      'AMOUN': 'RM 12,500',
      'TINDAKAN': '3'
    },
    {
      BIL: 4,
      'JENIS ASET': 'Sistem Sonar',
      'Pengguna Terakhir': 'KD Kedah',
      'TARIKH ROSAK': '2024-04-15',
      'PEMOHON': 'Kapt. Razak',
      'AMOUN': 'RM 22,300',
      'TINDAKAN': '4'
    },
    {
      BIL: 5,
      'JENIS ASET': 'Sistem Pendorongan',
      'Pengguna Terakhir': 'KD Kedah',
      'TARIKH ROSAK': '2024-04-18',
      'PEMOHON': 'Lt. Mohd Rizal',
      'AMOUN': 'RM 38,750',
      'TINDAKAN': '5'
    }
  ]);

  // Add Job Card Modal state
  const isAddJobCardModalOpen = ref(false);
  const newJobCardForm = ref({
    'JENIS ASET': '',
    'Pengguna Terakhir': 'KD Kedah',
    'TARIKH ROSAK': new Date().toISOString().split('T')[0],
    'PEMOHON': '',
    'AMOUN': '',
    'reportType': 'DEFECT',
    'location': 'PANGKALAN TLDM LUMUT',
    'mainSystem': '',
    'runningHours': '',
    'manufacturer': '',
    'serialNo': '',
    'remarks': ''
  });

  // Open add job card modal
  const openAddJobCardModal = () => {
    newJobCardForm.value = {
      'JENIS ASET': '',
      'Pengguna Terakhir': 'KD Kedah',
      'TARIKH ROSAK': new Date().toISOString().split('T')[0],
      'PEMOHON': '',
      'AMOUN': '',
      'reportType': 'DEFECT',
      'location': 'PANGKALAN TLDM LUMUT',
      'mainSystem': '',
      'runningHours': '',
      'manufacturer': '',
      'serialNo': '',
      'remarks': ''
    };
    isAddJobCardModalOpen.value = true;
  };

  // Close add job card modal
  const closeAddJobCardModal = () => {
    isAddJobCardModalOpen.value = false;
  };

  // Submit new job card
  const submitNewJobCard = () => {
    // Create a new job card entry
    const newJobCard = {
      id: Date.now(),
      BIL: jobCardData.value.length + 1,
      ...newJobCardForm.value
    };
    
    // Add to the job cards array
    jobCardData.value.push(newJobCard);
    
    // Close the modal
    closeAddJobCardModal();
  };

  // Add Job Card view modal state
  const isViewJobCardModalOpen = ref(false);
  const selectedJobCard = ref(null);

  // Open view job card modal
  const openViewJobCardModal = (jobCard) => {
    selectedJobCard.value = jobCard;
    isViewJobCardModalOpen.value = true;
  };

  // Close view job card modal
  const closeViewJobCardModal = () => {
    isViewJobCardModalOpen.value = false;
  };
</script>

<template>
  <div class="p-6 space-y-6">
    <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold">Senarai Krew Kapal</h2>
        <rs-button variant="primary" @click="openAddCrewModal">
            <Icon name="material-symbols:add" />
            Tambah Krew
        </rs-button>
    </div>
    <rs-card>
               
        <div class="p-4">
            <!-- Crew Table -->
            <rs-table
            :data="filteredCrewData"
            :columns="[
                { key: 'noTentera', label: 'No. Tentera' },
                { key: 'name', label: 'Nama' },
                { key: 'position', label: 'Jawatan' },
                { key: 'department', label: 'Jabatan' },
                { key: 'tindakan', label: 'Tindakan' }
            ]"
            :options="{
                variant: 'default',
                striped: true,
                borderless: true,
            }"
            :options-advanced="{
                sortable: true,
                responsive: true,
                filterable: true,
                defaultSort: { column: 'name', direction: 'asc' }
            }"
            advanced
            :field="fieldKrew"
            >
            <template v-slot:tindakan="row">
                <div class="flex gap-2">
                    <button @click="viewCrewItem(row.value)"  size="sm" >
                        <Icon class="text-primary" name="ic:baseline-remove-red-eye"></Icon>
                    </button>
                <!-- <rs-button variant="primary" size="sm" >Lihat</rs-button> -->
                <!-- <rs-button variant="warning" size="sm" @click="editCrewItem(row.value)">Kemaskini</rs-button>
                <rs-button variant="danger" size="sm" @click="deleteCrewItem(row.value.id)">Padam</rs-button>
                <rs-button variant="info" size="sm" @click="printCrewItem(row.value)">
                    <i class="fas fa-print mr-1"></i>Cetak
                </rs-button> -->
                </div>
            </template>
            </rs-table>
        </div>
    </rs-card>

    <!-- Crew Modal -->
    <rs-modal v-model="isCrewModalOpen" size="lg">
    <template #header>
        <h3 class="text-lg font-semibold">
        {{ isViewingCrew ? 'Maklumat Krew' : isEditingCrew ? 'Kemaskini Krew' : 'Tambah Krew' }}
        </h3>
    </template>

    <template #body>
        <!-- View Mode -->
        <div v-if="isViewingCrew" class="space-y-6">
        <!-- Crew Profile Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-blue-700 mb-4">Profil Krew</h3>
            
            <div class="flex items-center mb-6">
            <div class="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mr-6">
                <span class="text-3xl font-bold text-gray-500">{{ crewForm.name.charAt(0) }}</span>
            </div>
            
            <div>
                <h4 class="text-lg font-semibold">{{ crewForm.name }}</h4>
                <p class="text-gray-600">{{ crewForm.position }}</p>
                <div class="mt-2">
                <rs-badge
                    :variant="crewForm.status === 'Aktif' ? 'success' : 'warning'"
                >
                    {{ crewForm.status }}
                </rs-badge>
                </div>
            </div>
            </div>
            
            <div class="grid grid-cols-2 gap-6">
            <div>
                <div class="mb-4">
                <h5 class="text-sm font-medium text-gray-500">No. Tentera</h5>
                <p>{{ crewForm.noTentera }}</p>
                </div>
                
                <div class="mb-4">
                <h5 class="text-sm font-medium text-gray-500">Tarikh Mula</h5>
                <p>{{ crewForm.joinDate }}</p>
                </div>
                
                <div class="mb-4">
                <h5 class="text-sm font-medium text-gray-500">No. Telefon</h5>
                <p>{{ crewForm.contactNo }}</p>
                </div>
            </div>
            
            <div>
                <div class="mb-4">
                <h5 class="text-sm font-medium text-gray-500">Jawatan</h5>
                <p>{{ crewForm.position }}</p>
                </div>
                
                <div class="mb-4">
                <h5 class="text-sm font-medium text-gray-500">Tarikh Tamat</h5>
                <p>{{ crewForm.endDate }}</p>
                </div>
                
                <div class="mb-4">
                <h5 class="text-sm font-medium text-gray-500">E-mel</h5>
                <p>{{ crewForm.email }}</p>
                </div>
            </div>
            </div>
        </div>
        
        <!-- Service Record Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold text-blue-700">Rekod Perkhidmatan</h3>
            </div>
            
            <div v-if="crewForm.serviceRecord && crewForm.serviceRecord.length > 0">
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white">
                <thead class="bg-gray-100">
                    <tr>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Jawatan</th>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Kapal</th>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Tarikh Mula</th>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Tarikh Tamat</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="record in crewForm.serviceRecord" :key="record.id" class="hover:bg-gray-50">
                    <td class="py-3 px-4 text-sm">{{ record.position }}</td>
                    <td class="py-3 px-4 text-sm">{{ record.vessel }}</td>
                    <td class="py-3 px-4 text-sm">{{ record.startDate }}</td>
                    <td class="py-3 px-4 text-sm">{{ record.endDate }}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            
            <div v-else class="p-4 text-center text-gray-500">
            Tiada rekod perkhidmatan dijumpai.
            </div>
        </div>
        
        <!-- Education Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold text-blue-700">Rekod Pendidikan</h3>
            </div>
            
            <div v-if="crewForm.education && crewForm.education.length > 0">
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white">
                <thead class="bg-gray-100">
                    <tr>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Kelayakan</th>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Institusi</th>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Tahun</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="edu in crewForm.education" :key="edu.id" class="hover:bg-gray-50">
                    <td class="py-3 px-4 text-sm">{{ edu.qualification }}</td>
                    <td class="py-3 px-4 text-sm">{{ edu.institution }}</td>
                    <td class="py-3 px-4 text-sm">{{ edu.year }}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            
            <div v-else class="p-4 text-center text-gray-500">
            Tiada rekod pendidikan dijumpai.
            </div>
        </div>
        
        <!-- Training List Section -->
        <div class="bg-white rounded-lg shadow-md p-6">
            <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold text-blue-700">Senarai Latihan</h3>
            <!-- <rs-button variant="primary" size="sm">Tambah Latihan</rs-button> -->
            </div>
            
            <div v-if="crewForm.training && crewForm.training.length > 0">
            <div class="overflow-x-auto">
                <table class="min-w-full bg-white">
                <thead class="bg-gray-100">
                    <tr>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Nama Latihan</th>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Tarikh</th>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Tempoh</th>
                    <th class="py-3 px-4 text-left text-sm font-medium text-gray-600">Lokasi</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="training in crewForm.training" :key="training.id" class="hover:bg-gray-50">
                    <td class="py-3 px-4 text-sm">{{ training.name }}</td>
                    <td class="py-3 px-4 text-sm">{{ training.date }}</td>
                    <td class="py-3 px-4 text-sm">{{ training.duration }}</td>
                    <td class="py-3 px-4 text-sm">{{ training.location }}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            </div>
            
            <div v-else class="p-4 text-center text-gray-500">
            Tiada rekod latihan dijumpai.
            </div>
        </div>
        </div>
        
        <!-- Edit/Add Mode -->
        <FormKit v-else type="form" :value="crewForm" @submit="handleCrewSubmit">
        <div class="grid grid-cols-2 gap-4">
            <!-- No. Tentera -->
            <FormKit
            type="text"
            name="noTentera"
            label="No. Tentera"
            placeholder="Contoh: T12345"
            validation="required"
            />

            <!-- Status -->
            <FormKit
            type="select"
            name="status"
            label="Status"
            :options="['Aktif', 'Cuti', 'Sakit', 'Latihan']"
            validation="required"
            />
        </div>

        <!-- Nama -->
        <FormKit
            type="text"
            name="name"
            label="Nama"
            placeholder="Contoh: Kapt. Ahmad bin Ismail"
            validation="required"
        />

        <div class="grid grid-cols-2 gap-4">
            <!-- Jawatan -->
            <FormKit
            type="text"
            name="position"
            label="Jawatan"
            placeholder="Contoh: Kapten Kapal"
            validation="required"
            />

            <!-- Jabatan -->
            <FormKit
            type="select"
            name="department"
            label="Jabatan"
            :options="['Pemerintah', 'Eksekutif', 'Navigasi', 'Kejuruteraan', 'Komunikasi', 'Elektronik', 'Lain-lain']"
            validation="required"
            />
        </div>

        <div class="grid grid-cols-2 gap-4">
            <!-- Tarikh Mula -->
            <FormKit
            type="date"
            name="joinDate"
            label="Tarikh Mula"
            validation="required"
            />

            <!-- Tarikh Tamat -->
            <FormKit
            type="date"
            name="endDate"
            label="Tarikh Tamat"
            validation="required"
            />
        </div>

        <div class="grid grid-cols-2 gap-4">
            <!-- No. Telefon -->
            <FormKit
            type="tel"
            name="contactNo"
            label="No. Telefon"
            placeholder="Contoh: 012-3456789"
            validation="required"
            />

            <!-- E-mel -->
            <FormKit
            type="email"
            name="email"
            label="E-mel"
            placeholder="Contoh: nama@tldm.mil.my"
            validation="required|email"
            />
        </div>
        </FormKit>
    </template>

    <template #footer>
        <div class="flex justify-end gap-2">
        <rs-button 
            v-if="isViewingCrew" 
            variant="warning" 
            @click="editCrewItem(crewForm)"
        >
            Kemaskini
        </rs-button>
        </div>
    </template>
    </rs-modal>
    
  </div>
</template>
