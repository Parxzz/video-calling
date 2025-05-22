import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoComp = () => {
      const {roomID} = getUrlParams();
      //Url
      console.log(roomID);
      
      const containerRef = useRef(null);

      useEffect(() => {
         let myMeeting = async (element) => {
          if(!roomID || !containerRef.current) return;
     // generate Kit Token
      const appID = 1592308370;
      const serverSecret = "9d773a5f0cd7c0084bad1fb79ecfe087";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(), "anonymous",);

    
     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
  };
   myMeeting();
   return() => {
      // cleanup function
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
   }
}, [roomID]);
     
  return (
    <div
      className="myCallContainer"
      ref={containerRef}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}
  


export default VideoComp