/**
 * IMAGE MANAGEMENT
 * ----------------
 * Resolution order for a card's artwork:
 *   1. Image saved in the app (modal → upload / change URL)   [localStorage]
 *   2. LOCAL_IMAGES below   (drop files into /public/cards and list them here)
 *   3. Default official artwork URL from catalog.json
 *
 * Example:   "sm9-1": "/cards/sm9-1.png",
 */
export const LOCAL_IMAGES: Record<string, string> = {
  // "sm9-1": "/cards/sm9-1.png",
};
