export function getMood(
  tempHigh: number,
  tempLow: number,
  uvIndex: number,
  rainChance: number,
  cloudCover: number,
  windSpeed: number
): { mood: string; emoji: string; outfit: string; activity: string } {
  if (uvIndex > 7 && cloudCover < 20 && tempHigh >= 72) {
    // Warm and sunny
    return {
      mood: "Energetic",
      emoji: "☀️",
      outfit: "Shorts, t-shirt",
      activity: "Go for a run, hit the gym, or plan a hike",
    };
  }
  if (rainChance > 50 || cloudCover > 80) {
    // Dark skies or drizzle
    return {
      mood: "Cozy",
      emoji: "☕",
      outfit: "Sweater, hoodie, cozy socks",
      activity: "Read a book, drink tea, or watch a movie",
    };
  }
  if (cloudCover > 60 && tempHigh < 68) {
    // Gloomy and cool
    return {
      mood: "Sleepy",
      emoji: "😴",
      outfit: "PJs, blanket",
      activity: "Take a nap, read, or listen to lo-fi music",
    };
  }
  if (tempHigh >= 60 && tempHigh <= 75 && windSpeed < 10) {
    // Mild and breezy
    return {
      mood: "Chill",
      emoji: "😌",
      outfit: "Light jacket, jeans, sneakers",
      activity: "Go for a walk, order take-out, or paint",
    };
  }
  if (windSpeed > 20 || tempHigh > 90 || tempLow < 35) {
    // Weather is a little wild
    return {
      mood: "Adventurous",
      emoji: "🧭",
      outfit: "Weatherproof gear, boots, windbreaker",
      activity: "Go somewhere new, go off-roading, attend an event",
    };
  }
  // Default: fair weather
  return {
    mood: "Productive",
    emoji: "📈",
    outfit: "Comfortable but presentable",
    activity: "Tackle work, tidy your space, or start a project",
  };
}
