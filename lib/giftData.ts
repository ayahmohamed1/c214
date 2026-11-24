// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `Happy birthday to my soulmate my best friend my love and my safe place in this world 🌎❤️
I truly couldn't have imagined having a better person by my side. I'm so lucky to have you in my life and you make everything so much more beautiful just by being in it You're my favorite person the one who makes me feel safe and comfortable and the person I want to share every little and big moment with 
I pray this year brings you all the happiness success and love you deserve and that all your dreams come true because you deserve every beautiful thing in this world. 
I can't wait to celebrate a million more birthdays with you, achieve our dreams, and build the life we've always dreamed of together. I love you more than words could ever explain. You're not just the love of my life, you're my home, my comfort, and the person I'd choose over and over again.

Happy birthday, my love. You're the best thing in my life. ❤️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;