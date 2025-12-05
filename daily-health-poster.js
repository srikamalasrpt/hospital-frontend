/**
 * Daily Health Awareness Poster Generator
 * Creates professional health awareness posters like the Dengue and Diabetes examples
 */

class DailyHealthPoster {
    constructor() {
        this.healthTopics = {
            // January Health Topics
            '01-01': {
                title: '🎉 నూతన సంవత్సర ఆరోగ్య లక్ష్యాలు',
                mainTitle: 'నూతన సంవత్సర ఆరోగ్య లక్ష్యాలు',
                description: 'మీ సంవత్సరాన్ని మంచి ఆరోగ్య అలవాట్లతో ప్రారంభించండి!',
                symptoms: ['కొద్దిపాటి శక్తి', 'చెడు నిద్ర', 'అసంతులిత ఆహారం'],
                prevention: ['క్రమమైన వ్యాయామం', 'సమతుల్య ఆహారం', 'తగిన నిద్ర'],
                icon: '🎊',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'సాధారణ ఆరోగ్యం'
            },
            '01-04': {
                title: '👁️ దృష్టి ఆరోగ్య దినం',
                mainTitle: 'దృష్టి సమస్యల గురించి తెలుసుకోండి',
                description: 'మీ కళ్ళ ఆరోగ్యాన్ని కాపాడుకోండి',
                symptoms: ['కళ్ళు మసక', 'చదవడంలో ఇబ్బంది', 'రాత్రి చూడలేకపోవడం'],
                prevention: ['క్రమమైన కంటి పరీక్ష', 'తగిన వెలుతురు', 'కంప్యూటర్ ఉపయోగంలో విరామం'],
                icon: '👁️',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop',
                color: '#00b894',
                bgColor: '#e8f5e8',
                category: 'దృష్టి ఆరోగ్యం'
            },
            '01-15': {
                title: '🦟 డెంగ్యూ నివారణ',
                mainTitle: 'డెంగ్యూ జాగ్రత్తలు పాటిస్తున్నారా?',
                description: 'మచ్చర వ్యాధుల నుండి మిమ్మల్ని రక్షించుకోండి',
                symptoms: ['జ్వరం', 'తలనొప్పి', 'వాంతులు', 'దద్దుర్లు', 'కళ్ళు ఎర్రగా'],
                prevention: ['మచ్చర వలలు వాడండి', 'నిలిచిన నీటిని తొలగించండి', 'పూర్తి బట్టలు ధరించండి'],
                icon: '🦟',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'మచ్చర వ్యాధులు'
            },
            '01-20': {
                title: '🩸 మధుమేహ వ్యాధి',
                mainTitle: 'మధుమేహ వ్యాధి సమస్యలు',
                description: 'మధుమేహ వ్యాధి సంక్లిష్టతలను అర్థం చేసుకోండి',
                symptoms: ['హృదయ సమస్యలు', 'కిడ్నీ వ్యాధులు', 'నరాల సమస్యలు', 'కంటి సమస్యలు'],
                prevention: ['క్రమమైన చక్కర పరీక్ష', 'సమతుల్య ఆహారం', 'క్రమమైన వ్యాయామం'],
                icon: '🩸',
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop',
                color: '#00b894',
                bgColor: '#e8f5e8',
                category: 'మధుమేహ వ్యాధి'
            },
            '01-25': {
                title: '❤️ హృదయ ఆరోగ్యం',
                mainTitle: 'హృదయ ఆరోగ్యం ముఖ్యం',
                description: 'మీ హృదయాన్ని ఆరోగ్యంగా, బలంగా ఉంచుకోండి',
                symptoms: ['ఛాతీ నొప్పి', 'ఊపిరి తీసుకోవడంలో ఇబ్బంది', 'అసాధారణ హృదయ స్పందన'],
                prevention: ['క్రమమైన వ్యాయామం', 'ఆరోగ్యకర ఆహారం', 'పొగాకు వాడకం మానుకోండి'],
                icon: '❤️',
                image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'హృదయ ఆరోగ్యం'
            },
            '01-30': {
                title: '🤝 కుష్ఠ వ్యాధి దినం',
                mainTitle: 'కుష్ఠ వ్యాధి గురించి తెలుసుకోండి',
                description: 'కళంకం ముగించడం, గౌరవాన్ని ప్రోత్సహించడం',
                symptoms: ['చర్మ వ్రణాలు', 'ఊపిరి తీసుకోవడంలో ఇబ్బంది', 'కండరాల బలహీనత'],
                prevention: ['ముందస్తు గుర్తింపు', 'సరైన పరిశుభ్రత', 'క్రమమైన పరీక్ష'],
                icon: '🤝',
                image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=200&fit=crop',
                color: '#ff9800',
                bgColor: '#fff3e0',
                category: 'కుష్ఠ వ్యాధి'
            },

            // February Health Topics
            '02-04': {
                title: '🎗️ World Cancer Day',
                mainTitle: 'క్యాన్సర్ గురించి తెలుసుకోండి',
                description: 'Early detection saves lives',
                symptoms: ['Unexplained Weight Loss', 'Persistent Fatigue', 'Lumps or Swelling', 'Changes in Skin'],
                prevention: ['Regular Screening', 'Healthy Lifestyle', 'Avoid Tobacco', 'Sun Protection'],
                icon: '🎗️',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'Oncology'
            },
            '02-14': {
                title: '❤️ Valentine\'s Day Heart Health',
                mainTitle: 'మీ హృదయాన్ని ప్రేమించండి',
                description: 'Love your heart with proper care',
                symptoms: ['Chest Discomfort', 'Breathing Problems', 'Dizziness', 'Swelling'],
                prevention: ['Cardio Exercise', 'Heart-Healthy Diet', 'Regular Checkups', 'Manage Stress'],
                icon: '💝',
                color: '#e91e63',
                bgColor: '#fce4ec',
                category: 'Cardiovascular'
            },
            '02-28': {
                title: '🔬 Rare Disease Day',
                mainTitle: 'అరుదైన వ్యాధుల గురించి తెలుసుకోండి',
                description: 'Supporting patients with rare diseases',
                symptoms: ['Unusual Symptoms', 'Delayed Diagnosis', 'Multiple System Involvement'],
                prevention: ['Genetic Counseling', 'Early Screening', 'Specialist Consultation', 'Support Groups'],
                icon: '🧬',
                color: '#9c27b0',
                bgColor: '#f3e5f5',
                category: 'Rare Diseases'
            },

            // March Health Topics
            '03-08': {
                title: '👩 International Women\'s Day',
                mainTitle: 'మహిళల ఆరోగ్యం ముఖ్యం',
                description: 'Celebrating women\'s health and wellness',
                symptoms: ['Hormonal Changes', 'Reproductive Health Issues', 'Bone Density Loss'],
                prevention: ['Regular Gynecological Checkups', 'Calcium Intake', 'Exercise', 'Mental Health Care'],
                icon: '👩‍⚕️',
                color: '#e91e63',
                bgColor: '#fce4ec',
                category: 'Women\'s Health'
            },
            '03-15': {
                title: '🦷 Oral Health Awareness',
                mainTitle: 'ముఖ్యమైన దంత ఆరోగ్యం',
                description: 'Maintain healthy teeth and gums',
                symptoms: ['Tooth Pain', 'Bleeding Gums', 'Bad Breath', 'Tooth Sensitivity'],
                prevention: ['Regular Brushing', 'Flossing', 'Dental Checkups', 'Healthy Diet'],
                icon: '🦷',
                color: '#00bcd4',
                bgColor: '#e0f7fa',
                category: 'Dental Health'
            },
            '03-20': {
                title: '🧠 Mental Health Awareness',
                mainTitle: 'మానసిక ఆరోగ్యం ముఖ్యం',
                description: 'Taking care of your mental wellbeing',
                symptoms: ['Persistent Sadness', 'Anxiety', 'Sleep Problems', 'Concentration Issues'],
                prevention: ['Regular Exercise', 'Social Connections', 'Stress Management', 'Professional Help'],
                icon: '🧠',
                color: '#673ab7',
                bgColor: '#f3e5f5',
                category: 'Mental Health'
            },
            '03-24': {
                title: '🫁 World TB Day',
                mainTitle: 'క్షయ వ్యాధి గురించి తెలుసుకోండి',
                description: 'Ending TB through awareness and treatment',
                symptoms: ['Persistent Cough', 'Fever', 'Weight Loss', 'Night Sweats'],
                prevention: ['BCG Vaccination', 'Good Ventilation', 'Healthy Diet', 'Early Treatment'],
                icon: '🫁',
                color: '#ff5722',
                bgColor: '#fbe9e7',
                category: 'Infectious Disease'
            },

            // April Health Topics
            '04-07': {
                title: '🌍 World Health Day',
                mainTitle: 'ప్రపంచ ఆరోగ్య దినం',
                description: 'Health for all - comprehensive healthcare',
                symptoms: ['General Weakness', 'Frequent Illness', 'Poor Immunity'],
                prevention: ['Regular Health Checkups', 'Vaccination', 'Healthy Lifestyle', 'Preventive Care'],
                icon: '🌍',
                color: '#4caf50',
                bgColor: '#e8f5e8',
                category: 'General Health'
            },
            '04-11': {
                title: '🧬 Parkinson\'s Disease Awareness',
                mainTitle: 'పార్కిన్సన్ వ్యాధి గురించి తెలుసుకోండి',
                description: 'Understanding neurological conditions',
                symptoms: ['Tremors', 'Stiffness', 'Balance Problems', 'Slow Movement'],
                prevention: ['Regular Exercise', 'Healthy Diet', 'Mental Stimulation', 'Early Detection'],
                icon: '🧬',
                color: '#9c27b0',
                bgColor: '#f3e5f5',
                category: 'Neurological'
            },
            '04-25': {
                title: '🦠 Malaria Awareness',
                mainTitle: 'మలేరియా నివారణ',
                description: 'Protect yourself from malaria',
                symptoms: ['జ్వరం (Fever)', 'కంపుతో (Chills)', 'వాంతులు (Vomiting)', 'తలనొప్పి (Headache)'],
                prevention: ['Use Mosquito Nets', 'Insect Repellents', 'Remove Stagnant Water', 'Wear Protective Clothing'],
                icon: '🦟',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'Vector Borne'
            },

            // May Health Topics
            '05-05': {
                title: '✋ Hand Hygiene Day',
                mainTitle: 'చేతుల శుభ్రత ముఖ్యం',
                description: 'Clean hands save lives',
                symptoms: ['Germ Transmission', 'Infections', 'Food Poisoning'],
                prevention: ['Regular Hand Washing', 'Use Sanitizer', 'Clean Surfaces', 'Avoid Touching Face'],
                icon: '✋',
                color: '#00bcd4',
                bgColor: '#e0f7fa',
                category: 'Hygiene'
            },
            '05-12': {
                title: '👩‍⚕️ International Nurses Day',
                mainTitle: 'నర్సులు మా ఆరోగ్య రక్షకులు',
                description: 'Celebrating healthcare heroes',
                symptoms: ['Healthcare Gaps', 'Patient Care Issues'],
                prevention: ['Support Healthcare Workers', 'Follow Medical Advice', 'Appreciate Nurses', 'Healthcare Advocacy'],
                icon: '👩‍⚕️',
                color: '#e91e63',
                bgColor: '#fce4ec',
                category: 'Healthcare Workers'
            },
            '05-17': {
                title: '🌍 World Hypertension Day',
                mainTitle: 'అధిక రక్తపోటు నియంత్రణ',
                description: 'Control your blood pressure',
                symptoms: ['Headaches', 'Dizziness', 'Chest Pain', 'Shortness of Breath'],
                prevention: ['Regular BP Check', 'Low Salt Diet', 'Exercise', 'Stress Management'],
                icon: '🩸',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'Cardiovascular'
            },
            '05-31': {
                title: '🚭 World No Tobacco Day',
                mainTitle: 'పొగాకు వాడకం మానుకోండి',
                description: 'Quit tobacco for better health',
                symptoms: ['Lung Problems', 'Heart Disease', 'Cancer Risk', 'Breathing Issues'],
                prevention: ['Quit Smoking', 'Avoid Secondhand Smoke', 'Nicotine Replacement', 'Support Groups'],
                icon: '🚭',
                color: '#ff5722',
                bgColor: '#fbe9e7',
                category: 'Lifestyle'
            },

            // June Health Topics
            '06-14': {
                title: '🩸 World Blood Donor Day',
                mainTitle: 'రక్త దానం జీవిత రక్షకం',
                description: 'Donate blood, save lives',
                symptoms: ['Blood Shortage', 'Emergency Needs'],
                prevention: ['Regular Blood Donation', 'Maintain Good Health', 'Eat Iron-Rich Foods', 'Stay Hydrated'],
                icon: '🩸',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'Blood Donation'
            },
            '06-21': {
                title: '🧠 International Yoga Day',
                mainTitle: 'యోగా ఆరోగ్యానికి ముఖ్యం',
                description: 'Yoga for physical and mental health',
                symptoms: ['Stress', 'Poor Flexibility', 'Mental Tension'],
                prevention: ['Regular Yoga Practice', 'Breathing Exercises', 'Meditation', 'Physical Activity'],
                icon: '🧘',
                color: '#4caf50',
                bgColor: '#e8f5e8',
                category: 'Wellness'
            },

            // July Health Topics
            '07-11': {
                title: '🌍 World Population Day',
                mainTitle: 'జనాభా ఆరోగ్యం',
                description: 'Healthy population, healthy future',
                symptoms: ['Population Health Issues', 'Resource Strain'],
                prevention: ['Family Planning', 'Maternal Health', 'Child Health', 'Community Health'],
                icon: '👨‍👩‍👧‍👦',
                color: '#2196f3',
                bgColor: '#e3f2fd',
                category: 'Public Health'
            },
            '07-28': {
                title: '🦠 World Hepatitis Day',
                mainTitle: 'హెపటైటిస్ గురించి తెలుసుకోండి',
                description: 'Prevent hepatitis, protect your liver',
                symptoms: ['Jaundice', 'Fatigue', 'Abdominal Pain', 'Dark Urine'],
                prevention: ['Vaccination', 'Safe Injection Practices', 'Hygiene', 'Regular Testing'],
                icon: '🦠',
                color: '#ff9800',
                bgColor: '#fff3e0',
                category: 'Infectious Disease'
            },

            // August Health Topics
            '08-01': {
                title: '🤱 World Breastfeeding Week',
                mainTitle: 'మాతృదుగ్ధం శిశువులకు ఉత్తమం',
                description: 'Breastfeeding for healthy babies',
                symptoms: ['Infant Health Issues', 'Nutritional Deficiencies'],
                prevention: ['Exclusive Breastfeeding', 'Proper Nutrition', 'Regular Checkups', 'Support Systems'],
                icon: '🤱',
                color: '#e91e63',
                bgColor: '#fce4ec',
                category: 'Maternal & Child Health'
            },
            '08-12': {
                title: '👦 International Youth Day',
                mainTitle: 'యువత ఆరోగ్యం ముఖ్యం',
                description: 'Healthy youth, healthy future',
                symptoms: ['Mental Health Issues', 'Substance Abuse', 'Poor Lifestyle'],
                prevention: ['Healthy Habits', 'Mental Health Support', 'Education', 'Positive Activities'],
                icon: '👦',
                color: '#4caf50',
                bgColor: '#e8f5e8',
                category: 'Youth Health'
            },

            // September Health Topics
            '09-10': {
                title: '🧠 World Suicide Prevention Day',
                mainTitle: 'ఆత్మహత్య నివారణ',
                description: 'Mental health matters, seek help',
                symptoms: ['Depression', 'Hopelessness', 'Social Isolation', 'Substance Abuse'],
                prevention: ['Mental Health Support', 'Open Communication', 'Professional Help', 'Community Support'],
                icon: '🤝',
                color: '#ff5722',
                bgColor: '#fbe9e7',
                category: 'Mental Health'
            },
            '09-21': {
                title: '🧠 World Alzheimer\'s Day',
                mainTitle: 'అల్జైమర్ వ్యాధి గురించి తెలుసుకోండి',
                description: 'Understanding dementia and memory care',
                symptoms: ['Memory Loss', 'Confusion', 'Mood Changes', 'Difficulty Communicating'],
                prevention: ['Mental Stimulation', 'Physical Exercise', 'Healthy Diet', 'Social Engagement'],
                icon: '🧠',
                color: '#673ab7',
                bgColor: '#f3e5f5',
                category: 'Neurological'
            },
            '09-28': {
                title: '🦷 World Rabies Day',
                mainTitle: 'రేబీస్ వ్యాధి నివారణ',
                description: 'Prevent rabies, protect yourself',
                symptoms: ['Fever', 'Headache', 'Anxiety', 'Hydrophobia'],
                prevention: ['Vaccinate Pets', 'Avoid Stray Animals', 'Immediate Treatment', 'Public Awareness'],
                icon: '🐕',
                color: '#ff9800',
                bgColor: '#fff3e0',
                category: 'Infectious Disease'
            },

            // October Health Topics
            '10-01': {
                title: '👴 International Day of Older Persons',
                mainTitle: 'ముసలివారి ఆరోగ్యం',
                description: 'Healthy aging for better quality of life',
                symptoms: ['Chronic Diseases', 'Mobility Issues', 'Cognitive Decline'],
                prevention: ['Regular Health Checkups', 'Physical Activity', 'Mental Stimulation', 'Social Engagement'],
                icon: '👴',
                color: '#ff9800',
                bgColor: '#fff3e0',
                category: 'Geriatric Health'
            },
            '10-10': {
                title: '🧠 World Mental Health Day',
                mainTitle: 'మానసిక ఆరోగ్య దినం',
                description: 'Mental health is health',
                symptoms: ['Anxiety', 'Depression', 'Stress', 'Sleep Problems'],
                prevention: ['Professional Help', 'Self-Care', 'Social Support', 'Healthy Lifestyle'],
                icon: '🧠',
                color: '#673ab7',
                bgColor: '#f3e5f5',
                category: 'Mental Health'
            },
            '10-16': {
                title: '🍎 World Food Day',
                mainTitle: 'పోషకాహారం ఆరోగ్యానికి ముఖ్యం',
                description: 'Nutrition for healthy living',
                symptoms: ['Malnutrition', 'Obesity', 'Deficiency Diseases'],
                prevention: ['Balanced Diet', 'Regular Meals', 'Hydration', 'Nutritional Education'],
                icon: '🍎',
                color: '#4caf50',
                bgColor: '#e8f5e8',
                category: 'Nutrition'
            },
            '10-29': {
                title: '🦠 World Stroke Day',
                mainTitle: 'స్ట్రోక్ గురించి తెలుసుకోండి',
                description: 'Prevent stroke, save lives',
                symptoms: ['Sudden Weakness', 'Speech Problems', 'Vision Loss', 'Severe Headache'],
                prevention: ['Control Blood Pressure', 'Healthy Diet', 'Regular Exercise', 'No Smoking'],
                icon: '🧠',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'Neurological'
            },

            // November Health Topics
            '11-14': {
                title: '🩸 World Diabetes Day',
                mainTitle: 'మధుమేహ వ్యాధి గురించి తెలుసుకోండి',
                description: 'Prevent diabetes, live healthy',
                symptoms: ['Excessive Thirst', 'Frequent Urination', 'Weight Loss', 'Fatigue'],
                prevention: ['Healthy Diet', 'Regular Exercise', 'Weight Management', 'Regular Screening'],
                icon: '🩸',
                color: '#e53935',
                bgColor: '#ffeaea',
                category: 'Chronic Disease'
            },
            '11-17': {
                title: '🫁 World COPD Day',
                mainTitle: 'COPD గురించి తెలుసుకోండి',
                description: 'Breathe easy, live better',
                symptoms: ['Shortness of Breath', 'Chronic Cough', 'Chest Tightness', 'Wheezing'],
                prevention: ['Quit Smoking', 'Avoid Pollutants', 'Regular Exercise', 'Vaccination'],
                icon: '🫁',
                color: '#00bcd4',
                bgColor: '#e0f7fa',
                category: 'Respiratory'
            },

            // December Health Topics
            '12-01': {
                title: '🦠 World AIDS Day',
                mainTitle: 'HIV/AIDS గురించి తెలుసుకోండి',
                description: 'End AIDS, protect yourself',
                symptoms: ['Fever', 'Fatigue', 'Weight Loss', 'Recurrent Infections'],
                prevention: ['Safe Practices', 'Regular Testing', 'Education', 'Support'],
                icon: '🦠',
                color: '#e91e63',
                bgColor: '#fce4ec',
                category: 'Infectious Disease'
            },
            '12-03': {
                title: '♿ International Day of Persons with Disabilities',
                mainTitle: 'వికలాంగుల ఆరోగ్యం',
                description: 'Inclusive healthcare for all',
                symptoms: ['Accessibility Issues', 'Healthcare Barriers'],
                prevention: ['Inclusive Healthcare', 'Accessibility', 'Support Services', 'Community Integration'],
                icon: '♿',
                color: '#9c27b0',
                bgColor: '#f3e5f5',
                category: 'Disability Health'
            },
            '12-10': {
                title: '🧠 Human Rights Day',
                mainTitle: 'ఆరోగ్య హక్కులు ముఖ్యం',
                description: 'Health is a human right',
                symptoms: ['Healthcare Inequality', 'Access Issues'],
                prevention: ['Equal Access', 'Health Education', 'Community Health', 'Advocacy'],
                icon: '🤝',
                color: '#4caf50',
                bgColor: '#e8f5e8',
                category: 'Health Rights'
            }
        };

        this.defaultTopic = {
            title: '🏥 రోజువారీ ఆరోగ్య దృష్టి',
            mainTitle: 'ప్రతిరోజు ఆరోగ్యం ముఖ్యం',
            description: 'మీ ఆరోగ్యంపై దృష్టి పెట్టడానికి ప్రతిరోజూ మంచి రోజు!',
            symptoms: ['సాధారణ బలహీనత', 'చెడు రోగనిరోధక శక్తి', 'జీవనశైలి సమస్యలు'],
            prevention: ['క్రమమైన పరీక్షలు', 'ఆరోగ్యకర ఆహారం', 'వ్యాయామం', 'ముందస్తు సంరక్షణ'],
            icon: '🏥',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop',
            color: '#007bff',
            bgColor: '#e7f3ff',
            category: 'సాధారణ ఆరోగ్యం'
        };
    }

