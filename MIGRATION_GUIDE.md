# MongoDB Data Migration Guide

## 🎯 **Objective**
Merge data from old collections into new collections and clean up the database.

## 📊 **Current Collections**
- ✅ `appointments` (keep)
- ✅ `bloodtests` (keep)  
- ❌ `opappointments` (migrate to appointments)
- ❌ `diagnoses` (migrate to bloodtests)

## 🚀 **Migration Steps**

### **Step 1: Backup Your Data (Optional but Recommended)**
```javascript
// Export all collections as backup
mongoexport --db=hospitalDB --collection=appointments --out=appointments_backup.json
mongoexport --db=hospitalDB --collection=bloodtests --out=bloodtests_backup.json
mongoexport --db=hospitalDB --collection=opappointments --out=opappointments_backup.json
mongoexport --db=hospitalDB --collection=diagnoses --out=diagnoses_backup.json
```

### **Step 2: Run Migration Script**

#### **Option A: MongoDB Atlas Shell (Recommended)**
1. Go to MongoDB Atlas
2. Click "Browse Collections"
3. Click "Shell" tab
4. Copy and paste the migration script from `mongodb-atlas-migration.js`
5. Press Enter to run

#### **Option B: MongoDB Compass**
1. Open MongoDB Compass
2. Connect to your database
3. Go to "MongoSH" tab
4. Run the migration script

### **Step 3: Verify Migration**
After running the script, check:
1. **Admin Dashboard**: Open your admin dashboard and verify data appears
2. **Collection Counts**: Check that appointments and bloodtests have more records
3. **Data Integrity**: Verify that migrated data looks correct

### **Step 4: Test Functionality**
1. **Appointments Table**: Check if all appointments (old + new) appear
2. **Blood Tests Table**: Check if all blood tests (old + new) appear
3. **Revenue Calculation**: Verify revenue calculations work correctly
4. **Search Function**: Test search functionality
5. **Export Function**: Test data export

### **Step 5: Clean Up Old Collections**
Only after verifying everything works:

```javascript
// Run in MongoDB Atlas Shell
use('hospitalDB');

// Drop old collections
db.opappointments.drop();
db.diagnoses.drop();

// Verify remaining collections
db.listCollectionNames();
```

## 📋 **Migration Script Details**

### **What the Script Does:**

#### **1. Migrates `opappointments` → `appointments`**
- Transforms old appointment data to new schema
- Adds missing fields with default values
- Marks records as migrated for tracking
- Generates new tokens if missing

#### **2. Migrates `diagnoses` → `bloodtests`**
- Transforms old diagnosis data to new schema
- Maps test types to new format
- Adds missing fields with defaults
- Marks records as migrated for tracking

#### **3. Data Transformation**
- **Token Generation**: Creates new tokens if missing
- **Field Mapping**: Maps old fields to new schema
- **Default Values**: Adds missing required fields
- **Timestamps**: Updates creation and modification dates

## ⚠️ **Important Notes**

### **Before Migration:**
1. **Backup Data**: Export all collections as JSON
2. **Test Environment**: Consider testing on a copy first
3. **Verify Schema**: Ensure your backend expects the new format

### **During Migration:**
1. **Monitor Progress**: Watch for any errors
2. **Check Counts**: Verify record counts match expectations
3. **Validate Data**: Spot-check a few migrated records

### **After Migration:**
1. **Test Dashboard**: Verify admin dashboard works
2. **Check Revenue**: Ensure revenue calculations are correct
3. **Test Features**: Try all dashboard features
4. **Clean Up**: Only delete old collections after verification

## 🔧 **Troubleshooting**

### **Common Issues:**

#### **1. Duplicate Tokens**
```javascript
// If you get duplicate token errors, run this to fix:
db.appointments.updateMany(
  { migratedFrom: 'opappointments' },
  { $set: { token: { $concat: ['OP_', { $toString: '$_id' }] } } }
);
```

#### **2. Missing Required Fields**
```javascript
// Add missing required fields:
db.appointments.updateMany(
  { department: { $exists: false } },
  { $set: { department: 'General' } }
);
```

#### **3. Data Type Issues**
```javascript
// Fix data type issues:
db.appointments.updateMany(
  { age: { $type: 'string' } },
  [{ $set: { age: { $toInt: '$age' } } }]
);
```

## ✅ **Success Criteria**

After migration, you should have:
- ✅ All data in `appointments` and `bloodtests` collections
- ✅ Admin dashboard showing all records
- ✅ Revenue calculations working correctly
- ✅ Search and export functions working
- ✅ Old collections removed
- ✅ Only `appointments` and `bloodtests` collections remaining

## 📞 **Support**

If you encounter issues:
1. Check the MongoDB Atlas logs
2. Verify your connection string
3. Ensure you have proper permissions
4. Test with a small subset first

---

**Estimated Time**: 15-30 minutes
**Risk Level**: Medium (data migration)
**Backup Required**: Yes (recommended)
