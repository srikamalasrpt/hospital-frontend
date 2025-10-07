# MongoDB Collection Cleanup Guide

## 🗑️ **Issue Identified**
Your MongoDB database contains both old and new collections:
- **Old Collections**: `opappointments`, `diagnoses` (should be deleted)
- **New Collections**: `appointments`, `bloodtests` (should be kept)

## 🎯 **Solution Steps**

### **Step 1: Verify Current Collections**
Check what collections exist in your MongoDB Atlas database:

1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Navigate to your cluster
3. Click "Browse Collections"
4. You should see: `appointments`, `bloodtests`, `opappointments`, `diagnoses`

### **Step 2: Delete Old Collections**
**⚠️ IMPORTANT: Only delete the old collections listed below!**

#### **Collections to DELETE:**
- `opappointments` ❌
- `diagnoses` ❌

#### **Collections to KEEP:**
- `appointments` ✅
- `bloodtests` ✅

### **Step 3: Delete Collections in MongoDB Atlas**

1. **For `opappointments` collection:**
   - Click on the `opappointments` collection
   - Click the "Delete Collection" button
   - Confirm deletion

2. **For `diagnoses` collection:**
   - Click on the `diagnoses` collection
   - Click the "Delete Collection" button
   - Confirm deletion

### **Step 4: Verify Backend Configuration**

The backend server is correctly configured to use:
- `appointments` collection (for appointments)
- `bloodtests` collection (for blood tests)

**Backend API Endpoints:**
- `GET /api/mongodb/appointments` → queries `appointments` collection
- `GET /api/mongodb/diagnosis` → queries `bloodtests` collection

### **Step 5: Test the Cleanup**

After deleting the old collections:

1. **Check Collections List:**
   - Should only show: `appointments`, `bloodtests`

2. **Test Admin Dashboard:**
   - Open admin dashboard
   - Verify data loads correctly
   - Check that only current data appears

## 🔧 **Alternative: Programmatic Cleanup**

If you prefer to clean up programmatically, you can use this MongoDB script:

```javascript
// Connect to your MongoDB database
use('sri-kamala-hospital');

// Delete old collections
db.opappointments.drop();
db.diagnoses.drop();

// Verify remaining collections
show collections;
```

## ✅ **Expected Result**

After cleanup, you should have:
- ✅ `appointments` collection (current appointment data)
- ✅ `bloodtests` collection (current blood test data)
- ❌ `opappointments` collection (deleted)
- ❌ `diagnoses` collection (deleted)

## 🚨 **Important Notes**

1. **Backup First**: If you have important data in old collections, export it first
2. **Verify Data**: Ensure your current data is in the correct collections
3. **Test Thoroughly**: After cleanup, test all dashboard functionality
4. **Monitor**: Watch for any errors in the admin dashboard

## 📞 **Support**

If you encounter any issues during cleanup:
1. Check the browser console for errors
2. Verify MongoDB Atlas connection
3. Test the backend API endpoints directly
4. Contact support if needed

---

**Status**: Ready for cleanup
**Risk Level**: Low (only deleting old collections)
**Estimated Time**: 5-10 minutes
