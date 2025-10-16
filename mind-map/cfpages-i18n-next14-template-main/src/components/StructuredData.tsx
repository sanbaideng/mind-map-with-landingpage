export function RandomPickerStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the picker really random?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use a secure random algorithm that ensures completely fair, unbiased selection."
        }
      },
      {
        "@type": "Question",
        "name": "How many items can I add?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There's no limit - add as many items as you need for your selection."
        }
      },
      {
        "@type": "Question",
        "name": "Do you store my data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all data is processed locally in your browser and never stored on our servers."
        }
      }
    ]
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Random Picker",
    "description": "Pick random items from any list quickly and fairly. Perfect for classrooms, raffles, decisions, and giveaways.",
    "operatingSystem": "Web Browser",
    "applicationCategory": "Utility",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Fast, instant random selection",
      "100% fair and unbiased algorithm",
      "Add unlimited items to your list",
      "Duplicate items with one click",
      "Delete unwanted items easily",
      "Works on all devices and browsers"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
      />
    </>
  );
}

export function TeamGeneratorStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many people can I add to the team generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There's no strict limit - you can add hundreds of participants if needed."
        }
      },
      {
        "@type": "Question",
        "name": "Is the team generation truly random?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use a secure random algorithm that ensures fair, unbiased distribution."
        }
      },
      {
        "@type": "Question",
        "name": "Do you save my data?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, all data is processed locally in your browser and never stored on our servers."
        }
      }
    ]
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate Random Teams",
    "description": "Learn how to split a list of participants into random, balanced teams",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter participant names",
        "text": "Enter participant names in the text area (one name per line)"
      },
      {
        "@type": "HowToStep",
        "name": "Choose number of teams",
        "text": "Choose the number of teams you want to create"
      },
      {
        "@type": "HowToStep",
        "name": "Generate teams",
        "text": "Click 'Generate Teams' to create random groups"
      },
      {
        "@type": "HowToStep",
        "name": "Use your teams",
        "text": "View your balanced teams and use them for your activity"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
    </>
  );
}

export function SpinWheelStructuredData() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many options can I add to the wheel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can add unlimited options. The wheel automatically adjusts segment sizes to fit all your choices."
        }
      },
      {
        "@type": "Question",
        "name": "Is the spin wheel result truly random?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use a cryptographically secure random number generator to ensure fair results."
        }
      },
      {
        "@type": "Question",
        "name": "Does the wheel work on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the spin wheel is fully responsive and works perfectly on smartphones and tablets."
        }
      }
    ]
  };

  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Spin Wheel",
    "description": "Interactive spin wheel for making decisions, selecting winners, and random choices. Perfect for classrooms, games, and decision-making.",
    "operatingSystem": "Web Browser",
    "applicationCategory": "Game",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Unlimited options",
      "Visual appeal with animations",
      "Fair and random results",
      "Easy option management",
      "Mobile friendly design",
      "No registration required"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationData) }}
      />
    </>
  );
}