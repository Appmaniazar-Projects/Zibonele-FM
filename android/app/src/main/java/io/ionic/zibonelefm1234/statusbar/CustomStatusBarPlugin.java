package io.ionic.zibonelefm1234.statusbar;

import android.graphics.Color;
import android.os.Build;
import android.view.View;
import android.view.Window;
import android.view.WindowInsetsController;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.content.ContextCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsControllerCompat;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "CustomStatusBar")
public class CustomStatusBarPlugin extends Plugin {

    @PluginMethod
    public void setBackgroundColor(PluginCall call) {
        String color = call.getString("color");
        if (color == null) {
            call.reject("Color must be provided");
            return;
        }

        getActivity().runOnUiThread(() -> {
            try {
                Window window = getActivity().getWindow();
                
                // Set the status bar color
                window.setStatusBarColor(Color.parseColor(color));
                
                // For Android 11+ (API 30+), use the new WindowInsetsController API
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                    WindowInsetsControllerCompat controller = WindowCompat.getInsetsController(window, window.getDecorView());
                    // Use compatible method to set light status bar
                    if (isColorDark(Color.parseColor(color))) {
                        controller.setAppearanceLightStatusBars(true);
                    } else {
                        controller.setAppearanceLightStatusBars(false);
                    }
                } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    // For older versions, use the deprecated method as fallback
                    if (isColorDark(Color.parseColor(color))) {
                        window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
                    } else {
                        window.getDecorView().setSystemUiVisibility(0);
                    }
                }
                
                call.resolve();
            } catch (Exception ex) {
                call.reject("Error setting status bar color", ex);
            }
        });
    }
    
    private boolean isColorDark(int color) {
        double darkness = 1 - (0.299 * Color.red(color) + 0.587 * Color.green(color) + 0.114 * Color.blue(color)) / 255;
        return darkness < 0.5;
    }

    @PluginMethod
    public void setOverlaysWebView(PluginCall call) {
        boolean overlay = call.getBoolean("overlay", false);
        
        getActivity().runOnUiThread(() -> {
            try {
                Window window = getActivity().getWindow();
                
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
                    // For Android 11+ (API 30+), use the new API
                    WindowCompat.setDecorFitsSystemWindows(window, !overlay);
                } else {
                    // For older versions, use the deprecated method as fallback
                    int flags = window.getDecorView().getSystemUiVisibility();
                    if (overlay) {
                        // Set the layout to fullscreen, but keep the status bar visible
                        flags |= View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN;
                    } else {
                        // Clear the fullscreen layout flags
                        flags &= ~(View.SYSTEM_UI_FLAG_LAYOUT_STABLE | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
                    }
                    window.getDecorView().setSystemUiVisibility(flags);
                }
                
                call.resolve();
            } catch (Exception ex) {
                call.reject("Error setting overlay", ex);
            }
        });
    }
}
