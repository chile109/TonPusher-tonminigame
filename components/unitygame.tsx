import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export function UnityGame() {
  const {
    unityProvider,
    isLoaded,
    sendMessage,
    addEventListener,
    removeEventListener,
  } = useUnityContext({
    loaderUrl: "UnityBuild/miniapp.loader.js",
    dataUrl: "UnityBuild/miniapp.data",
    frameworkUrl: "UnityBuild/miniapp.framework.js",
    codeUrl: "UnityBuild/miniapp.wasm",
  });

  return (
    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      backgroundColor: 'black', // 添加背景色以更明顯地顯示居中效果
    }}
  >

      <Unity
        unityProvider={unityProvider}
        style={{
          position: 'relative',
          height: '100%',
          maxWidth: '828px',
          aspectRatio: '828 / 1792',
          border: '2px solid black',
          background: 'grey',
          visibility: isLoaded ? 'visible' : 'hidden',
        }}
      />
  </div>
  );
}
