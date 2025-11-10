# Using Frigate with NVIDIA GPU for Real-Time Cat Detection

Recently, I set up Frigate on my home server to detect cats on my security cameras using a NVIDIA 3060 GPU. This post is a high-level overview of the process, with links to the guides I followed and key configuration steps.

## Guides I Used

- [AI Server Homelab: Ollama & OpenWebUI on Proxmox LXC](https://digitalspaceport.com/how-to-setup-an-ai-server-homelab-beginners-guides-ollama-and-openwebui-on-proxmox-lxc/)
- [Running GPU-Enabled Containers in Your Home Lab](https://www.virtualizationhowto.com/2025/10/how-to-run-gpu-enabled-containers-in-your-home-lab/)
- [NVIDIA Container Toolkit Install Guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)
- [Frigate NVIDIA Detector Docs](https://docs.frigate.video/configuration/object_detectors/#nvidia-tensorrt-detector)

## High-Level Steps

1. **Install NVIDIA Drivers & Container Toolkit**

   - Follow the official [NVIDIA install guide](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html).
   - Make sure your GPU is recognized by Docker.

2. **Configure Docker Compose for Frigate**

   - Use the NVIDIA runtime and set up device reservations:
     ```yaml
     frigate:
       container_name: frigate
       deploy:
         resources:
           reservations:
             devices:
               - driver: nvidia
                 count: all
                 capabilities: [gpu]
     ```
   - You no longer need the old `/dev/dri/renderD128` line for dedicated NVIDIA setups.

3. **Set Up Frigate Detector & Model**

   - In your Frigate config:

     ```yaml
     detectors:
       onnx:
         type: onnx

     model:
       model_type: yolo-generic
       width: 320
       height: 320
       input_tensor: nchw
       input_dtype: float
       path: /config/yolov9-t-320.onnx
       labelmap_path: /labelmap/coco-80.txt
     ```

4. **Configure Cameras**
   - Example camera config:
     ```yaml
     cameras:
       living_room:
         ffmpeg:
           hwaccel_args: preset-nvidia
           output_args:
             record: preset-record-generic-audio-aac
           inputs:
             - path: rtsp://@localhost:8554/living_room
               input_args: preset-rtsp-restream
               roles: [detect, record, audio]
     ```

## Key Lessons

- Getting the model formatting right was crucial for Frigate to load the ONNX model.
- Hardware acceleration (`preset-nvidia`) made detection much faster.
- Using guides from the community saved a lot of troubleshooting time.

## Example Detection

![Cat Detection Example](assets/blog/cat-detection.jpg)
_Frigate detecting a cat in the living room._

## Conclusion

Setting up Frigate with a NVIDIA GPU is straightforward if you follow the right guides and pay attention to configuration details. The result is real-time, accurate object detection for your home cameras.

---

**Have questions or want to share your own setup? Drop a comment below!**
