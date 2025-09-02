# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Keep line numbers for stack traces
-keepattributes SourceFile,LineNumberTable

# Hide original source file name
-renamesourcefileattribute SourceFile

# Keep AndroidX annotations
-keepattributes *Annotation*
-keepclassmembers class ** {
    @androidx.annotation.Keep <fields>;
}
-keep @androidx.annotation.Keep class *

# Keep AdMob classes
-keep public class com.google.android.gms.ads.** { public *; }
-keep public class com.google.ads.** { public *; }

# Keep the AdMob SDK and its dependencies
-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient { *; }
-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient$Info { *; }
-keep class * extends java.util.ListResourceBundle {
    protected Object[][] getContents();
}

# Keep AdMob Mediation
-keep public class com.google.ads.mediation.** { public *; }
-keep public class com.google.android.gms.ads.mediation.** { public *; }

# Keep AdMob AdListener implementation
-keep public class * implements com.google.android.gms.ads.mediation.customevent.CustomEvent {
    public <init>();
    public abstract requestBannerAd(...);
    public abstract requestInterstitialAd(...);
    public abstract requestNativeAd(...);
}

# Keep WebView JavaScript interface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep JavaScript interface for WebView
-keepclassmembers class fqcn.of.javascript.interface.for.webview {
    public *;
}

# Keep JavaScript bridge methods
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep application class
-keep public class * extends android.app.Application {
    public <init>();
    public void attachBaseContext(android.content.Context);
}

# Keep the main activity
-keep public class * extends android.app.Activity

# Keep the main service
-keep public class * extends android.app.Service

# Keep the broadcast receiver
-keep public class * extends android.content.BroadcastReceiver

# Keep the content provider
-keep public class * extends android.content.ContentProvider

# Keep the view
-keep public class * extends android.view.View {
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
    public void set*(...);
}

# Keep custom views
-keep public class * extends android.view.View
-keep public class * extends android.app.Dialog
-keep public class * extends android.app.AlertDialog
-keep public class * extends android.preference.Preference
-keep public class * extends android.support.v4.app.Fragment
-keep public class * extends android.app.Fragment

# Keep R (resources)
-keepclassmembers class **.R$* {
    public static <fields>;
}

# Keep JavaScript bridge methods in Cordova
-keepclassmembers class * {
    @org.apache.cordova.* *;
    @org.apache.cordova.api.* <methods>;
}

# Keep the native methods
-keepclasseswithmembernames class * {
    native <methods>;
}

# Keep Parcelable classes
-keep class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}

# Keep Serializable classes
-keepclassmembers class * implements java.io.Serializable {
    static final long serialVersionUID;
    static final java.io.ObjectStreamField[] serialPersistentFields;
    private void writeObject(java.io.ObjectOutputStream);
    private void readObject(java.io.ObjectInputStream);
    java.lang.Object writeReplace();
    java.lang.Object readResolve();
}

# Keep the custom Application class
-keep public class com.zibonelefm.appmaniazar.MainApplication
