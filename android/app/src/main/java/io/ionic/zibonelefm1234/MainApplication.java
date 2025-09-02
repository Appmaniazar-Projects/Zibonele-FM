package io.ionic.zibonelefm1234;

import android.app.Application;
import com.google.android.gms.ads.MobileAds;
import com.google.android.gms.ads.initialization.InitializationStatus;
import com.google.android.gms.ads.initialization.OnInitializationCompleteListener;

public class MainApplication extends android.app.Application {
    @Override
    public void onCreate() {
        super.onCreate();
        
        // Initialize the Mobile Ads SDK
        MobileAds.initialize(this, new OnInitializationCompleteListener() {
            @Override
            public void onInitializationComplete(InitializationStatus initializationStatus) {
                // Mobile Ads SDK is initialized
            }
        });
        
        // Optional: Set request configuration
        // MobileAds.setRequestConfiguration(
        //     new RequestConfiguration.Builder()
        //         .setTestDeviceIds(Arrays.asList("TEST_DEVICE_ID"))
        //         .build()
        // );
    }
}
