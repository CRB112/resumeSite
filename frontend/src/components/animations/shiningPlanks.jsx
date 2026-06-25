import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ShiningPlanks({ options = {} }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    const opts = {
      plankCount: 18,
      angleRad: Math.PI / 5,
      baseColor: 0x0a0a14,
      plankColor: 0x111128,
      shineColor: 0xffffff,
      shineWidth: .8,
      waveDuration: 2.8,
      waveDelay: 0.13,
      shimmerOpacity: 0.20,
      ...options,
    };

    /* renderer */
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    Object.assign(renderer.domElement.style, {
      position: "absolute", inset: "0", width: "100%", height: "100%",
      display: "block", zIndex: "0",
    });
    container.appendChild(renderer.domElement);

    /* scene / camera */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(opts.baseColor);
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    /* build planks */
    const planks = [];
    const totalWidth = 2 * (Math.ceil(1 / Math.cos(opts.angleRad)) + Math.abs(Math.tan(opts.angleRad)) + 0.5);
    const plankW = totalWidth / opts.plankCount;

    for (let i = 0; i < opts.plankCount; i++) {
      const group = new THREE.Group();
      group.rotation.z = -opts.angleRad;

      const body = new THREE.Mesh(
        new THREE.PlaneGeometry(plankW * 0.90, 8),
        new THREE.MeshBasicMaterial({ color: opts.plankColor })
      );

      /* shine strip – soft edges via vertex colours */
      const shineGeo = new THREE.PlaneGeometry(plankW * opts.shineWidth, 8, 4, 1);
      const pos = shineGeo.attributes.position;
      const cols = new Float32Array(pos.count * 3);
      for (let j = 0; j < pos.count; j++) {
        const t = Math.max(0, 1 - Math.abs(pos.getX(j)) / (plankW * opts.shineWidth * 0.5));
        cols[j * 3] = cols[j * 3 + 1] = cols[j * 3 + 2] = t;
      }
      shineGeo.setAttribute("color", new THREE.BufferAttribute(cols, 3));

      const shineMat = new THREE.MeshBasicMaterial({
        color: opts.shineColor,
        vertexColors: true,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      group.add(body);
      group.add(new THREE.Mesh(shineGeo, shineMat));
      group.position.set(-totalWidth / 2 + plankW * (i + 0.5), 0, 0);
      scene.add(group);
      planks.push({ shineMat, index: i });
    }

    /* resize */
    const resize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      const a = w / h;
      camera.left = -a; camera.right = a;
      camera.top = 1;   camera.bottom = -1;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    /* animation loop */
    const clock = new THREE.Clock();
    let raf;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      const t = clock.getElapsedTime();
      const cycle = opts.waveDuration + opts.waveDelay * opts.plankCount;
      for (const { shineMat, index } of planks) {
        const phase = ((t - index * opts.waveDelay) % cycle) / opts.waveDuration;
        shineMat.opacity =
          phase >= 0 && phase <= 1
            ? Math.pow(Math.sin(Math.PI * phase), 2) * opts.shimmerOpacity
            : 0;
      }
      renderer.render(scene, camera);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0 }} />;
}