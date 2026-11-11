const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE_ICONS_BASE = "https://cdn.simpleicons.org";

const DEVICON_SLUGS: Record<string, string> = {
  "Python": "python/python-original.svg",
  "C++": "cplusplus/cplusplus-original.svg",
  "C": "c/c-original.svg",
  "Java": "java/java-original.svg",
  "MATLAB": "matlab/matlab-original.svg",
  "Raspberry Pi": "raspberrypi/raspberrypi-original.svg",
  "Arduino": "arduino/arduino-original.svg",
  "Docker": "docker/docker-original.svg",
  "Kubernetes": "kubernetes/kubernetes-plain.svg",
  "Proxmox VE": "proxmox/proxmox-original.svg",
  "Linux": "linux/linux-original.svg",
  "Git/GitLab": "gitlab/gitlab-original.svg",
  "VS Code": "vscode/vscode-original.svg",
  "Jira": "jira/jira-original.svg",
  "NumPy": "numpy/numpy-original.svg",
  "PyTorch": "pytorch/pytorch-original.svg",
  "JUnit": "junit/junit-original.svg",
};

// Hosted in public/icons (AWS was removed from the devicon CDN; text recolored for the dark background).
const LOCAL_ICONS: Record<string, string> = {
  "AWS (S3, ECR, Lambda)": "/icons/aws.svg",
};

const SIMPLE_ICONS_SLUGS: Record<string, string> = {
  "ARM Assembly": "arm",
  "ARM Cortex-M4": "arm",
};

// No reliable logo available for these — rendered as text-monogram badges instead.
const MONOGRAMS: Record<string, string> = {
  "Verilog": "V",
  "Vivado": "Vi",
  "Keil µVision": "µV",
  "MSP432": "TI",
  "Nuitka": "N",
};

export function iconFor(skill: string): string | null {
  const local = LOCAL_ICONS[skill];
  if (local) return local;
  const devicon = DEVICON_SLUGS[skill];
  if (devicon) return `${DEVICON_BASE}/${devicon}`;
  const simple = SIMPLE_ICONS_SLUGS[skill];
  if (simple) return `${SIMPLE_ICONS_BASE}/${simple}`;
  return null;
}

export function monogramFor(skill: string): string | null {
  return MONOGRAMS[skill] ?? null;
}
