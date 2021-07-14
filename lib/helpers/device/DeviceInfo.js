import { Platform, Dimensions } from "react-native";
// ? Screen Constants
const Screen = Dimensions.get("screen");
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const ScreenScale = Screen.scale;
const ScreenFontScale = Screen.fontScale;
// ? Window Constants
const Window = Dimensions.get("window");
const WindowWidth = Window.width;
const WindowHeight = Window.height;
const WindowFontScale = Window.fontScale;
const WindowScale = Window.scale;
const isIOS = Platform.OS === "ios";
const isAndroid = Platform.OS === "android";
const PlatformVersion = Platform.Version; 

export {
  isIOS,
  isAndroid,
  ScreenWidth,
  ScreenHeight,
  ScreenScale,
  ScreenFontScale,
  WindowWidth,
  WindowHeight,
  WindowScale,
  WindowFontScale,
  PlatformVersion,
};