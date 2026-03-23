import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

const replacements = {
  // Generic background classes
  'bg-secondary': 'bg-screen',
  'bg-primary': 'bg-action',
  'bg-accent': 'bg-action',
  'bg-white/5': 'bg-card',
  'bg-white/10': 'bg-card',
  'bg-white/20': 'bg-card',
  'bg-white/30': 'bg-card',
  'bg-white': 'bg-card',
  'bg-gray-100': 'bg-border-light',
  
  // Generic text classes
  'text-white': 'text-text-primary',
  'text-gray-100': 'text-text-secondary',
  'text-gray-200': 'text-text-secondary',
  'text-gray-300': 'text-text-secondary',
  'text-gray-400': 'text-text-secondary',
  'text-gray-500': 'text-text-secondary',
  'text-gray-600': 'text-text-secondary',
  'text-secondary': 'text-text-primary',
  'text-primary': 'text-action',
  'text-accent': 'text-action',

  // Border classes
  'border-white/5': 'border-border-light',
  'border-white/10': 'border-border-light',
  'border-white/20': 'border-border-light',
  'border-white/30': 'border-border-light',
  
  // Hover generic states
  'hover:bg-white/5': 'hover:bg-screen',
  'hover:bg-white/10': 'hover:bg-screen',
  'hover:bg-white/20': 'hover:bg-screen',
  'hover:text-primary': 'hover:text-action',
  'hover:text-white': 'hover:text-text-action',
  'hover:text-accent': 'hover:text-action',
  'hover:border-accent/30': 'hover:border-action/30',
  'hover:bg-gray-100': 'hover:bg-border-light',

  // Gradients and special cases
  'from-primary/20': 'from-action/20',
  'from-accent/20': 'from-action/20',
  'from-primary': 'from-action',
  'from-accent': 'from-action',
  'to-primary': 'to-action',
  'to-accent': 'to-action',

  // Others
  'ring-white/20': 'ring-border-light',
  'text-green-500': 'text-success-green',
  'text-green-400': 'text-success-green',
  'bg-green-500': 'bg-success-green',
  'bg-green-400': 'bg-success-green',
  'bg-primary/20': 'bg-action/20',
  'bg-accent/20': 'bg-action/20',
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      let parts = content.split(/([\s'"`]+)/);
      let changed = false;
      for (let i = 0; i < parts.length; i++) {
        if (replacements[parts[i]]) {
            parts[i] = replacements[parts[i]];
            changed = true;
        }
      }
      
      if (changed) {
        const newContent = parts.join('');
        fs.writeFileSync(fullPath, newContent, 'utf-8');
        console.log(`Updated classes in ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
console.log("Color replacement done.");
