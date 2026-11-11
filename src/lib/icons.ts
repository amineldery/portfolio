// All logos are stored in public/icons so the site never depends on an icon CDN.
const ICONS: Record<string, string> = {
  "Python": "python",
  "C++": "cplusplus",
  "C": "c",
  "Java": "java",
  "MATLAB": "matlab",
  "ARM Assembly": "arm",
  "ARM Cortex-M4": "arm",
  "Keil": "arm",
  "Keil µVision": "arm",
  "Vivado": "amd",
  "Raspberry Pi": "raspberrypi",
  "Arduino": "arduino",
  "Arduino Due": "arduino",
  "Arduino Nano Every": "arduino",
  "AWS (S3, ECR, Lambda)": "aws",
  "Docker": "docker",
  "Kubernetes": "kubernetes",
  "Proxmox VE": "proxmox",
  "Linux": "linux",
  "Git/GitLab": "gitlab",
  "Git": "git",
  "VS Code": "vscode",
  "Jira": "jira",
  "NumPy": "numpy",
  "PyTorch": "pytorch",
  "JUnit": "junit",
  "Firebase": "firebase",
  "React Native": "react",
  "GitHub": "github",
};

// No logo for these, shown as a monogram badge instead.
const MONOGRAMS: Record<string, string> = {
  "Verilog": "V",
  "MSP432": "TI",
  "Nuitka": "N",
};

export function iconFor(skill: string): string | null {
  const slug = ICONS[skill];
  return slug ? `/icons/${slug}.svg` : null;
}

export function monogramFor(skill: string): string | null {
  return MONOGRAMS[skill] ?? skill.replace(/[^A-Za-z0-9]/g, "").slice(0, 2);
}
