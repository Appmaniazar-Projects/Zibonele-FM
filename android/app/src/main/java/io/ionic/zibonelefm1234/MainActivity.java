package io.ionic.zibonelefm1234;

import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.graphics.Color;
import android.media.AudioManager;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.view.View;
import android.view.Window;
import android.view.WindowInsets;
import android.view.WindowInsetsController;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import io.ionic.zibonelefm1234.statusbar.CustomStatusBarPlugin;

public class MainActivity extends BridgeActivity {
    private BackgroundAudioService audioService;
    private boolean isBound = false;

    private ServiceConnection connection = new ServiceConnection() {
        @Override
        public void onServiceConnected(ComponentName className, IBinder service) {
            BackgroundAudioService.LocalBinder binder = (BackgroundAudioService.LocalBinder) service;
            audioService = binder.getService();
            isBound = true;
        }

        @Override
        public void onServiceDisconnected(ComponentName arg0) {
            isBound = false;
        }
    };

    @Override
    public void onStart() {
        super.onStart();
        // Bind to the background audio service
        Intent intent = new Intent(this, BackgroundAudioService.class);
        bindService(intent, connection, BIND_AUTO_CREATE);
    }

    @Override
    public void onStop() {
        super.onStop();
        // Unbind from the service
        if (isBound) {
            unbindService(connection);
            isBound = false;
        }
    }

    @Override
    public void onDestroy() {
        // Ensure service is properly cleaned up
        if (isBound) {
            unbindService(connection);
            isBound = false;
        }
        super.onDestroy();
    }
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // Set volume control stream for media playback
        setVolumeControlStream(AudioManager.STREAM_MUSIC);
        
        // Start the background audio service
        Intent serviceIntent = new Intent(this, BackgroundAudioService.class);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            startForegroundService(serviceIntent);
        } else {
            startService(serviceIntent);
        }

        // Apply edge-to-edge theme before super.onCreate()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
                View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
                View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            );
            getWindow().setStatusBarColor(Color.TRANSPARENT);
            getWindow().setNavigationBarColor(Color.TRANSPARENT);
        }

        // Register the plugin before super.onCreate()
        registerPlugin(CustomStatusBarPlugin.class);
        super.onCreate(savedInstanceState);
        
        // Enable edge-to-edge display
        enableEdgeToEdge();
        
// Set up system UI visibility change listener
        getWindow().getDecorView().setOnSystemUiVisibilityChangeListener(visibility -> {
            // Handle system UI visibility changes if needed
        });
    }
    
    private void enableEdgeToEdge() {
        // Enable edge-to-edge display
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        
        // For Android 12L (API 32) and above, use the new WindowInsetsController APIs
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            getWindow().setDecorFitsSystemWindows(false);
            WindowInsetsControllerCompat controller = new WindowInsetsControllerCompat(getWindow(), getWindow().getDecorView());
            controller.setSystemBarsBehavior(
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE |
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_BARS_BY_SWIPE
            );
            
            // Handle the initial insets
            getWindow().getDecorView().setOnApplyWindowInsetsListener((v, insets) -> {
                // Apply the insets to the view
                v.onApplyWindowInsets(insets);
                
                // Handle the system bars visibility
                int systemBars = WindowInsets.Type.systemBars();
                WindowInsetsControllerCompat insetsController = 
                    WindowCompat.getInsetsController(getWindow(), v);
                
                // Configure the appearance of the system bars
                insetsController.setAppearanceLightStatusBars(true);
                insetsController.setAppearanceLightNavigationBars(true);
                
                // Show system bars with a slight delay to allow the app to be fully interactive
                v.postDelayed(() -> {
                    insetsController.hide(systemBars);
                }, 100);
                
                // Return the insets so they're not consumed
                return insets;
            });
            
            // Request apply insets to make sure everything is laid out correctly
            getWindow().getDecorView().requestApplyInsets();
            
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
            // For Android 11 (API 30)
            getWindow().setDecorFitsSystemWindows(false);
            
            // Configure the system UI flags for edge-to-edge
            int flags = View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
                      View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
                      View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN;
            
            // Add immersive mode flags if needed
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                flags |= View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY |
                        View.SYSTEM_UI_FLAG_HIDE_NAVIGATION |
                        View.SYSTEM_UI_FLAG_FULLSCREEN;
            }
            
            getWindow().getDecorView().setSystemUiVisibility(flags);
            
            // Handle the insets for older versions
            getWindow().getDecorView().setOnApplyWindowInsetsListener((v, insets) -> {
                // Apply the insets to the view
                v.onApplyWindowInsets(insets);
                
                // Re-apply the system UI flags after rotation or other configuration changes
                v.post(() -> v.setSystemUiVisibility(v.getSystemUiVisibility()));
                
                return insets;
            });
            
            // Request apply insets to make sure everything is laid out correctly
            getWindow().getDecorView().requestApplyInsets();
        } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            // For Android 5.0 (API 21) and above
            getWindow().getDecorView().setSystemUiVisibility(
                View.SYSTEM_UI_FLAG_LAYOUT_STABLE |
                View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION |
                View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
            );
            
            // Make the status bar and navigation bar transparent
            getWindow().setStatusBarColor(Color.TRANSPARENT);
            getWindow().setNavigationBarColor(Color.TRANSPARENT);
        }
    }
}
