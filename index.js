const { Telegraf } = require('telegraf');
const bot = new Telegraf('7300029573:AAHX1vVpvzcyERzBIYLZ3buno7uCbHQ_8vc'); // Replace with your actual bot token

// Sample data for blood donors
const donorData = {
    Chennai: [
        { name: "ANANTH", bloodGroup: "A1+", location: "Pammal", phone: "8825649482" },
        { name: "SANTHOSH SUNDAR", bloodGroup: "A1+", location: "Salaigramam", phone: "9677084359" },
        { name: "SAROJA", bloodGroup: "A1+", location: "Chennai", phone: "9842066955" },
        { name: "MOHAMMED NASIQ", bloodGroup: "A1+", location: "Ambur", phone: "7418700770" },
        { name: "ELIYAAS AHMEDH", bloodGroup: "A1+", location: "Kodungaiyur", phone: "7810013522" },
        { name: "MANIKANDAN", bloodGroup: "A1+", location: "Seenuvasan nagar", phone: "9941199042" },
        { name: "KISHAN KUMAR S", bloodGroup: "A1+", location: "Triplicae", phone: "9884409695" },
        { name: "THIRAVIARAJ S", bloodGroup: "A1+", location: "Poonamallee", phone: "9445371714" },
        { name: "YUVARAJ P", bloodGroup: "A1+", location: "TNHB COLONY,AYAPAKKAM", phone: "8680944296" },
        { name: "VIGNESH", bloodGroup: "A1+", location: "Coimbatore", phone: "8526893918" },
        { name: "MURUGANANDHAN", bloodGroup: "A1+", location: "Erode", phone: "9003706006" },
        { name: "THIYAGARAJAN", bloodGroup: "A1+", location: "Madambakkam", phone: "9791889978" },
        { name: "SURENDER G", bloodGroup: "A1+", location: "Oragadam,Ambattur", phone: "9360786875" },
        { name: "SAMEER AHMED", bloodGroup: "A1+", location: "Sheethanagar", phone: "9884251845" },
        { name: "ANANDHAVIJAYAN P R", bloodGroup: "A1+", location: "Thiruninravur", phone: "8939851004" },
        { name: "DEENADHAYALAN S", bloodGroup: "A1+", location: "Kanniyamman nagar, iyypanthangal", phone: "6381604491" },
        { name: "ANTONY", bloodGroup: "A1+", location: "Nanmangalam", phone: "9840683659" },
        { name: "VAHEETH RAJ", bloodGroup: "A1+", location: "Chennai", phone: "07811967779" },
        { name: "B.SUBBULAKSHMI", bloodGroup: "A1+", location: "Chennai", phone: "9176618064" },
        { name: "DAVID A", bloodGroup: "A1+", location: "Chennai", phone: "8072767823" },
        { name: "S ASHOK KUMAR", bloodGroup: "A1+", location: "Chennai", phone: "9841173171" },
        { name: "IYAPPAN", bloodGroup: "A1+", location: "Tambaram", phone: "9597111733" },
        { name: "RAMASAMY", bloodGroup: "A1+", location: "Coimbatore", phone: "9094198935" },
        { name: "RAHUL VIGNESHWARAN", bloodGroup: "A1+", location: "Old Perungalathur", phone: "9092274952" },
        { name: "KANNAN KC", bloodGroup: "A1+", location: "Sithalapakkam, Sankarapuram", phone: "9087922298" },
        { name: "BALAJI PUVVADI", bloodGroup: "A1+", location: "Puliyambedu", phone: "9150326276" },
        { name: "LOKESH K", bloodGroup: "A1+", location: "Guduvanchery", phone: "9094714634" },
        { name: "UDAYA KUMAR J", bloodGroup: "A1+", location: "Iyyapanthangal", phone: "7358607353" },
        { name: "KIRAN KUMAR M", bloodGroup: "A1+", location: "Madhavaram", phone: "8015381495" },
        { name: "SINDUJA", bloodGroup: "A1+", location: "Pallavaram, Chennai", phone: "8939052057" },
        { name: "KARTHIK", bloodGroup: "A1+", location: "K.K. Nagar", phone: "9840031959" },
        { name: "PADMINI A", bloodGroup: "A1+", location: "Chitlapakkam", phone: "8122852307" },
        { name: "LAKSHMINARAYANAN", bloodGroup: "A1+", location: "Kanchipuram", phone: "9884397774" },
        { name: "SIVAPRAKASH R", bloodGroup: "A1+", location: "Chennai", phone: "9962557499" },
        { name: "VIMALRAJ S", bloodGroup: "A1+", location: "Urapakkam", phone: "9080848662" },
        { name: "ASTIN JOSE", bloodGroup: "A1+", location: "Karambakkam, Porur", phone: "7598143811" },
        { name: "JEEVANANDHAM M", bloodGroup: "A1+", location: "South Boag Road TNagar", phone: "9600096967" },
        { name: "SATHISH KUMAR", bloodGroup: "A1+", location: "Perumbakkam", phone: "9600626113" },
        { name: "SUNDARAM SANKARAN", bloodGroup: "A1+", location: "Kodambakkam", phone: "9940062283" },
        { name: "C.SHERIN", bloodGroup: "A1+", location: "Nadhavana Mettur", phone: "8489034121" },
        { name: "KAVEETHA G", bloodGroup: "A1+", location: "Taramani", phone: "9940174569" },
        { name: "SANDHYA RAMAN", bloodGroup: "A1+", location: "Mylapore", phone: "9962032572" },
        { name: "NAWAZ", bloodGroup: "A1+", location: "Pudupet", phone: "9840276207" },
        { name: "RAMARATHINAM G", bloodGroup: "A1+", location: "West Cit Nagar", phone: "9841101818" },
        { name: "ABHINAYA MOHAN", bloodGroup: "A1+", location: "Besant Nagar", phone: "9840832110" },
        { name: "NATRAYAN S", bloodGroup: "A1+", location: "Teynampatai", phone: "9994349410" },
        // Add more donors as needed...
    ],
    Coimbatore: [
        { name: "VIGNESH", bloodGroup: "A1+", location: "Coimbatore", phone: "8526893918" },
        { name: "RAMASAMY", bloodGroup: "A1+", location: "Coimbatore", phone: "9094198935" }, 
        { name: 'SABARINATHAN.D', bloodGroup: 'A+', phone: '9994101379', location: { city: 'Pongaliyour', district: 'Coimbatore', state: 'Tamil Nadu' } },
        { name: 'DAVID', bloodGroup: 'A+', phone: '9843016404', location: { city: 'Gandhipuram', district: 'Coimbatore', state: 'Tamil Nadu' } },
        { name: 'Manikandan A', bloodGroup: 'A+', phone: '9566842377', location: { city: 'Coimbatore', district: 'Coimbatore', state: 'Tamil Nadu' } },
        { name: 'Shanmugaraj', bloodGroup: 'A+', phone: '7373270327', location: { city: 'Coimbatore', district: 'Coimbatore', state: 'Tamil Nadu' } },
        { name: 'Kaushik', bloodGroup: 'A+', phone: '9003501466', location: { city: 'Coimbatore', district: 'Coimbatore', state: 'Tamil Nadu' } },
        { name: 'Mobin', bloodGroup: 'A+', phone: '9362402684', location: { city: 'Coimbatore', district: 'Coimbatore', state: 'Tamil Nadu' } },
        { name: 'Prasanth Shekhar', bloodGroup: 'A+', phone: '9952238888', location: { city: 'Coimbatore', district: 'Coimbatore', state: 'Tamil Nadu' } },
        { name: 'Dhayanantha Palaniappan M', bloodGroup: 'A+', phone: '9787662012', location: { city: 'Coimbatore', district: 'Coimbatore', state: 'Tamil Nadu' } },
        { name: 'Mohammed Meerajudeen', bloodGroup: 'A+', phone: '9790412553', location: { city: 'Coimbatore', district: 'Coimbatore', state: 'Tamil Nadu' } },
        // Add more donors as needed...
    ]
    // Add more districts and their donors here...
};

