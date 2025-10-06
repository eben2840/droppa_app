export const pricing = [
  {
    name: "Basic",
    description: "For personal use",
    value: {
      monthly: 0,
      yearly: 0,
    },
    unit: "per user/month", 
    currency: "$",
    features: [
      "Basic route planning",
      "Standard maps",
      "Limited searches",
      "Community support",
    ],
    button: {
      label: "Start navigating",
      href: "#",
      color: "light",
      icon: "tabler:arrow-right",
    },
  },
  {
    name: "Navigator",
    description: "For frequent travelers",
    value: {
      monthly: 15,
      yearly: 12,
    },
    unit: "per user/month",
    currency: "$", 
    features: [
      "All Basic features",
      "Real-time traffic",
      "Advanced route optimization",
      "Offline maps",
    ],
    button: {
      label: "Try Droppa",
      href: "#",
      icon: "tabler:rocket",
    },
  },
  {
    name: "Fleet",
    description: "For business fleets",
    value: {
      monthly: 29,
      yearly: 24,
    },
    unit: "per user/month",
    currency: "$",
    features: [
      "All Navigator features",
      "Fleet management",
      "API access",
      "Custom routing rules",
    ],
    button: {
      label: "Contact sales",
      href: "#",
      color: "light", 
      icon: "tabler:mail",
    },
  },
];
