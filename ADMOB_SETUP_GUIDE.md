# AdMob Integration Guide for Zibonele FM

## ✅ Configuration Complete

Your AdMob integration is now set up with the following IDs:

### AdMob App ID
```
ca-app-pub-5364194379349961~6147496485
```

### Banner Ad Unit ID
```
ca-app-pub-5364194379349961/9348540586
```

---

## 📱 Current Setup

### 1. AndroidManifest.xml
✅ Updated with your AdMob App ID at:
`android/app/src/main/AndroidManifest.xml`

### 2. Configuration File
✅ Created at: `src/config/admob.config.ts`
- Contains both test and production ad unit IDs
- Easy toggle between testing and production modes

### 3. AdMobBanner Component
✅ Updated at: `src/components/AdMobBanner/AdMobBanner.tsx`
- Uses configuration file for ad IDs
- Automatically shows test ads in testing mode
- Positioned at the bottom of the Home page

---

## 🧪 Testing Mode (Current)

**Status:** Testing mode is currently **ENABLED**

The app will show **Google's test ads** instead of your real ads. This is important for:
- Testing the ad layout and positioning
- Avoiding invalid clicks on your own ads
- Preventing your AdMob account from being flagged

### Test Ads Display:
- Banner: Google's test banner ad
- No revenue generated
- Safe to click during development

---

## 🚀 Production Mode (Before Publishing)

### When to Switch to Production:
Before publishing your app to Google Play Store, you MUST switch to production mode.

### How to Switch:

1. **Open the configuration file:**
   ```
   src/config/admob.config.ts
   ```

2. **Change the testing flag:**
   ```typescript
   export const AdMobConfig = {
     testing: false,  // Change from true to false
     // ... rest of config
   };
   ```

3. **Rebuild and sync:**
   ```bash
   npm run build
   npx cap sync
   ```

4. **Build release APK/AAB:**
   ```bash
   cd android
   ./gradlew bundleRelease
   ```

---

## 📊 AdMob Dashboard

### Monitor Your Ads:
1. Go to https://admob.google.com
2. Select your app: **Zibonele FM**
3. View metrics:
   - Impressions
   - Clicks
   - Revenue
   - Fill rate

### Important Notes:
- Real ad revenue only shows when `testing: false`
- Test mode ads generate **no revenue**
- It may take 24-48 hours for ads to start showing after first setup
- Ensure your app is published on Google Play Store for optimal ad fill rates

---

## 🔧 Troubleshooting

### Ads Not Showing?

1. **Check if you're on a native platform:**
   - Ads only work on Android/iOS devices or emulators
   - They won't show in web browser

2. **Check the console logs:**
   - Look for `[AdMob]` prefixed messages
   - Common errors and solutions below

3. **Verify AdMob account:**
   - Ensure your AdMob account is active
   - Check if ad units are enabled
   - Verify app is linked to AdMob

### Common Errors:

**Error: "Ad failed to load"**
- Solution: Wait 24-48 hours after creating ad units
- Solution: Check internet connection
- Solution: Verify ad unit IDs are correct

**Error: "No fill"**
- Solution: Normal in testing, especially in certain regions
- Solution: Try different ad sizes
- Solution: Ensure app is published on Play Store

**Error: "Invalid ad unit ID"**
- Solution: Double-check IDs in `admob.config.ts`
- Solution: Ensure no extra spaces or characters

---

## 📝 Ad Placement

### Current Implementation:
- **Location:** Bottom of Home page
- **Type:** Banner ad
- **Size:** Standard banner (320x50)
- **Position:** Bottom center

### Layout:
```
┌─────────────────────┐
│   Home Content      │
│   (Play Button)     │
│                     │
│                     │
├─────────────────────┤
│   AdMob Banner      │
└─────────────────────┘
```

---

## 🎯 Best Practices

### DO:
✅ Test with test ads during development
✅ Switch to production before publishing
✅ Monitor AdMob dashboard regularly
✅ Follow Google's ad placement policies
✅ Ensure ads don't interfere with app functionality

### DON'T:
❌ Click your own ads in production mode
❌ Ask users to click ads
❌ Place too many ads on one screen
❌ Cover important content with ads
❌ Use production ads during development

---

## 📞 Support

### AdMob Support:
- https://support.google.com/admob

### Capacitor AdMob Plugin:
- https://github.com/capacitor-community/admob

### Google Mobile Ads SDK:
- https://developers.google.com/admob/android/quick-start

---

## 🔄 Quick Commands

### Build and Test:
```bash
npm run build
npx cap sync
npx cap open android
```

### Clean Build:
```bash
cd android
./gradlew clean
cd ..
npm run build
npx cap sync
```

### Check Logs:
```bash
npx cap run android -l
```

---

## ✨ Summary

Your AdMob integration is complete and ready for testing! 

**Current Status:**
- ✅ AdMob App ID configured
- ✅ Banner Ad Unit ID configured  
- ✅ Testing mode enabled
- ✅ Ad positioned at bottom of Home page
- ✅ Configuration file created for easy management

**Next Steps:**
1. Test the app on an Android device/emulator
2. Verify test ads are showing
3. Check ad positioning and layout
4. When ready to publish, switch `testing: false`
5. Build release version and publish to Play Store

Good luck with your app! 🎉