    getTodayTopic(date = new Date()) {
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const todayString = `${month}-${day}`;

        return this.healthTopics[todayString] || this.defaultTopic;
    }

    getAdminImages() {
        try {
            const storedImages = localStorage.getItem('adminPosterImages');
            const storedDate = localStorage.getItem('adminImagesDate');
            const today = new Date().toDateString();
            
            // Check if images are from a different day
            if (storedDate && storedDate !== today) {
                // Clear old images from previous day
                localStorage.removeItem('adminPosterImages');
                localStorage.removeItem('adminImagesDate');
                console.log('🗑️ Admin images cleared - new day started');
                return [];
            }
            
            return storedImages ? JSON.parse(storedImages) : [];
        } catch (error) {
            console.log('No admin images found or error loading:', error);
            return [];
        }
    }

    saveAdminImages(images) {
        try {
            const today = new Date().toDateString();
            localStorage.setItem('adminPosterImages', JSON.stringify(images));
            localStorage.setItem('adminImagesDate', today);
            console.log('💾 Admin images saved for today:', today);
        } catch (error) {
            console.log('Error saving admin images:', error);
        }
    }

    generatePosterHTML(topic) {
        const currentDate = new Date();
        const dateString = currentDate.toLocaleDateString('te-IN', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });

        // Check for admin uploaded images
        const adminImages = this.getAdminImages();
        const posterImage = adminImages.length > 0 ? adminImages[0].data : topic.image;
        const imageSource = adminImages.length > 0 ? 'admin' : 'default';

