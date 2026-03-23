const fs = require('fs');
const landingPath = 'c:/Users/Acer/Desktop/bharatworks_landing_page/src/pages/LandingPage.jsx';
const aboutPath = 'c:/Users/Acer/Desktop/bharatworks_landing_page/src/pages/AboutPage.jsx';

let landing = fs.readFileSync(landingPath, 'utf8');
let about = fs.readFileSync(aboutPath, 'utf8');

// 1. Update imports in landing
landing = landing.replace(/import \{[\s\S]*?\} from 'react-icons\/fa';/, 
  `import { 
  FaHardHat, FaBriefcase, FaArrowRight, FaCheckCircle,
  FaHandshake, FaCommentDots, FaPhoneAlt, FaEnvelope, FaUsers,
  FaRocket, FaMapMarkerAlt, FaHeart, FaGlobe, FaBolt,
  FaShieldAlt, FaMicrophone, FaLightbulb, FaFireAlt, FaChartBar, FaBrain
} from 'react-icons/fa';`);

landing = landing.replace(/import \{ useNavigate \} from 'react-router-dom';/,
  `import { useNavigate, Link } from 'react-router-dom';`);

// 2. Add whyItMatters and update handleSubmit
const whyItMattersStr = `  const whyItMatters = [
    { icon: <FaPhoneAlt />, title: "No smartphone? No problem.", desc: "Jobs via simple phone calls" },
    { icon: <FaMapMarkerAlt />, title: "Hyperlocal matching", desc: "Based on real-time demand" },
    { icon: <FaBolt />, title: "Faster hiring", desc: "For businesses and contractors" },
    { icon: <FaShieldAlt />, title: "Trust-driven ecosystem", desc: "For both workers and employers" },
    { icon: <FiGlobe />, title: "Built specifically for India's", desc: "Informal workforce" },
  ];`;

landing = landing.replace('// TODO: Add form submission logic here', 
  `setTimeout(() => setSubmitted(false), 3000);\n    setFormData({ name: "", phone: "", email: "", message: "" });\n\n` + whyItMattersStr);

// 3. Extract sections from AboutPage
const sectionsRegex = /\{\/\* Hero Section \*\/\}[\s\S]*?(?=<Footer \/>)/;
const sectionsMatch = about.match(sectionsRegex);
const sections = sectionsMatch ? sectionsMatch[0] : '';

// 4. Extract Footer component from AboutPage
const footerRegex = /const Footer = \(\) => \([\s\S]*?\);/;
const footerMatch = about.match(footerRegex);
const footer = footerMatch ? footerMatch[0] : '';

// 5. Replace inside LandingPage
const startTag = '{/* About Us + Connect Us Sections */}';
const startIndex = landing.indexOf(startTag);
const endIndex = landing.indexOf('</div>\r\n    );\r\n  }\r\n\r\n  return (');

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = sections + '\n        <Footer />\n      ';
  landing = landing.slice(0, startIndex) + replacement + landing.slice(endIndex);
} else {
  console.log('Could not find boundaries for replacement.');
}

// 6. Append Footer component definition
landing = landing.replace('export default LandingPage;', footer + '\n\nexport default LandingPage;');

fs.writeFileSync(landingPath, landing);
console.log('LandingPage.jsx updated successfully.');