// Function to map user-selected blood group to the donor's blood group format
const mapBloodGroup = (selectedGroup) => {
    const bloodGroupMap = {
        'A+': 'A1+',
        'A-': 'A1-',
        'B+': 'B+',
        'B-': 'B-',
        'AB+': 'AB+',
        'AB-': 'AB-',
        'O+': 'O+',
        'O-': 'O-'
    };
    return bloodGroupMap[selectedGroup] || selectedGroup;
};

// Start command
bot.start((ctx) => {
    ctx.reply('How can I help you? Which blood group do you need?', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'A+', callback_data: 'A+' }, { text: 'A-', callback_data: 'A-' }],
                [{ text: 'B+', callback_data: 'B+' }, { text: 'B-', callback_data: 'B-' }],
                [{ text: 'AB+', callback_data: 'AB+' }, { text: 'AB-', callback_data: 'AB-' }],
                [{ text: 'O+', callback_data: 'O+' }, { text: 'O-', callback_data: 'O-' }]
            ]
        }
    });
});

// Blood group selection
bot.action(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], (ctx) => {
    const selectedBloodGroup = ctx.match[0]; // Get the selected blood group
    console.log(`Selected Blood Group: ${selectedBloodGroup}`); // Debugging line
    ctx.reply(`You selected ${selectedBloodGroup}. Please select your district:`, {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Chennai', callback_data: `Chennai_${selectedBloodGroup}` }],
                [{ text: 'Coimbatore', callback_data: `Coimbatore_${selectedBloodGroup}` }],
                // Add other districts here...
            ]
        }
    });
});

// District selection
bot.action(/(.*)_(.*)/, (ctx) => {
    const selectedDistrict = ctx.match[1];
    const selectedBloodGroup = mapBloodGroup(ctx.match[2]); // Map to correct donor data blood group
    console.log(`Selected District: ${selectedDistrict}, Selected Blood Group: ${selectedBloodGroup}`); // Debugging line
    
    // Validate extracted values
    if (!donorData[selectedDistrict]) {
        return ctx.reply(`District ${selectedDistrict} not found.`);
    }

    const donors = donorData[selectedDistrict].filter(donor => donor.bloodGroup === selectedBloodGroup);
    console.log(`Matching Donors: ${JSON.stringify(donors)}`); // Debugging line

    if (donors.length > 0) {
        donors.forEach(donor => {
            ctx.reply(`Name: ${donor.name}\nLocation: ${donor.location}\nPhone: ${donor.phone}`);
        });
    } else {
        ctx.reply(`No donors found in ${selectedDistrict} with blood group ${selectedBloodGroup}`);
    }
});

bot.launch();
