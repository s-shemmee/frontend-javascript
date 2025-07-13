// ======================
// ASSASSINATION CREDIT SYSTEM
// ======================

// Major credits for core assassination skills
interface MajorCredits {
    credits: number;
    readonly _majorBrand: 'Major';
}

// Minor credits for support training
interface MinorCredits {
    credits: number;
    readonly _minorBrand: 'Minor';
}

// Type-safe credit combiners
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: 'Major'
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: 'Minor'
    };
}

// ======================
// CLASS 3-E DEMO
// ======================

// Nagisa's knife skills (major)
const knifeTraining: MajorCredits = {
    credits: 85,
    _majorBrand: 'Major'
};

// Karma's psychological warfare (major)
const psychWarfare: MajorCredits = {
    credits: 90,
    _majorBrand: 'Major'
};

// Kaede's tentacle camouflage (minor)
const stealthTraining: MinorCredits = {
    credits: 75,
    _minorBrand: 'Minor'
};

// Rio's gymnastics (minor)
const agilityTraining: MinorCredits = {
    credits: 80,
    _minorBrand: 'Minor'
};

// Calculate totals
const lethalSkills = sumMajorCredits(knifeTraining, psychWarfare);
console.log(`🔥 Total Lethal Skills: ${lethalSkills.credits} credits`);
console.log('   (Nagisa\'s Knife Mastery + Karma\'s Psychological Warfare)');

const supportSkills = sumMinorCredits(stealthTraining, agilityTraining);
console.log(`\n🛡️ Total Support Training: ${supportSkills.credits} credits`);
console.log('   (Kaede\'s Stealth + Rio\'s Agility)');
