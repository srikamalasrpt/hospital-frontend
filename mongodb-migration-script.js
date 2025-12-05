// MongoDB Data Migration Script
// This script merges old collections into new ones and cleans up

const { MongoClient } = require('mongodb');

// MongoDB connection string - replace with your actual connection string
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://your-username:your-password@your-cluster.mongodb.net/hospitalDB';

async function migrateData() {
    const client = new MongoClient(MONGODB_URI);
    
    try {
        console.log('🔌 Connecting to MongoDB...');
        await client.connect();
        console.log('✅ Connected to MongoDB');
        
        const db = client.db('hospitalDB');
        
        // Step 1: Migrate opappointments to appointments
        console.log('\n📋 Migrating opappointments to appointments...');
        const opappointments = await db.collection('opappointments').find({}).toArray();
        console.log(`Found ${opappointments.length} records in opappointments`);
        
        if (opappointments.length > 0) {
            // Transform opappointments data to match appointments schema
            const transformedAppointments = opappointments.map(appointment => ({
                token: appointment.token || `OP${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                name: appointment.name,
                phone: appointment.phone,
                age: appointment.age,
                gender: appointment.gender,
                department: appointment.department || 'General',
                appointmentDate: appointment.appointmentDate || appointment.date,
                appointmentTime: appointment.appointmentTime || appointment.time,
                reason: appointment.reason || appointment.complaint,
                paymentStatus: appointment.paymentStatus || 'Pending',
                paymentMethod: appointment.paymentMethod || 'Pay at Hospital',
                status: appointment.status || 'Confirmed',
                amount: appointment.amount || 0,
                createdAt: appointment.createdAt || new Date(),
                updatedAt: new Date(),
                migratedFrom: 'opappointments' // Mark as migrated
            }));
            
            // Insert into appointments collection
            const appointmentResult = await db.collection('appointments').insertMany(transformedAppointments);
            console.log(`✅ Migrated ${appointmentResult.insertedCount} appointments from opappointments`);
        }
        
        // Step 2: Migrate diagnoses to bloodtests
        console.log('\n🧪 Migrating diagnoses to bloodtests...');
        const diagnoses = await db.collection('diagnoses').find({}).toArray();
        console.log(`Found ${diagnoses.length} records in diagnoses`);
        
        if (diagnoses.length > 0) {
            // Transform diagnoses data to match bloodtests schema
            const transformedBloodTests = diagnoses.map(diagnosis => ({
                token: diagnosis.token || `BT${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                name: diagnosis.name,
                gender: diagnosis.gender,
                phone: diagnosis.phone,
                email: diagnosis.email || '',
                age: diagnosis.age,
                tests: diagnosis.tests || diagnosis.testTypes || [],
                createdAt: diagnosis.createdAt || new Date(),
                updatedAt: new Date(),
                migratedFrom: 'diagnoses' // Mark as migrated
            }));
            
            // Insert into bloodtests collection
            const bloodTestResult = await db.collection('bloodtests').insertMany(transformedBloodTests);
            console.log(`✅ Migrated ${bloodTestResult.insertedCount} blood tests from diagnoses`);
        }
        
        // Step 3: Verify migration
        console.log('\n📊 Migration Summary:');
        const finalAppointments = await db.collection('appointments').countDocuments();
        const finalBloodTests = await db.collection('bloodtests').countDocuments();
        
        console.log(`📋 Total appointments: ${finalAppointments}`);
        console.log(`🧪 Total blood tests: ${finalBloodTests}`);
        
        // Step 4: Ask for confirmation before cleanup
        console.log('\n⚠️  Migration completed successfully!');
        console.log('📝 Next steps:');
        console.log('1. Verify data in admin dashboard');
        console.log('2. Test all functionality');
        console.log('3. If everything looks good, delete old collections');
        
        return {
            success: true,
            appointmentsMigrated: opappointments.length,
            bloodTestsMigrated: diagnoses.length,
            totalAppointments: finalAppointments,
            totalBloodTests: finalBloodTests
        };
        
    } catch (error) {
        console.error('❌ Migration failed:', error);
        return { success: false, error: error.message };
    } finally {
        await client.close();
        console.log('🔌 Disconnected from MongoDB');
    }
}

// Function to clean up old collections (run after verification)
async function cleanupOldCollections() {
    const client = new MongoClient(MONGODB_URI);
    
    try {
        console.log('🧹 Cleaning up old collections...');
        await client.connect();
        
        const db = client.db('hospitalDB');
        
        // Drop old collections
        await db.collection('opappointments').drop();
        console.log('✅ Dropped opappointments collection');
        
        await db.collection('diagnoses').drop();
        console.log('✅ Dropped diagnoses collection');
        
        console.log('🎉 Cleanup completed!');
        
    } catch (error) {
        console.error('❌ Cleanup failed:', error);
    } finally {
        await client.close();
    }
}

// Export functions
module.exports = {
    migrateData,
    cleanupOldCollections
};

// Run migration if called directly
if (require.main === module) {
    migrateData()
        .then(result => {
            if (result.success) {
                console.log('\n🎉 Migration completed successfully!');
                console.log('📊 Results:', result);
            } else {
                console.log('\n❌ Migration failed:', result.error);
            }
        })
        .catch(error => {
            console.error('❌ Script error:', error);
        });
}
