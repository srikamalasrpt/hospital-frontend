#!/usr/bin/env node

// Production Build Script
// This script prepares all files for production deployment

const fs = require('fs');
const path = require('path');

console.log('🏭 Building for production...');

// 1. Update backend URLs in all files
function updateBackendUrls(newBackendUrl) {
    const files = [
        'admin-dashboard.html',
        'appoinment.html', 
        'bloodtestbook.html'
    ];
    
    files.forEach(file => {
        if (fs.existsSync(file)) {
            let content = fs.readFileSync(file, 'utf8');
            
            // Update BACKEND_BASE URLs
            content = content.replace(
                /const BACKEND_BASE = '[^']*';/g,
                `const BACKEND_BASE = '${newBackendUrl}';`
            );
            
            // Update fetch URLs
            content = content.replace(
                /https:\/\/hospital-backend-78ur\.onrender\.com/g,
                newBackendUrl
            );
            
            fs.writeFileSync(file, content);
            console.log(`✅ Updated ${file}`);
        }
    });
}

// 2. Update frontend URLs
function updateFrontendUrls(newFrontendUrl) {
    const files = [
        'sitemap.xml',
        'robots.txt'
    ];
    
    files.forEach(file => {
        if (fs.existsSync(file)) {
            let content = fs.readFileSync(file, 'utf8');
            content = content.replace(/https:\/\/srikamalahospital\.store/g, newFrontendUrl);
            fs.writeFileSync(file, content);
            console.log(`✅ Updated ${file}`);
        }
    });
}

// 3. Copy production files
function copyProductionFiles() {
    const files = [
        { src: '.htaccess.production', dest: '.htaccess' },
        { src: 'production-config.js', dest: 'config.js' }
    ];
    
    files.forEach(({ src, dest }) => {
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, dest);
            console.log(`✅ Copied ${src} to ${dest}`);
        }
    });
}

// 4. Create production package.json
function createProductionPackageJson() {
    const packageJson = {
        "name": "sri-kamala-hospital-frontend",
        "version": "1.0.0",
        "description": "Sri Kamala Hospital Frontend",
        "main": "index.html",
        "scripts": {
            "start": "echo 'Static site - no build required'",
            "build": "node build-production.js"
        },
        "keywords": ["hospital", "frontend", "static"],
        "author": "Sri Kamala Hospital",
        "license": "MIT"
    };
    
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
    console.log('✅ Created production package.json');
}

// 5. Validate production files
function validateProduction() {
    const requiredFiles = [
        'index.html',
        'admin-dashboard.html',
        'appoinment.html',
        'bloodtestbook.html',
        'doctors.html',
        'services.html',
        'admin-config.js',
        '.htaccess',
        'robots.txt',
        'sitemap.xml'
    ];
    
    const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));
    
    if (missingFiles.length > 0) {
        console.error('❌ Missing required files:', missingFiles);
        process.exit(1);
    }
    
    console.log('✅ All required files present');
}

// Main execution
function main() {
    const args = process.argv.slice(2);
    const backendUrl = args[0] || 'https://your-backend-url.onrender.com';
    const frontendUrl = args[1] || 'https://your-frontend-url.onrender.com';
    
    console.log(`🔗 Backend URL: ${backendUrl}`);
    console.log(`🔗 Frontend URL: ${frontendUrl}`);
    
    try {
        updateBackendUrls(backendUrl);
        updateFrontendUrls(frontendUrl);
        copyProductionFiles();
        createProductionPackageJson();
        validateProduction();
        
        console.log('🎉 Production build completed successfully!');
        console.log('📦 Ready for deployment to Render');
        
    } catch (error) {
        console.error('❌ Build failed:', error.message);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

module.exports = { updateBackendUrls, updateFrontendUrls, copyProductionFiles, validateProduction };
