# Build APK Instructions

## Prerequisites
- Android Studio installed
- Java JDK 11 or higher installed
- Android SDK installed

## Steps to Build APK

### 1. Build the web assets
```bash
npm run build
```

### 2. Sync with Capacitor
```bash
npx cap sync android
```

### 3. Open in Android Studio
```bash
npx cap open android
```

### 4. Build APK in Android Studio
- Once Android Studio opens, wait for Gradle sync to complete
- Go to **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
- Wait for the build to complete
- Click on "locate" in the notification to find the APK

### Alternative: Build from Command Line

#### Debug APK (for testing)
```bash
cd android
./gradlew assembleDebug
```
The APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`

#### Release APK (for production)
```bash
cd android
./gradlew assembleRelease
```
The APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

**Note:** For release builds, you need to sign the APK with your keystore.

## Quick Build Script
Run this command from the project root:
```bash
npm run build && npx cap sync android && cd android && ./gradlew assembleDebug && cd ..
```

The debug APK will be ready for testing at:
`android/app/build/outputs/apk/debug/app-debug.apk`