        // If admin image exists, show only the image without additional content
        if (imageSource === 'admin') {
            return `
                <div class="health-poster animated-poster" style="background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);">
                    <!-- Simple Header for Admin Images -->
                    <div class="poster-header animated-header" style="background: linear-gradient(90deg, #2c3e50 0%, #34495e 100%);">
                        <div class="profile-section">
                            <div class="profile-pic animated-profile">👩‍⚕️</div>
                            <div class="profile-info">
                                <div class="profile-name">శ్రీ కమల హాస్పిటల్</div>
                                <div class="post-time">${dateString}</div>
                            </div>
                        </div>
                        <div class="media-controls">
                            <span class="play-icon animated-icon">▶️</span>
                            <span class="volume-icon animated-icon">🔊</span>
                            <span class="more-icon animated-icon">⋯</span>
                        </div>
                    </div>

                    <!-- Admin Image Only -->
                    <div class="poster-content" style="padding: 0;">
                        <div class="admin-image-container" style="text-align: center; padding: 20px;">
                            <img src="${posterImage}" alt="Admin Uploaded Image" class="admin-uploaded-image" style="max-width: 100%; height: auto; border-radius: 10px; box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);" />
                            <div style="margin-top: 15px; color: #6c757d; font-size: 0.9em;">
                                📷 అడ్మిన్ ద్వారా అప్‌లోడ్ చేయబడిన చిత్రం
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="health-poster animated-poster" style="background: linear-gradient(135deg, ${topic.bgColor} 0%, #ffffff 100%);">
                <!-- Social Media Header -->
                <div class="poster-header animated-header" style="background: linear-gradient(90deg, #2c3e50 0%, #34495e 100%);">
                    <div class="profile-section">
                        <div class="profile-pic animated-profile">👩‍⚕️</div>
                        <div class="profile-info">
                            <div class="profile-name">శ్రీ కమల హాస్పిటల్</div>
                            <div class="post-time">${dateString}</div>
                        </div>
                    </div>
                    <div class="media-controls">
                        <span class="play-icon animated-icon">▶️</span>
                        <span class="volume-icon animated-icon">🔊</span>
                        <span class="more-icon animated-icon">⋯</span>
                    </div>
                </div>

                <!-- Main Content -->
                <div class="poster-content">
                    <div class="main-banner animated-banner" style="background: ${topic.color};">
                        <h2 class="main-title animated-title">${topic.mainTitle}</h2>
                        <p class="main-description animated-description">${topic.description}</p>
                    </div>

                    <!-- Health Image -->
                    <div class="health-image-container">
                        <img src="${posterImage}" alt="${topic.mainTitle}" class="health-image animated-image" />
                        <div class="image-overlay">
                            <div class="floating-icons">
                                <span class="floating-icon">${topic.icon}</span>
                                <span class="floating-icon">🏥</span>
                                <span class="floating-icon">💊</span>
                                ${imageSource === 'admin' ? '<span class="floating-icon">📷</span>' : ''}
                            </div>
                        </div>
                    </div>

                    <div class="content-body">
                        <div class="symptoms-section">
                            <h3 class="section-title animated-section-title">లక్షణాలు ఏమిటి?</h3>
                            <div class="symptoms-list">
                                ${topic.symptoms.map((symptom, index) => `
                                    <div class="symptom-item animated-item" style="animation-delay: ${index * 0.1}s;">
                                        <span class="symptom-icon animated-symptom-icon">${this.getSymptomIcon(symptom)}</span>
                                        <span class="symptom-text">${symptom}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="prevention-section">
                            <h3 class="section-title animated-section-title">నివారణ చర్యలు</h3>
                            <div class="prevention-list">
                                ${topic.prevention.map((prevention, index) => `
                                    <div class="prevention-item animated-item" style="animation-delay: ${(index + topic.symptoms.length) * 0.1}s;">
                                        <span class="prevention-icon animated-prevention-icon">✅</span>
                                        <span class="prevention-text">${prevention}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="call-to-action animated-cta">
                            <p class="cta-text">తక్షణమే మా వైద్య నిపుణులను సంప్రదించి సరైన చికిత్స పొందండి</p>
                        </div>
                    </div>
                </div>

                <!-- Doctor Information -->
                <div class="doctor-info animated-doctor" style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);">
                    <div class="doctor-details">
                        <h4 class="doctor-name">డా॥డి.కిరణ్</h4>
                        <p class="doctor-qualification">MBBS. MD. GENERAL MEDICINE</p>
                        <p class="doctor-specialization">జనరల్ మెడిసిన్ & షుగర్ వ్యాధి నిపుణులు</p>
                    </div>
                </div>

                <!-- Hospital Information -->
                <div class="hospital-info animated-hospital" style="background: ${topic.color};">
                    <div class="hospital-logo">
                        <div class="logo-circle animated-logo">🏥</div>
                        <div class="logo-text">కమల</div>
                    </div>
                    <div class="hospital-details">
                        <h3 class="hospital-name">శ్రీ కమల హాస్పిటల్</h3>
                        <p class="hospital-contact">📞: 9948076665, 9959266737</p>
                        <p class="hospital-address">యం.జి.రోడ్, సూర్యాపేట</p>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="poster-actions animated-actions">
                    <button class="action-btn book-appointment animated-btn" onclick="window.open('appoinment.html', '_blank')">
                        📅 అపాయింట్‌మెంట్ బుక్ చేయండి
                    </button>
                    <button class="action-btn book-bloodtest animated-btn" onclick="window.open('bloodtestbook.html', '_blank')">
                        🩸 రక్త పరీక్ష బుక్ చేయండి
                    </button>
                </div>
            </div>
        `;
    }

    getSymptomIcon(symptom) {
        const iconMap = {
            'Fever': '🌡️',
            'Headache': '🤕',
            'Vomiting': '🤮',
            'Rashes': '🔴',
            'Red Eyes': '👁️',
            'జ్వరం': '🌡️',
            'తలనొప్పి': '🤕',
            'వాంతులు': '🤮',
            'దద్దుర్లు': '🔴',
            'కళ్ళు ఎర్రగా': '👁️',
            'Chest Pain': '💔',
            'Shortness of Breath': '😮‍💨',
            'Fatigue': '😴',
            'Weight Loss': '⚖️',
            'default': '⚠️'
        };
        return iconMap[symptom] || iconMap.default;
    }


    showPosterPopup() {
        const topic = this.getTodayTopic();
        const posterHTML = this.generatePosterHTML(topic);
        
        // Create popup overlay
        const popupOverlay = document.createElement('div');
        popupOverlay.className = 'poster-popup-overlay';
        popupOverlay.innerHTML = `
            <div class="poster-popup-container card-poster">
                <div class="poster-popup-header">
                    <h3>ఈరోజు ఆరోగ్య అవగాహన</h3>
                        <div class="header-controls">
                            <div class="countdown-timer" id="countdownTimer">10</div>
                            <button class="close-poster-btn" onclick="this.closest('.poster-popup-overlay').remove()">✕</button>
                        </div>
                </div>
                <div class="poster-popup-content">
                    ${posterHTML}
                </div>
            </div>
        `;

        document.body.appendChild(popupOverlay);
        
            // Countdown timer
            let countdown = 10;
            const countdownElement = popupOverlay.querySelector('#countdownTimer');
            const countdownInterval = setInterval(() => {
                countdown--;
                if (countdownElement) {
                    countdownElement.textContent = countdown;
                    if (countdown <= 0) {
                        clearInterval(countdownInterval);
                    }
                }
            }, 1000);
        
            // Auto-close after 10 seconds with fade out animation
            setTimeout(() => {
                if (popupOverlay.parentNode) {
                    popupOverlay.classList.add('vanishing');
                    setTimeout(() => {
                        if (popupOverlay.parentNode) {
                            popupOverlay.remove();
                        }
                    }, 500);
                }
            }, 10000);
    }

    addPosterToPage(elementId) {
        const container = document.getElementById(elementId);
        if (!container) {
            console.error(`Poster container with ID '${elementId}' not found.`);
            return;
        }

        const topic = this.getTodayTopic();
        const posterHTML = this.generatePosterHTML(topic);
        container.innerHTML = posterHTML;
    }
}

// Initialize the poster system
const dailyHealthPoster = new DailyHealthPoster();

// Auto-show popup on page load (with delay)
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        dailyHealthPoster.showPosterPopup();
    }, 2000); // Show popup after 2 seconds
});
