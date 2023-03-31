// Create a Three.js scene
const scene = new THREE.Scene();

// Create a camera and add it to the scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 10, 20);
scene.add(camera);

// Create a renderer and set its size
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create an ocean surface geometry
const geometry = new THREE.PlaneGeometry(100, 100, 100, 100);

// Define the shader code for the ocean surface material
const vertexShader = `
    varying vec3 vPosition;
    void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    varying vec3 vPosition;
    uniform float time;
    uniform vec2 resolution;
    void main() {
        vec2 uv = (gl_FragCoord.xy / resolution.xy) * 10.0;
        vec3 color = vec3(0.0);
        float height = 0.0;
        for (int i = 1; i < 6; i++) {
            float amplitude = 1.0 / float(i);
            float frequency = float(i) * 2.0;
            float phase = time * frequency;
            vec2 offset = vec2(cos(phase), sin(phase));
            height += amplitude * abs(sin(dot(uv + offset, vec2(10.0, 20.0)) + time));
        }
        color = mix(vec3(0.1, 0.3, 0.5), vec3(1.0), pow(height, 3.0));
        gl_FragColor = vec4(color, 1.0);
    }
`;

// Create an ocean surface material using the shader code
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2() },
    },
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
});

// Create an ocean surface mesh and add it to the scene
const mesh = new THREE.Mesh(geometry, material);
mesh.rotation.x = -Math.PI / 2;
scene.add(mesh);

// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    const time = performance.now() / 1000;
    material.uniforms.time.value = time;
    material.uniforms.resolution.value.x = renderer.domElement.width;
    material.uniforms.resolution.value.y = renderer.domElement.height;
    renderer.render(scene, camera);
}

animate();