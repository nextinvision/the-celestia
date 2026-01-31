// WhatsApp contact configuration
export const WHATSAPP_NUMBER = "919876543210"; // Replace with actual WhatsApp number

// Service-specific personalized messages
export const serviceMessages = {
    "Sound Healing": "Hi! I'm interested in learning more about your Sound Healing services. I'd love to embark on a journey of healing and harmony through ancient sound therapy.",
    "Reiki & Multi Modality Healing": "Hi! I'm interested in your Reiki & Multi Modality Healing services. I'd like to restore balance and harmony through energy healing.",
    "Crystal Treasure": "Hi! I'm interested in your Crystal Treasure services. I'd love to harness the energy of sacred crystals for healing and transformation.",
    "Tarot Guidance": "Hi! I'm interested in your Tarot Guidance services. I'd like to gain clarity and insights for my life's journey.",
    "Numerology": "Hi! I'm interested in your Numerology services. I'd love to unlock the power of numbers in my life and discover my life path.",
    "Intuitive Coaching": "Hi! I'm interested in your Intuitive Coaching services. I'd like to navigate life with intuitive guidance and support."
};

// Generate WhatsApp link with personalized message
export const getWhatsAppLink = (serviceName: string): string => {
    const message = serviceMessages[serviceName as keyof typeof serviceMessages] ||
        `Hi! I'm interested in learning more about ${serviceName}.`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

// Open WhatsApp in new tab
export const openWhatsApp = (serviceName: string): void => {
    const link = getWhatsAppLink(serviceName);
    window.open(link, '_blank');
};
