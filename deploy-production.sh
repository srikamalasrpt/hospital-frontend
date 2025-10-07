#!/bin/bash

# Production Deployment Script
# This script automates the production deployment process

set -e  # Exit on any error

echo "🚀 Starting production deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed"
        exit 1
    fi
    
    if ! command -v git &> /dev/null; then
        print_error "Git is not installed"
        exit 1
    fi
    
    print_status "All dependencies are available"
}

# Validate environment variables
validate_env() {
    print_status "Validating environment..."
    
    if [ -z "$BACKEND_URL" ]; then
        print_error "BACKEND_URL environment variable is required"
        print_warning "Set it with: export BACKEND_URL=https://your-backend.onrender.com"
        exit 1
    fi
    
    if [ -z "$FRONTEND_URL" ]; then
        print_error "FRONTEND_URL environment variable is required"
        print_warning "Set it with: export FRONTEND_URL=https://your-frontend.onrender.com"
        exit 1
    fi
    
    print_status "Environment variables validated"
}

# Build production files
build_production() {
    print_status "Building production files..."
    
    # Run the build script
    node build-production.js "$BACKEND_URL" "$FRONTEND_URL"
    
    print_status "Production build completed"
}

# Test backend connection
test_backend() {
    print_status "Testing backend connection..."
    
    if node test-backend.js; then
        print_status "Backend connection successful"
    else
        print_warning "Backend connection failed - check your backend URL"
    fi
}

# Create deployment package
create_deployment_package() {
    print_status "Creating deployment package..."
    
    # Create a deployment directory
    mkdir -p deployment
    
    # Copy all necessary files
    cp *.html deployment/
    cp *.js deployment/
    cp *.css deployment/
    cp *.json deployment/
    cp *.txt deployment/
    cp *.xml deployment/
    cp .htaccess deployment/
    
    # Create a deployment info file
    cat > deployment/DEPLOYMENT_INFO.txt << EOF
Deployment Information
=====================
Backend URL: $BACKEND_URL
Frontend URL: $FRONTEND_URL
Deployment Date: $(date)
Node Version: $(node --version)
Git Commit: $(git rev-parse HEAD 2>/dev/null || echo "Not a git repository")
EOF
    
    print_status "Deployment package created in 'deployment/' directory"
}

# Main deployment function
main() {
    echo "🏥 Sri Kamala Hospital - Production Deployment"
    echo "=============================================="
    
    check_dependencies
    validate_env
    build_production
    test_backend
    create_deployment_package
    
    echo ""
    print_status "Production deployment completed successfully!"
    echo ""
    echo "📦 Next steps:"
    echo "1. Upload the 'deployment/' folder to your hosting provider"
    echo "2. Configure your domain to point to the deployment"
    echo "3. Test all functionality"
    echo "4. Monitor logs and performance"
    echo ""
    echo "🔗 Backend URL: $BACKEND_URL"
    echo "🔗 Frontend URL: $FRONTEND_URL"
    echo ""
    print_status "Ready for production! 🎉"
}

# Run main function
main "$@"
